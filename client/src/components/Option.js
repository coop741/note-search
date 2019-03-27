import React from "react";

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        className="delete"
        // props.handleDeleteOption is not called directly, because
        // the event e argument would be passed up instead of the text value
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      />
    </div>
  );
};

export default Option;
