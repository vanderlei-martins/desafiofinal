import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./src/screens/Details";
import Characters from "./src/components/Characters";
import "./src/config/ReactotronConfig";

import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import { CharactersReducer } from "./src/redux/CharactersReducer";
import {CharactersMiddleware} from "./src/redux/CharactersMiddleware"; 

const store = createStore(CharactersReducer,applyMiddleware(CharactersMiddleware));

const Stack = createStackNavigator();
console.tron.log("Hello Reactotroooooon!!!!");

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Rick and Morty"
						component={Characters}
						option={{ title: "Rick and Morty" }}
					/>
					<Stack.Screen
						name="Details"
						component={Details}
						options={{ title: "Rick and Morty" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
