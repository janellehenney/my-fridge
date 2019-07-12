import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './HomeScreen';
import { RecipesScreen } from './RecipesScreen';
import { ModalScreen } from './ModalScreen';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Recipes: {
      screen: RecipesScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
