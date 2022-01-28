import "./Login.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
import intro from "../sounds/intro.mp3";

export default function Login({setPlayer, setUser, setUsername}) {
    
    const [nameForm, setNameForm] = useState('Enter your Name...')

    function handleLoginClick(e) {
        e.preventDefault();
        fetch("http://localhost:3000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            player_name: nameForm,
          }),
        })
          .then((r) => r.json())
          .then((loggedInUser) => setPlayer(loggedInUser))
          .then(setUser(true))
      }

    const [introSong] = useSound(intro);

    useEffect(() => {
    introSong();
    }, [introSong]);

    
    const inputRef = useRef();

    // const handleClick = () => {
    // inputRef.current.value && setUsername(inputRef.current.value);
    // };

    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

    const numBalls = 10;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()}em`;
        ball.style.height = ball.style.width;
        
        balls.push(ball);
        document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
        let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
        };

        let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
        );
    });



    return (
        <>
            <div className= "wallpaper"></div>
            <div className="start">
                <span className="loginTitle">Today's Contestant!</span>
                <form action="" className="start">
                    <input 
                        type="text" 
                        className="loginInput" 
                        placeholder="Enter your name..." 
                        onChange={(e=>setNameForm(e.target.value))}
                        ref={inputRef}
                    />
                    
                    <button className="loginButton" onClick={handleLoginClick}>Login</button>
                </form>
                {/* <button className="loginRegisterButton">Register</button>
                <Link className="link" to="/register">Register</Link> */}
            </div>
        </>
    )
}