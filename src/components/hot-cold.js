import React from 'react';

import GuessForm from './guess-form';
import Guess from './guess';
import GuessFeedback from './guess-feedback';
import RestartButton from './restart-button';

export default class HotCold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			computerNumber: null,
			guesses: [],
			feedback: '',
			restartGame: false
		}
	}

	generateRandom() {
		this.setState({
			computerNumber: Math.floor((Math.random() * 100) + 1),
			guesses: [],
			feedback: '',
			restartGame: false
		});
	}

	addGuess(guess) {
		console.log(this.state.computerNumber);
		const integerGuess = parseInt(guess);
		if(typeof(integerGuess) === "number" && guess >= 1 && guess <= 100) {
			this.setState({
			guesses: [...this.state.guesses, {
				guess
				}],
			feedback: ''
			});
			this.checkMatch(integerGuess);
		} else {
			this.setState({
				feedback: 'Please enter a number between 1 and 100.'
			});
		}
	}

	checkMatch(guess) {
		const difference = function(a, b) {return Math.abs(a-b);}

		if(guess === this.state.computerNumber) {
			this.setState({
				feedback: `You've got a match! The number is ${this.state.computerNumber}.`,
				restartGame: true
			});
		} else if(difference(guess, this.state.computerNumber) >= 11) {
			this.setState({
				feedback: `COLD! Keep guessing!`
			});
		} else if(difference(guess, this.state.computerNumber) <= 10) {
			this.setState({
				feedback: `HOT and so close! Keep guessing!`
			});
		}
	}

	

	render() {
		const guesses = this.state.guesses.map((guess, index) =>
			<Guess key={index} {...guess} />
			);
			
		if (this.state.computerNumber === null) {
			return <RestartButton onClick={e => this.generateRandom()} />;
		} else if(this.state.restartGame) {
			return (
				<div className="game-won">
					<GuessFeedback feedback={this.state.feedback} />
					<RestartButton onClick={e => this.generateRandom()} />
					<h3>Your Guess List:</h3>
						<ul>{guesses}</ul>
				</div>
				);
		} else {
			return (
				<div className="guess-form">
					<GuessForm onGuess={guess => this.addGuess(guess)} />
					<GuessFeedback feedback={this.state.feedback} />
					<h3>Your Current Guess List:</h3>
						<ul>{guesses}</ul>
				</div>
				);
			}
		}
	}