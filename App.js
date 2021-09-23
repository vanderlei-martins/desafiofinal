import React from "react";
import { View, ImageBackground,StyleSheet } from "react-native";
import Characters from "./src/components/Characters";

export default function App(){
  console.log('teste');
    return(
        <View style={styles.container}>
            <ImageBackground source={require('./src/img/teste1.jpg')} resizeMode="cover" style={styles.image}>
                <Characters />
            </ImageBackground>
		</View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    //   justifyContent: "center"
    }
  });