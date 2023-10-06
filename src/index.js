import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChatbotProvider } from "./Context/ChatbotContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChatbotProvider>
    <App />
  </ChatbotProvider>
);
