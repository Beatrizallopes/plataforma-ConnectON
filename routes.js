import { createStackNavigator, createAppContainer } from "@react-navigation/stack";
import App from './src/pages/main';
import Sobre from "./src/pages/Sobre";

const Routes = createStackNavigator({
  Home: {
    screen: App,
  },
  Sobre: {
    screen: Sobre,
  },
});

export default createAppContainer(Routes);