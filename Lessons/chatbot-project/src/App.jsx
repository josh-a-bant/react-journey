import "./App.css";
import ChatbotHeading from "./components/ChatbotHeading";
import ChatbotMessages from "./components/ChatbotMessages";

function App() {
  return (
    <>
      <ChatbotHeading />
      <ChatbotMessages message="Hello chatbot" sender="user" />
      <ChatbotMessages message="Hello! How can i help you" sender="robot" />
      <ChatbotMessages message="can you get me today date ?" sender="user" />
      <ChatbotMessages message="Today is september 20" sender="robot" />
    </>
  );
}

export default App;
