import React, { Component } from 'react'
import "../themes/Game.css"
import Navbar from '../routes/Navbar'


class TicTac extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			P1_symbol: "X",
             P2_symbol: "O",
             currentTurn: "X",
		    	board: ['', '', '', '', '', '', '', '', ''],
		    	winner: null
		}
	}
	handleClick(index) {
		if(this.state.board[index] === '' && !this.state.winner) {
			this.state.board[index] = this.state.currentTurn;
			this.setState({
				board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.P1_symbol ? this.state.P2_symbol : this.state.P1_symbol,
				winner: this.ConfirmWinner()
			});
		}
	}
	
        ConfirmWinner(){
		let currentTurn = this.state.currentTurn;
		let symbols = this.state.board;
		const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
		return winningCombos.find(i=>
			symbols[i[0]] !== ''
			&& symbols[i[1]] !== ''
			&& symbols[i[2]] !== ''
			&& symbols[i[0]] === symbols[i[1]]
			&& symbols[i[1]] === symbols[i[2]] ? currentTurn : false
		)
	}
	
	render() {
		return (
			<div className='content-Area'>
                <Navbar/>
                <h1>Tic-Tac-Toe</h1>
				<h1>The Winner is the one who played block(s): {this.state.winner}</h1>
				<div className='board-Design'>
					{this.state.board.map((cell, index) => (
						<div className='square-Design' key={index} onClick={()=>this.handleClick(index)}>{cell}</div>
					))}
				</div>
			</div>
		)
	}
} export default TicTac;
