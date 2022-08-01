import React from "react";

import ConversationItem from "../ConversationItem/ConversationItem";
import "./ConversationList.css";

const ConversationList = (props) => {
  return (
    <ul className="Conversation-list">
      {props.items.map((Conv) => (
        <div>
          <ConversationItem
            key={Conv.id}
            id={Conv.id}
            onOpen={props.onOpenItem}
            onDelete={props.onDeleteItem}
          >
            {Conv.text}
          </ConversationItem>
        </div>
      ))}
    </ul>
  );
};

export default ConversationList;
