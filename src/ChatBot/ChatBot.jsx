//For Icons to work add this to head element in html
//  <link
// rel="stylesheet"
// href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
// />
// To Change Company Data change it in the CompanyInfo but keep the same foramt
//When You Wnat to add this to any website do forget to also add .env in the root and change the API key. Take .env from here

import { useState, useRef, useEffect } from "react";
import "./ChatBot.css";
import ChatBotIcon from "./ChatBotIcon/ChatBotIcon";
import ChatForm from "./ChatForm/ChatForm";
import ChatMessage from "./ChatMessage/ChatMessage";
import { companyInfo } from "./companyInfo";

export default function ChatBot() {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);
  const [showPopup, setPopup] = useState(false);

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Typing..."),
        { role: "model", text, isError },
      ]);
    };

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // Make the API call to get the bot's response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something Went Wrong!");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  const chatBodyRef = useRef(null); // Create a reference for the chat body

  // Scroll to the bottom with smooth behavior whenever chatHistory changes
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth", // This ensures smooth scrolling
      });
    }
  }, [chatHistory]); // This effect runs every time chatHistory is updated

  return (
    <div className={`chat-bot-container ${showPopup ? "show-chatbot" : ""} `}>
      <button onClick={() => setPopup((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot-popup">
        {/* ChatBot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">RamiForza Bot</h2>
          </div>
          <button
            onClick={() => setPopup((prev) => !prev)}
            className="material-symbols-outlined"
          >
            keyboard_arrow_down
          </button>
        </div>
        {/* ChatBot Body */}
        <div className="chat-body" ref={chatBodyRef}>
          {" "}
          {/* Attach the ref here */}
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
              Hey There <br /> How Can I Help You Today?
            </p>
          </div>
          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* ChatBot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}
