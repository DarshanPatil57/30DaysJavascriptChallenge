import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(0);

  function handleClick(index) {
    setToggle(toggle === index ? null : index);
  }

  const accordion = [];

  for (let i = 0; i < 4; i++) {
    accordion.push(
      <div key={i}>
        <div className="accordion w-full h-full p-2 m-2">
          <div
            className="question p-2 m-2 border border-black bg-black text-white cursor-pointer"
            onClick={() => handleClick(i)}
          >
            Question {i + 1}
          </div>
          <div
            className={`answer p-2 m-2 border ${toggle === i ? '' : 'hidden'}`}
          >
            Answer {i + 1}
          </div>
        </div>
      </div>
    );
  }

  return <>{accordion}</>;
}
