import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./ConversationInput.module.css";

const ConversationInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const ConversationInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddConversation(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <input type="text" onChange={ConversationInputChangeHandler} />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ConversationInput;
