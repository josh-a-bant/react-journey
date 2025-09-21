import userImg from "../assets/user.png";
import robotImg from "../assets/message-chatbot.png";

const ChatbotMessages = ({ message, sender }) => {
  return (
    <div>
      {sender === "robot" && <img src={robotImg} width={40} />}
      {message}
      {sender === "user" && <img src={userImg} width={40} />}
    </div>
  );
};

export default ChatbotMessages;
