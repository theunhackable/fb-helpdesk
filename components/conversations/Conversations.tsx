import React from "react";
import Conversation from "./Conversation";
import {
  MessageSquareIcon,
  RotateCwIcon,
} from "lucide-react";

const Conversations = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-white z-50 w-96">
      <section className="flex items-center justify-between p-5 border-b">
        <div className="flex items-center gap-2">
          <MessageSquareIcon />
          <h2 className="text-xl font-semibold">Conversations</h2>
        </div>
        <div>
          <RotateCwIcon />
        </div>
      </section>
      <section className="flex-grow overflow-y-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </section>
    </div>
  );
};

export default Conversations;
