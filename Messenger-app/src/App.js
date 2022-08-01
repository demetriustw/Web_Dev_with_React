import React, { useState } from "react";

import ConversationList from "./components/Conversations/ConversationList/ConversationList";
import CourseInput from "./components/Conversations/ConversationInput/ConversationInput";
import Chat from "./components/ConversationContent/Chat";
import "./App.css";

const App = () => {
  const [conversations, setconversations] = useState([
    { text: "Welcome!", id: "g1" },
    { text: "Me", id: "g2" },
  ]);

  const [convContent, setConvContent] = useState([
    { text: "Welcome!", id: {} },
    { text: "Me", id: "g2" },
  ]);

  const addConversationHandler = (enteredText) => {
    setConvContent((prevConvs) => {
      const updatedConvs = [...prevConvs];
      updatedConvs.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedConvs;
    });
  };

  const deleteItemHandler = (ChatId) => {
    setconversations((prevConv) => {
      const updatedConv = prevConv.filter((conv) => conv.id !== ChatId);
      return updatedConv;
    });
  };

  const openItemHandler = (ConvId, ChatId) => {
    setconversations((prevConv) => {
      const updatedConv =
        // if (prevConv.conv.id === ConvId && ConvId !== ChatId) {

        // }
        prevConv.filter((conv) => conv.id === ConvId && ConvId !== ChatId);
      return updatedConv;
    });
  };

  let convItems = (
    <p style={{ textAlign: "center" }}>
      No Conversations found. Maybe add one?
    </p>
  );

  if (conversations.length > 0) {
    convItems = (
      <ConversationList
        items={conversations}
        onOpenItem={openItemHandler}
        onDeleteItem={deleteItemHandler}
      />
    );
  }

  return (
    <div>
      <section id="text-box">
        <CourseInput onAddConversation={addConversationHandler} />
      </section>
      <section id="conversations">
        {convItems}
        {/* {Conversations.length > 0 && (
          <ConversationList
            items={Conversations}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
      <section id="content">{/* <Chat /> */}</section>
    </div>
  );
};

export default App;
