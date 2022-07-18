import React, { useEffect, useState } from "react";
import './style1.css';
const List2 = () => {
    const [initial, set] = useState([]);
    const functionForAPICall = async () => {
        const request = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
        
        const json1 = await request.json();
        const gameDone = json1.slice(1, 99)
        set(gameDone);
    }
    useEffect(() => {
        functionForAPICall();
    }, [])
    const [enter, fun] = useState('')
    return (
        <div className="class1" style={{backgroundColor:"black"}}>
            <div style={{ justifyContent: "center" }}>
                <input type='text' placeholder="Search For Game" onChange={event => { fun(event.target.value) }}
                    style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", marginTop: "10%", boxSizing: "border-box", padding: "2%", borderRadius: "15%" }} />
            </div>

            <div>
                {initial.filter((game) => {
                    if (fun === "") {
                        return game
                    }
                    else if (game.title.toLowerCase().includes(enter.toLowerCase())) {
                        return game;
                    }
                }).map((game, key) => {
                    return (
                        <div className="card" key={key}>
                            <h1>{game.title}</h1> <br /> <br /> <br /> <br /> <br />

                            <p>Platform: {game.platform}</p>
                            <p>Score: {game.score}</p>
                            <p>Genre: {game.genre}</p>
                            <p>Editors Choice: {game.editors_choice}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default List2;





