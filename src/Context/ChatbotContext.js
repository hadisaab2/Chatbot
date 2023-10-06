import { createContext ,useState} from "react";

export const ChatbotContext = createContext();
export const ChatbotProvider = ({ children }) => {
 
  const [screen, setscreen] = useState("notMobile");



  return (
    <ChatbotContext.Provider
      value={{
        screen: [screen, setscreen],

      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};
