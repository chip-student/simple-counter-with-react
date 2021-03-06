import React from "react";

import { SecondsCounter } from "./seconds-counter.js";

//create your first component
export function Home() {
	return (
		<div>
			<SecondsCounter seconds={1000} />
			{/* <SecondsCounter /> */}
		</div>
	);
}
