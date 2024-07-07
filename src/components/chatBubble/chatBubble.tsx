interface ChatBubbleProps {
    text: string;
    isUser: boolean;
  }
  
  export default function ChatBubble({ text, isUser }: ChatBubbleProps) {
    return (
      <>
        <div
          className={`flex whitespace-pre-wrap ${
            isUser ? "justify-end items-end" : "justify-start items-end"
          }`}
        >
          <div
            className={`${
              isUser
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            } px-4 py-2 rounded-lg shadow mb-3`}
          >
            {text}
          </div>
        </div>
      </>
    );
  }
  