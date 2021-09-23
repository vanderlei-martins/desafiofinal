import React from "react";
import { View, Text} from "react-native";
import {ListCharacters, Background} from "./styles";

import Card from "./Card";

export default function Characters() {

    const fakeDados = [
		{
			id: 1,
			name: "Rick Sanchez",
			status: "Alive",
			species: "Human",
			type: "",
			gender: "Male",
			origin: {
				name: "Earth (C-137)",
				url: "https://rickandmortyapi.com/api/location/1",
			},
			location: {
				name: "Earth (Replacement Dimension)",
				url: "https://rickandmortyapi.com/api/location/20",
			},
			image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

			url: "https://rickandmortyapi.com/api/character/1",
			created: "2017-11-04T18:48:46.250Z",
		},
		{
			id: 2,
			name: "Morty Smith",
			status: "Alive",
			species: "Human",
			type: "",
			gender: "Male",
			origin: {
				name: "Earth (C-137)",
				url: "https://rickandmortyapi.com/api/location/1",
			},
			location: {
				name: "Earth (Replacement Dimension)",
				url: "https://rickandmortyapi.com/api/location/20",
			},
			image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
			url: "https://rickandmortyapi.com/api/character/2",
			created: "2017-11-04T18:50:21.651Z",
		},
	];


	return (
		<Background>
			<ListCharacters
				showsVerticalScrollIndicator={false}
				data={fakeDados}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <Card data={item} />;
				}}
			/>
		</Background>
	);
}


