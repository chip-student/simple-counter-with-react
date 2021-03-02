import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Cards } from "./cards.js";

export function SecondsCounter(props) {
	let [num1, setNum1] = useState(0);
	let [num2, setNum2] = useState(0);
	let [num3, setNum3] = useState(0);
	let [num4, setNum4] = useState(0);
	let [num5, setNum5] = useState(0);
	let [num6, setNum6] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setNum1(num1++);
			setNum2(num2++);
			setNum3(num3++);
			setNum4(num4++);
			setNum5(num5++);
			setNum6(num6++);
			if (num1 > 9) {
				num1 = 0;
			}
			if (num2 > 9) {
				num2 = 0;
			}
			if (num3 > 9) {
				num3 = 0;
			}
			if (num4 > 9) {
				num4 = 0;
			}
			if (num5 > 9) {
				num5 = 0;
			}
			if (num6 > 9) {
				num6 = 0;
			}
		}, props.seconds);
	}, []);
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
