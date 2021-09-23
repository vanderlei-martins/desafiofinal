import React, { useEffect, useState } from "react";
import { ListCharacters, Background } from "./styles";

import Card from "./Card";
import { getCharacters } from "../../services/api/api";

export default function Characters() {
	const [dados, setDados] = useState([]);
	const [nextPage, setNextPage] = useState("");

	useEffect(() => {
		async function loadCharacters() {
			let characters = await getCharacters();
			setDados(characters.results);
			setNextPage(characters.info.next);
		}

		loadCharacters();
	}, []);

	async function getMoreCharacters() {
		let characters = await getCharacters(nextPage);
		let newDados = [...dados, ...characters.results];
		setDados(newDados);
		setNextPage(characters.info.next);
	}

	return (
		<Background>
			<ListCharacters
				showsVerticalScrollIndicator={false}
				data={dados}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <Card data={item} />;
				}}
				onEndReached={getMoreCharacters}
				onEndReachedThreshold={0.1}
			/>
		</Background>
	);
}
