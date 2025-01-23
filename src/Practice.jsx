import React, { useState } from 'react';

function Practice(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnClick2 = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText('');
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#f8d7da" : "#ffffff", // Light red for "danger", white for default
                color: props.mode === "dark" ? "#721c24" : "#000000", // Dark red for "danger", black for default
              }}
            ></textarea>
          </div>
          <button
            type="button"
            className={`btn ${props.mode === "dark" ? "btn-danger" : "btn-primary"}`}
            onClick={handleOnClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className={`btn mx-3 ${props.mode === "dark" ? "btn-danger" : "btn-primary"}`}
            onClick={handleOnClick2}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className={`btn mx-3 ${props.mode === "dark" ? "btn-danger" : "btn-primary"}`}
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className={`btn mx-3 ${props.mode === "dark" ? "btn-danger" : "btn-primary"}`}
            onClick={copyText}
          >
            Copy Text
          </button>
        </div>
      </form>
    </>
  );
}

export default Practice;
