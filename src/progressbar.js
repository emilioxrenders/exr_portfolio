import React from 'react';

//Javascript code for the progressbar
//Done is a variable that can be given when imported to show how much of the bar is loaded
const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}

		setStyle(newStyle);
	}, 200);

	return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}
export default Progress;
