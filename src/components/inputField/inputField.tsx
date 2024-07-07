import { IconButton } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react';
import { FaRegPaperPlane } from "react-icons/fa";
import { SetStateAction } from "react";

interface InputFieldProps {
  message: string;
  btnDisabled: boolean;
  setMessage: React.Dispatch<SetStateAction<string>>;
  handleSubmit: (event: any) => void;
}

export default function InputField({
    message,
    btnDisabled,
    setMessage,
    handleSubmit,
  }: InputFieldProps) {
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="flex w-full items-center space-x-2">
                <Input
                    focusBorderColor="red.300"
                    variant={"outline"}
                    type="text"
                    placeholder="Type your message..."
                    name="message"
                    value={message}
                    onInput={(e: any) => {
                    setMessage(e.target.value);
                    }}
                />
                <IconButton
                    aria-label=""
                    icon={<FaRegPaperPlane />}
                    colorScheme="red"
                    variant={"solid"}
                    type="submit"
                    isDisabled={message.length < 1 || btnDisabled}
                />
            </div>
        </form>
    );
  }