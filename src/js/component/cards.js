import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	let valor_objeto;

	if (typeof props.objeto === "object") {
		valor_objeto = props.objeto;
	} else {
		valor_objeto = props.valor;
	}
	return (
		<div className="d-flex p-1 m-1 bg-dark">
			<div className="card justify-content-center p-2 border bg-dark border-light">
				<h1 className="text-white">{valor_objeto}</h1>
			</div>
		</div>
	);
}

Cards.propTypes = {
	valor: PropTypes.number,
	objeto: PropTypes.object
};
