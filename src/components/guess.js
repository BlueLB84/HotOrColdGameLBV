import React from 'react';

export default function Guess(props) {
	return <li>{props.guess}</li>;	
};

Guess.defaultProps = {
	guess: ''
};