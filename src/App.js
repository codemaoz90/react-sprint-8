import Card from "./components/Card/Card.js";
import { useState, useEffect } from "react";
import axios from "axios";
export default () => {
	// https://api.chucknorris.io/jokes/random"

	const [data, setData] = useState([]); // state to fetch data
	const [joke, setJoke] = useState(false); // boolean state to play with data.
	useEffect(() => {
		axios
			.get("https://icanhazdadjoke.com/", {
				headers: { Accept: "application/json" },
			})
			.then((response) => setData(response.data));
	}, [joke]);
	const getJoke = (e) => {
		e.preventDefault();
		setJoke(!joke);
	};
	return (
		<div>
			<Card {...data} getJoke={getJoke} />
		</div>
	);
};
