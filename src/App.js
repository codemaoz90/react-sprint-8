import Card from "./components/Card/Card.js";
import Weather from "./components/Weather/Weather";
import Welcome from "./components/Welcome/Welcome";
import { useState, useEffect } from "react";
import axios from "axios";
export default () => {
	// Fetch JOKES API
	const [data, setData] = useState([]); // state to fetch data
	const [joke, setJoke] = useState(false); // boolean state to play with data.
	useEffect(() => {
		const fetchData = async () => {
			axios
				.get("https://icanhazdadjoke.com/", {
					headers: { Accept: "application/json" },
				})
				.then((response) => setData(response.data));
		};
		fetchData();
	}, [joke]); // listening to any change.

	// function to force to fetch a joke again from API.
	const getJoke = (e) => {
		e.preventDefault();
		setJoke(!joke);
	};

	// Fetch weather API

	const [dataWeather, setDataWeather] = useState([]);

	useEffect(() => {
		const getTime = async () => {
			const API_KEY = "33a600a56bb0a3b1cfc710f225d1ae6f";
			const city = "Barcelona";
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			});

			const { name, weather, main } = await response.json();
			setDataWeather({ name, ...weather[0], ...main });
		};

		// getTime();
		console.log(dataWeather);
	}, []);

	return (
		<>
			{/* <Weather {...dataWeather} /> */}
			<Card {...data} getJoke={getJoke} />
		</>
	);
};
