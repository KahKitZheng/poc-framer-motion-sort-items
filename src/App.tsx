import { useState } from "react";
import { motion } from "framer-motion";
import "./App.scss";

const defaultAnswers = [
  { label: "Test 1", value: "Test 1", correct: false },
  { label: "Test 2", value: "Test 2", correct: true },
  { label: "Test 3", value: "Test 3", correct: true },
  { label: "Test 4", value: "Test 4", correct: false },
  { label: "Test 5", value: "Test 5", correct: false },
  { label: "Test 6", value: "Test 6", correct: true },
  { label: "Test 7", value: "Test 7", correct: false },
  { label: "Test 8", value: "Test 8", correct: false },
  { label: "Test 9", value: "Test 9", correct: true },
  { label: "Test 10", value: "Test 10", correct: false },
];

function App() {
  const [answers, setAnswers] = useState([...defaultAnswers]);

  // Make sure to return a new array and not just sort them, otherwise React won't re-render
  function sortAnswers() {
    // sort by correctness and then by label
    return setAnswers([
      ...answers.sort((a, b) =>
        a.correct === b.correct ? 0 : a.correct ? 1 : -1
      ),
    ]);
  }

  function resetAnswers() {
    return setAnswers([...defaultAnswers]);
  }

  return (
    <div>
      <h1>Sort items by correctness</h1>

      <ul className="list">
        {answers.map((answer) => (
          <motion.li
            key={answer.label} // Key has to be unique value and should not change on re-render (so definitely not index)
            className="list-item"
            layout="position" // Animate the new position of the item
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
          >
            <p className="label">{answer.label}</p>
            <span
              className={`type ${answer.correct ? `correct` : "incorrect"}`}
            >{`${answer.correct}`}</span>
          </motion.li>
        ))}
      </ul>

      <div className="buttons">
        <button onClick={sortAnswers}>sort</button>
        <button onClick={resetAnswers}>reset</button>
      </div>
    </div>
  );
}

export default App;
