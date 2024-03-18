import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const MessageCard = (props) => {
  let name = props.name.substring(0, 14);

  let message = props.message.substring(0, 150) + "...";

  return (
    <div className="w-[300px] h-[230px] p-3 rounded-xl flex flex-col gap-2 bg-white">
      <div className="text-3xl font-bold text-[#0B0B45]">{name}</div>
      <div className="flex justify-between text-xl pr-2 font-semibold text-slate-600 items-center">
        {props.phone} <FaPhoneAlt color="#F26E26" />
      </div>
      <div className="text-lg">{message}</div>
      <div className=" text-end mt-auto">{props.time}</div>
    </div>
  );
};

export default MessageCard;
