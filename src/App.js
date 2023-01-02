import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(0)
  const [currentQ, setCurrentQ] = useState([])
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [count, setCount] = useState(0);

  const questions = [
    {
      text: "I see myself as a successful person.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },

      ],
    },
    {
      text: "I can control my excitement around other people.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can deal with difficulties in life.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to participate in social events.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I can express myself comfortably.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I do not hesitate to take responsibility.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
    {
      text: "I love myself.",
      options: [
        { id: 0, text: "never", isCorrect: false },
        { id: 1, text: "rarely", isCorrect: false },
        { id: 3, text: "often", isCorrect: true },
      ],
    },
  ];

  const getQuestion = () => {
    if (data < 7) {
      setCurrentQ(questions[data])
    }
    else if (data >= 7) {
      setData(0)
      setCurrentQ(0)
      handleRestart()
    }


  }
  // useEffect(() => {
  //   getQuestion();
  // }, []);

  const handleClick = (e) => {
    if (e.target.className === "count") {
      setCount(count + 1)
    }
    setShow(false)
    setData(data + 1)
    getQuestion()

  }
  const handleRestart = (e) => {
    setShow2(!show2)
    getQuestion()
    setData(1)
  }



  const score = () => {
    return (count * 7 / 10)
  }

  console.log(questions[data])
  console.log(currentQ)
  console.log(data)
  console.log(count)
  console.log(currentQ.options)

  return (
    <div className="App">
      <h1>Self Reliance Test</h1>
      <h3>Current Score : {score()} </h3>
      <h5>Question {data} out of 7</h5>
      <p>{currentQ.text}</p>
      {currentQ.options?.map((item, index) => {
        console.log(item)
        return (
          <div key={index}>
            {item.text === "often" ? <button className='count' onClick={handleClick}>{item.text}</button> : <button className="false" onClick={handleClick}>{item.text}</button>}
          </div>
        )
      }
      )}
      {show && <button onClick={handleClick}>Start</button>}
      {show2 ?
        <button onClick={handleRestart}>Restart</button> : null}
    </div>
  );
}

export default App;
