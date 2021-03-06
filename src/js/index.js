//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

function SecondsCounter(props) {
	return (
		<div className="container">
			<div className="d-flex justify-content-center w-50 p-1 bg-dark">
				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">
							<i className="fas fa-clock"></i>
						</h1>
					</div>
				</div>

				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">{props.num6}</h1>
					</div>
				</div>
				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">{props.num5}</h1>
					</div>
				</div>
				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">{props.num4}</h1>
					</div>
				</div>
				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">{props.num3}</h1>
					</div>
				</div>
				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">{props.num2}</h1>
					</div>
				</div>
				<div className="d-flex m-1 bg-dark">
					<div className="card justify-content-center p-2 border bg-dark border-light">
						<h1 className="text-white">{props.num1}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	num6: PropTypes.number,
	num5: PropTypes.number,
	num4: PropTypes.number,
	num3: PropTypes.number,
	num2: PropTypes.number,
	num1: PropTypes.number
};

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

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

	if (num6 == 10) {
		num6 = 0;
		num5 = 0;
		num4 = 0;
		num3 = 0;
		num2 = 0;
		num1 = 0;
	}

	// console.log(
	// 	" num6 --> " +
	// 		num6 +
	// 		" num5 --> " +
	// 		num5 +
	// 		" num4 --> " +
	// 		num4 +
	// 		" num3 --> " +
	// 		num3 +
	// 		" num2 --> " +
	// 		num2 +
	// 		" num1 --> " +
	// 		num1
	// );
}

// render your react application
setInterval(function() {
	contador();

	ReactDOM.render(
		<SecondsCounter
			num6={num6}
			num5={num5}
			num4={num4}
			num3={num3}
			num2={num2}
			num1={num1}
		/>,
		document.querySelector("#app")
	);
}, 1000);

// ReactDOM.render(<Home />, document.querySelector("#app"));
