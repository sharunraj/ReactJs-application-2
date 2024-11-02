import React from "react";

export const ChangeText = () => {
  const [text, setText] = React.useState("Hello");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container m-5 p-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>Text Changer</h2>
        </div>
        <div className="card-body text-center">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Text"
            defaultValue="Hello"
          />
        </div>
        <div className="card-footer text-center">
          <h4>{text}</h4>
        </div>
      </div>
    </div>
  );
};
