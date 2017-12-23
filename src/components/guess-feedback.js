import React from 'react';

export default function GuessFeedback(props) {
	return (
		<div className="guess-feedback">
			{props.feedback}
		</div>
	);
}

GuessFeedback.defaultProps = {
	feedback: ''
};