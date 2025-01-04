import { useRef } from "react";

export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // update chat istory with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    //Add a thinking.... place holder for the bot's response
    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Typing..." },
      ]);
      // call the function to generate the bot's respose
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `using the details provided above, please address this query: ${userMessage}`,
        },
      ]);
    }, 600);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
}
