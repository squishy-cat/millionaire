import { useEffect, useRef } from "react";
import useSound from "use-sound";
import intro from "../sounds/intro.mp3";
import "./Start.css";

export default function Start({ setUser }) {
  
  const [introSong] = useSound(intro);

  useEffect(() => {
    introSong();
  }, [introSong]);

  
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUser(inputRef.current.value);
  };

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
    
      <div className="wallpaper"></div>
      <div className="start">
        <input
          className="startInput"
          placeholder="Enter your username"
          ref={inputRef}
          />
        <button className="startButton" onClick={handleClick}>
          Let's be a millionare!
        </button>
      </div>
    </>
  );
}