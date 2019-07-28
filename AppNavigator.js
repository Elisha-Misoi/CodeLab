import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './src/components/Home/home';
import Login from './src/components/Login/login';
import Profile from './src/components/Profile/profile';

const AppNavigator = createStackNavigator({
  Login: Login,
  Home: Home,
  Profile: Profile
});

export default createAppContainer(AppNavigator);
