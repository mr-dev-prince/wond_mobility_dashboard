import React, { useContext } from "react";
import logo from "../../assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { MdMarkUnreadChatAlt, MdMessage } from "react-icons/md";
import { RiChatOffLine } from "react-icons/ri";
import { FaBookReader } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import MessageCard from "../fragments/MessageCard";
import { messageContext } from "../../context/message.context";

const Dashboard = () => {
  const { message } = useContext(messageContext);

  console.log(message);

  return (
    <div className=" bg-[#D9D9D9] min-h-screen h-full min-w-full">
      <div className="px-8 py-4 bg-[#D9D9D9] flex justify-between fixed min-w-full">
        <div>
          <img className="h-12" src={logo} alt="" />
        </div>
        <div className="hidden lg:flex h-12 rounded-2xl p-4 gap-4 justify-start  items-center bg-white w-[80%]">
          <FaSearch size={24} color="#F26E26" />
          <input
            type="text"
            className="w-full outline-none border-none text-xl"
            placeholder="Search..."
          />
        </div>
        <div className="flex justify-center items-center">
          <TiThMenuOutline size={32} color="#F26E26" />
        </div>
      </div>
      <div className="px-8 pt-8 h-fit flex gap-10">
        <div className="flex h-[80vh] mt-20 fixed">
          <div className="h-full flex flex-col justify-between items-center px-4 py-8 rounded-2xl bg-white">
            <div className="flex flex-col gap-10">
              <MdMessage size={28} color="#F26E26" />
              <RiChatOffLine size={28} color="#F26E26" />
            </div>
            <div className="flex flex-col gap-14">
              <FaBookReader size={28} color="#F26E26" />
              <MdMarkUnreadChatAlt size={28} color="#F26E26" />
              <IoMdExit size={28} color="#F26E26" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-20 ml-28">
          {message?.map((item) => (
            <MessageCard
              name={item.name}
              phone={item.phone_number}
              message={item.message}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
