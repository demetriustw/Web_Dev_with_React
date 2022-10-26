import { useState, useContext } from "react";

import classes from "./MessagerPage.module.css";
import MessageContext from "../../store/messages-context";

const MessengerPage = () => {
  const messagesCtx = useContext(MessageContext);

  return (
    <section className={classes.starting}>
      <h1>Messages!</h1>
      <div className={classes.background}>
        <div className={classes.messageBox}></div>
        <div className={classes.textBox}>
          <input></input>
          <div className={classes.action}>
            <button>Send</button>
          </div>
        </div>
        <div className={classes.sideBar}>
          <div className={classes.action}>
            <button className={classes.addNew}>Add New Chat</button>
          </div>
          <div className={classes.action}>
            <button className={classes.self}>Personal Chat</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessengerPage;
