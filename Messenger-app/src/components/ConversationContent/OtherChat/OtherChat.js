import React from "react";

import ConversationItem from "../../Conversations/ConversationItem/ConversationItem";
import "./OtherChat.css";

const OtherChat = (props) => {
  return (
    <ul className="Conversation-list">
      {props.items.map((Conv) => (
        <ConversationItem key={Conv.id} id={Conv.id}>
          {Conv.text}
        </ConversationItem>
      ))}
    </ul>
  );
};

export default OtherChat;
