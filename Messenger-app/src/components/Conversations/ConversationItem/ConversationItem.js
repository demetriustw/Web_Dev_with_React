import React from "react";

import "./ConversationItem.css";

const ConversationItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  const openHandler = () => {
    props.onOpen(props.id);
  };

  return (
    <div>
      <li className="Conversations" onClick={openHandler}>
        {props.children}
      </li>
      {/* <li className="Rename"></li> */}
      <li className="Delete" onClick={deleteHandler}>
        X
      </li>
    </div>
  );
};

export default ConversationItem;
