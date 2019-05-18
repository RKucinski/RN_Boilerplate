import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '@scenes/HomeScreen'
import ProfileScreen from '@scenes/ProfileScreen'

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

const Navigation = createAppContainer(MainNavigator);
export default Navigation  