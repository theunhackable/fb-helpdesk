import React from "react";
import { Checkbox } from "../ui/checkbox";

const Conversation = () => {
  return (
    <div className="p-5 bg-white hover:cursor-pointer hover:bg-slate-100 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <Checkbox />
          <div>
            <p className="text-sm font-bold">Amit G</p>
            <p className="text-xs text-gray-500 font-semibold">Facebook DM</p>
          </div>
        </div>
        <div>
            <p className="text-xs font-medium">

            10m
            </p>
        </div>
      </div>
      <div className="ml-6 mt-2">
        <p className="text-xs font-semibold">Asowme product</p>
        <p className="text-xs italic font-light truncate">adsfasdfadsfaasdf sdfasdf adfadsfads adsfasdfasdfasdfasd asdfasdfasdfad</p>
      </div>
    </div>
  );
};

export default Conversation;
