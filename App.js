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
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          cardStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen name="Rick and Morty" component={Characters} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
