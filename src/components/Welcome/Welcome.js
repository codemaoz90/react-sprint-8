import { Link, withRouter } from "react-router-dom";

const styleButton = {
	color: "white",
	backgroundColor: "black",
	padding: "1rem",
	fontSize: "2rem",
	marginTop: "2rem",
};
const styleH1 = {
	color: "white",
	fontSize: "4rem",
};

export default function Welcome() {
	return (
		<div style={{ textAlign: "center" }}>
			<h1 style={styleH1}>Bienvenidos a la app de bromas :D </h1>
			<Link to="/app">
				<button style={styleButton}>Acceder</button>
			</Link>
		</div>
	);
}
