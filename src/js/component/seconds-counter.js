import React from "react";
import PropTypes from "prop-types";

import { Cards } from "./cards.js";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

export function SecondsCounter() {
	// setInterval(contador, props.seconds);
	contador();
	return (
		<div className="container">
			<div className="row p-1 bg-dark">
				<Cards objeto={<i className="fas fa-clock"></i>} />
				<Cards valor={num6} />
				<Cards valor={num5} />
				<Cards valor={num4} />
				<Cards valor={num3} />
				<Cards valor={num2} />
				<Cards valor={num1} />
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

function contador() {
	num1++;

	if (num1 == 10) {
		num1 = 0;
		num2++;
	}
	if (num2 == 10) {
		num2 = 0;
		num3++;
	}
	if (num3 == 10) {
		num3 = 0;
		num4++;
	}
	if (num4 == 10) {
		num4 = 0;
		num5++;
	}
	if (num5 == 10) {
		num5 = 0;
		num6++;
	}
	console.log(
		" num6 --> " +
			num6 +
			" num5 --> " +
			num5 +
			" num4 --> " +
			num4 +
			" num3 --> " +
			num3 +
			" num2 --> " +
			num2 +
			" num1 --> " +
			num1
	);
}
