import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";

let tron = Reactotron;
if (__DEV__) {
  tron = Reactotron.configure({
    name: "rickandmorty",
    host: NativeModules.SourceCode.scriptURL.split("://")[1].split(":")[0],
  })
  .useReactNative()
    .connect();
    console.tron = tron;

    tron.clear();
}

export default tron;
