import "./Weather.css";

export default function Weather({ name, temp, icon }) {
	const mainTemp = (temp - 273).toFixed(2);
	const icona = `http://openweathermap.org/img/wn/${icon}@2x.png`;
	return (
		<div className="weather">
			<div className="weather-img">
				<img src={icona} alt="" />
			</div>
			<div className="weather-body">
				<h1>{name}</h1>
				<p>{mainTemp}ºC</p>
			</div>
		</div>
	);
}
