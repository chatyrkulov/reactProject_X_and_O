import React, {useState} from "react";
import Board from './Board';
import {calculateWinner} from "../logics"
import './game.css';

const Game =()=>{
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board);


	const headleClick= (index) =>{
		const boardCopy = [...board];
		if(winner || boardCopy[index])return null;

		boardCopy[index] = xIsNext ? 'X' : 'O';


		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	}


	const startNewGame = () =>{
		return(
			<button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Clear</button>
		)
	}
	return(
		<div className="wrapper">
			{startNewGame()}
			<Board squares={board} click={headleClick}/>
			<p className="game_info">{winner ?  'Winner ' + winner : 'Now Walking ' + (xIsNext ? 'X':'O')}</p>
		</div>
	);
}

export default Game;