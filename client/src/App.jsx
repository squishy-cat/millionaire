import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Login from "./components/Login";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";


function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What language does Node.js use?",
      /* here we can slot in the questions and answers from our backend*/
      answers: [
        {
          text: "TypeScript", /* we can replace answers from backend here*/
          correct: false,
        },
        {
          text: "JavaScript", /* we can replace answers from backend here*/
          correct: true,
        },
        {
          text: "React", /* we can replace answers from backend here*/
          correct: false,
        },
        {
          text: "Python", /* we can replace answers from backend here*/
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the only sport that was played on the moon?",
      answers: [
        {
          text: "Trampoline",
          correct: false,
        },
        {
          text: "Football",
          correct: false,
        },
        {
          text: "Baseball",
          correct: false,
        },
        {
          text: "Golf",
          correct: true,
        },
      ],
    },
    {
        id: 4,
        question: "When one is envious, they are said to be what color?",
        answers: [
            {
            text: "Red",
            correct: false,
            },
            {
            text: "Green",
            correct: true,
            },
            {
            text: "White",
            correct: false,
            },
            {
            text: "Black",
            correct: false,
            },
        ],
        },
        {
        id: 5,
        question: "What animal breathes out of its butt?",
        answers: [
            {
            text: "Turtles",
            correct: true,
            },
            {
            text: "Humans",
            correct: false,
            },
            {
            text: "Birds",
            correct: false,
            },
            {
            text: "Caterpillars",
            correct: false,
            },
        ],
        },
        {
        id: 6,
        question: "What is the #1 seller at Walmart?",
        answers: [
            {
            text: "Televisions", 
            correct: false,
            },
            {
            text: "Storage Containers",
            correct: false,
            },
            {
            text: "Toilet Papers",
            correct: false,
            },
            {
            text: "Bananas",
            correct: true,
            },
        ],
      },
      {
        id: 7,
        question: "What alcoholic drink is mainly made from juniper berries?",
        answers: [
        {
            text: "Wine",
            correct: false,
        },
        {
            text: "Gin",
            correct: true,
        },
        {
            text: "Vodka",
            correct: false,
        },
        {
            text: "Whiskey",
            correct: false,
        },
        ],
    },
    {
        id: 8,
        question: "A dog sweats through which part of its body?",
        answers: [
        {
            text: "Its paw",
            correct: true,
        },
        {
            text: "Its nose",
            correct: false,
        },
        {
            text: "Its tongue",
            correct: false,
        },
        {
            text: "Its mouth",
            correct: false,
        },
        ],
    },
    {
        id: 9,
        question: "What's a group of kittens called?",
        answers: [
        {
            text: "Kitties",
            correct: false,
        },
        {
            text: "Kits",
            correct: false,
        },
        {
            text: "Kittle",
            correct: false,
        },
        {
            text: "Kindle",
            correct: true,
        },
        ],
    },
    {
        id: 10,
        question: "In the state of Georgia, it is illegal to eat what with a fork?",
        answers: [
            {
            text: "Sweet Tea",
            correct: false,
            },
            {
            text: "Fried Chicken",
            correct: true,
            },
            {
            text: "Fries",
            correct: false,
            },
            {
            text: "Pizza",
            correct: false,
            },
        ],
        },
        {
        id: 11,
        question: "Where do kiwi fruits orginally come from?",
        answers: [
            {
            text: "China",
            correct: true,
            },
            {
            text: "France",
            correct: false,
            },
            {
            text: "New Zealand",
            correct: false,
            },
            {
            text: "Singapore",
            correct: false,
            },
        ],
        },
        {
        id: 12,
        question: "How many degrees does the earth rotate each hour?",
        answers: [
            {
            text: "14 degrees", 
            correct: false,
            },
            {
            text: "11 degrees",
            correct: false,
            },
            {
            text: "12 degrees",
            correct: false,
            },
            {
            text: "15 degrees",
            correct: true,
            },
        ],
      },
      {
        id: 13,
        question: "What comes down but never goes up?",
        answers: [
          {
            text: "My hope during phase 1",
            correct: false,
          },
          {
            text: "Rain",
            correct: true,
          },
          {
            text: "The amount in my bank account",
            correct: false,
          },
          {
            text: "Clouds",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: "To celebrate its 30th birthday (in 2010), Google placed a playable verison of what arcade game on its homepage?",
        answers: [
          {
            text: "Pac-Man",
            correct: true,
          },
          {
            text: "Tetris",
            correct: false,
          },
          {
            text: "Pong",
            correct: false,
          },
          {
            text: "Tic-tac-toe",
            correct: false,
          },
        ],
      },
      {
        id: 15,
        question: "What famous actress once tried to hire a hitman to kill her?",
        answers: [
          {
            text: "Elizabeth Taylor",
            correct: false,
          },
          {
            text: "Debbie Reynolds",
            correct: false,
          },
          {
            text: "Marilyn Monroe",
            correct: false,
          },
          {
            text: "Angelina Jolie",
            correct: true,
          },
        ],
      },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    
    <div className="app">
      {!username ? (
        <Login setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li 
                  className = {questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} 
                >  
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;