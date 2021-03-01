import "./Card.css";

export default function Card({ id, joke, getJoke }) {
	return (
		<div className="card">
			<h1 className="card-title">¿Preparado para reir?</h1>
			<p className="card-text">{joke}</p>
			<button onClick={getJoke} className="card-button">
				Siguiente
			</button>
		</div>
	);
}
