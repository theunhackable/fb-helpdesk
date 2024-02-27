import React from "react";
import Conversations from "@/components/conversations/Conversations";
import { Input } from "@/components/ui/input";
import Message from "@/components/messages/Message";
import { Button } from "@/components/ui/button";
import { SendHorizonalIcon, SendIcon } from "lucide-react";

const UserConnectPage = () => {
  const messages = [
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true }, { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true }, { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
    { message: "hello world", isSender: false },
    { message: "hello. How are you", isSender: true },
  ];
  return (
    <main className="flex">
      <aside>
        <Conversations />
      </aside>

      <div className="flex flex-col justify-between flex-grow h-screen">
        
        <div className="flex-shrink">
          <h2 className="text-xl p-5 border-b border-l font-bold">
            Amit G
          </h2>
        </div>

        <div className=" flex-grow overflow-y-auto flex flex-col justify-between">
          <div className="p-5 flex flex-col gap-2">
            {messages.map((message, i) => (
              <Message
                key={message.message}
                isReply={message.isSender}
                message={message.message}
              />
            ))}
          </div>
        </div>
        <div className="p-5 flex-shrink flex items-cetner gap-2">
            <textarea
              className="w-full h-full"
              // type="text"
              placeholder={`message {Amit G}`}
            />
            
            <Button><SendHorizonalIcon /></Button>
          </div>
      </div>
      <section className="min-w-96 border-l">
        User Name and other details
      </section>
    </main>
  );
};

export default UserConnectPage;
