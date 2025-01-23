import React, { useState } from 'react';

function TextForm2(props) {
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
      {/* <form>
        <div className="container">
          <div className="mb-3">
            <textarea
              className="form-control"
              id="myBox"
              rows="8"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleOnClick}>
            Convert to Uppercase
          </button>
          <button type="button" className="btn btn-primary mx-3" onClick={handleOnClick2}>
            Convert to Lowercase
          </button>
          <button type="button" className="btn btn-primary mx-3" onClick={handleClearText}>
            Clear Text
          </button>
          <button type="button" className="btn btn-primary mx-3" onClick={copyText}>
            Copy Text
          </button>
        </div>
      </form> */}
    </>
  );
}

export default TextForm2;