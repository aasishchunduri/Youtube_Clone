import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

export const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api polling happens here

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" border border-black h-[550px] w-full bg-slate-100 rounded-lg shadow-sm overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((e, i) => (
          <ChatMessage key={i} name={e.name} message={e.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-blue-200 flex-row"
        onSubmit={(e) => {
          console.log("Sumbit", liveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Akshay",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-70 bg-gray-200"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className="px-2 mx-2 bg-green-300">Send</button>
      </form>
    </>
  );
};
