import React from 'react';

export default class GuessForm extends React.Component {
	constructor(props) {
		super(props);
	};

	onSubmit(event) {
			event.preventDefault();
			const guess = this.guessInput.value;
			if (guess && this.props.onGuess) {
				this.props.onGuess(guess);
			}
			this.guessInput.value = '';
		}

	

	render() {
	
		return (
				
				<form className="add-guess" onSubmit={(e) => this.onSubmit(e)}>
					<label>Guess a number between 1 and 100: </label>
					<input type="text" pattern="[0-9]*" ref={input => this.guessInput = input} />
					<button>Guess</button>
				</form>
		);

	}

}