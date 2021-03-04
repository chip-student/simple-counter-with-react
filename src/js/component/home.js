import React from "react";
// import PropTypes from "prop-types";

import { SecondsCounter } from "./seconds-counter.js";

//create your first component
export function Home() {
	// contador();
	// setInterval(contador, props.seconds);
	return (
		<div className="text-center">
			<SecondsCounter />
		</div>
	);
}
