import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./src/screens/Details";
import Characters from "./src/components/Characters";
import "./src/config/ReactotronConfig";

const Stack = createStackNavigator();
console.tron.log("Hello Reactotroooooon!!!!");

const App = () => {
  return (
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
  );
};

export default App;
