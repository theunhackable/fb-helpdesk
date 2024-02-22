import React from "react";

const Message = ({
  isReply,
  message,
}: {
  isReply: boolean;
  message: string;
}) => {
  return (
    <>
      {isReply ? (
        <span className='bg-gray-200 shadow-sm px-3 py-2 rounded-lg self-end'>{message}</span>
      ) : (
        <span className='bg-primary-accent text-white shadow-sm  p-3 px-3 py-2 rounded-lg self-start'>{message}</span>
      )}
    </>
  );
};

export default Message;
