import React from "react";

const MessageContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  // removeItem: (id) => {},
  clearMessages: () => {},
});

export default MessageContext;
