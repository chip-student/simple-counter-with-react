import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { SecondsCounter } from "./seconds-counter.js";

//create your first component
export function Home() {
	return (
		<div className="text-center">
			<SecondsCounter seconds={1000} />
		</div>
	);
}
