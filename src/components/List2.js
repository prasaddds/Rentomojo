import React, { useEffect, useState } from "react";
import './style1.css';
const List2=()=>{
    const [gamelist,setGamelist]=useState([]);
    const getGameData=async()=>{
        const response=await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
        // console.log(response);
        const gameData=await response.json();
        const gameDone=gameData.slice(1,99)
        setGamelist(gameDone);
    }
    useEffect(()=>{
        getGameData();
    },[])
    const [searchterm,setSearchterm]=useState('')
    return(
        <div className="class1">
            <div style={{justifyContent:"center"}}>
                <input type='text' placeholder="Search For Game" onChange={event=>{setSearchterm(event.target.value)}} 
                style={{display:"flex",height:"100%",width:"100%",justifyContent:"center",marginTop:"10%",boxSizing:"border-box",padding:"2%",borderRadius:"15%"}}/>
            </div>

            <div>
                {gamelist.filter((game)=>{
                    if(setSearchterm===""){
                        return game
                    }
                    else if(game.title.toLowerCase().includes(searchterm.toLowerCase())){
                        return game;
                    }
                }).map((game,key)=>{
                    return(
                        <div className="card" key={key}>
                  <h1>{game.title}</h1> <br/> <br/> <br/> <br/> <br/>
              
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





