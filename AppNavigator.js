import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/components/Home/home';
import Login from './src/components/Login/login';

const AppNavigator = createStackNavigator({
  Login: Login,
  Home: Home
});

export default createAppContainer(AppNavigator);
