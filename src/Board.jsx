import { useState } from "react";
import "./App.css";
import Squer from "./Header";
export default function Board(){
    const [xIsNext,setxIsNext]=useState(true);
     const [ Squers,setSquers]=useState( Array(9).fill(null));
     const handleClick=(i)=>{
            const nextSquares=Squers.slice();
            if (Squers[i]){
                return;
            }
          if (xIsNext){
            nextSquares[i]="x";
          } else{
            nextSquares[i]="O";
          }
            setSquers(nextSquares);
            setxIsNext(!xIsNext);
     }
     const CheckWinner=()=>{
        const winner=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
        for(let logic of winner){
            const [a,b,c]=logic;
            if (Squers[a]===Squers[b]&& Squers[a]===Squers[c]&& Squers[a]!=="null"){
                return Squers[a];
            }
        } return "withdrew";
     }
     const winner = CheckWinner();
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

     
    return(
        <>
        <div className="status">{status}</div>
    
            <div className="board-row">
                <Squer val={Squers[0] } onsquareClick={()=>handleClick(0)}/>
                <Squer val={Squers[1]} onsquareClick={()=>handleClick(1)}/>
                <Squer val={Squers[2]} onsquareClick={()=>handleClick(2)}/>    
            </div>
            <div className="board-row">
                <Squer val={Squers[3]} onsquareClick={()=>handleClick(3)}/>
                <Squer val={Squers[4]} onsquareClick={()=>handleClick(4)}/>
                <Squer val={Squers[5]} onsquareClick={()=>handleClick(5)}/>    
            </div>
            <div className="board-row">
                <Squer val={Squers[6]} onsquareClick={()=>handleClick(6)}/>
                <Squer val={Squers[7]} onsquareClick={()=>handleClick(7)}/>
                <Squer  val={Squers[8]} onsquareClick={()=>handleClick(8)}/>    
            </div>
        
        </>
    );

}