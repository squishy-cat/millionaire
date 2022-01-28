import "register.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register({setPlayer, setUser}) {

    const [nameForm, setNameForm] = useState('Enter your Name...')

    function handleClick(e) {
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

    return (
        <div className="wallpaper">
        <span className="start">Register</span>
            <form action="" className="register">
            <label>Username</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Enter your username..."
                    onChange={(e=>setNameForm(e.target.value))}
                    >
                </input>
                <button className="registerButton" onClick={handleClick}>Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
            {/* <Link className="link" to="/login">Login</Link> */}

        </div>
    )
}
