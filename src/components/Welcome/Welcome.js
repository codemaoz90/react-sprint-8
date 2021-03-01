import { useState } from "react";
export default function Welcome({ stateWelcome, setStateWelcome }) {
	function changeState(e) {
		e.preventDefault();
		setStateWelcome(!stateWelcome);
	}
	return (
		<div>
			<h1>Bienvenido a la mejor pagina de chistes random!!!</h1>
			<button onClick={changeState}>Acceder</button>
		</div>
	);
}
