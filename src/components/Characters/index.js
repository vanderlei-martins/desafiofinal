import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeArea, Container, ListCharacters, Background } from "./styles";
import { useSelector, useDispatch } from "react-redux";

import {
	getListAllCharacters,
	getAllCharactersSelector,
} from "../../redux/CharactersAction";

import Card from "./Card";

export default function Characters() {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const listCharacters = useSelector(getAllCharactersSelector);

	useEffect(() => {
		dispatch(getListAllCharacters());
	}, []);

	async function getMoreCharacters() {
		let nextPage = page + 1;
		await setPage(nextPage);
		await dispatch(getListAllCharacters(nextPage));
	}

	return (
		<ImageBackground
			source={require("../../img/teste1.jpg")}
			resizeMode="cover"
			style={styles.image}
		>
			<SafeArea>
				<Container>
					<Background>
						<ListCharacters
							showsVerticalScrollIndicator={false}
							data={listCharacters}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => {
								return <Card data={item} />;
							}}
							onEndReached={getMoreCharacters}
							onEndReachedThreshold={0.1}
						/>
					</Background>
				</Container>
			</SafeArea>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
	},
});
