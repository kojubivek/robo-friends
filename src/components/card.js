import React from 'react';
//import {robots} from 'Robots.js'

const Card = (props) => {
	const {name, email, id} = props;
	return(
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt ='robots' src = {`https://robohash.org/${id}test?200x200`} />
		<div>
			<h2>{name}</h2>
			<p> {email}</p>
		</div>
		</div>
	);
}


export default Card;