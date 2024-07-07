import { useEffect, useState } from "react";
import ChatBubble from "./components/chatBubble/chatBubble";
import TypingIndicator from "./components/typingIndicator/typingIndicator";
import InputField from "./components/inputField/inputField";

type Message = {
  text: string;
  isUser: boolean;
};

function App() {
  const initialMessages: Message[] = [];
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  async function handleSubmit(event: any) {
    if (!isTyping) {
      setIsTyping(true);
      event.preventDefault();

      let question = message;

      setMessage("");
      setMessages([
        ...messages,
        {
          text: question,
          isUser: true,
        },
      ]);

      const result = await fetch(`${process.env.SERVER_ENDPOINT}/ask`, {
        method: "POST",
        body: JSON.stringify({ input: question }),
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      const jsonResponse = await result.json();
      const formattedResponse = jsonResponse.message.trim();

      setIsTyping(false);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: formattedResponse,
          isUser: false,
        },
      ]);
    }
  }

  const getGreetingMessage = async () => {
    const result = await fetch(`${process.env.SERVER_ENDPOINT}/greeting-message`, {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const jsonResponse = await result.json();

    setMessages([
      {
        text: jsonResponse.message.trim(),
        isUser: false,
      },
    ]);
  };

  useEffect(() => {
    chrome.storage.local.get(['messages'], (result) => {
      const savedMessages: Message[] = result.messages || [];
      setMessages(savedMessages);

      if (savedMessages.length === 0) {
        getGreetingMessage();
      }
    });
  }, []);

  useEffect(() => {
    chrome.storage.local.set({
      messages: messages
    })
  }, [messages])

  return (
    <div className="container mx-auto py-6 max-w-4xl h-screen flex flex-col justify-end gap-10 chat-wrap">
      <div className="overflow-auto pe-4">
        {messages.map((el, idx) => (
          <ChatBubble key={idx} text={el.text} isUser={el.isUser} />
        ))}
        {isTyping && <TypingIndicator />}
      </div>
      <InputField
        message={message}
        btnDisabled={isTyping}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
