import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function Test() {
  const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

  useEffect(() => {
    // count.current = count.current + 1;
alert("a")
});

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)+1}
      />
      <h1>Render Count: {inputValue}</h1>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

/*
Try typing in the input field, and you will
see the application render count increase.
*/