import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
import ChatMessages from "./ChatMessages";

const ChatbotHeading = ({ chatMessages, setChatMessages }) => {
  // function handleKeyDown(event) {
  //   if (event.key === "Enter") {
  //     console.log("hi");
  //   } else if (event.key === "Escape") {
  //     console.log("hello");
  //   }
  // }
  // return (
  //   <>
  //     <input
  //       placeholder="send a message to chatbox"
  //       size={30}
  //       onKeyDown={handleKeyDown}
  //     />
  //     <button>send</button>
  //   </>
  // );

  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
};

export default ChatbotHeading;
