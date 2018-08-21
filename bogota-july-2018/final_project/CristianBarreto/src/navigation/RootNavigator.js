/* 
  * Navigator
  * @flow
*/

// Node Modules
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation';

// Screens:
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import NewUserScreen from '../screens/NewUser/NewUserScreen';
import CreditHistoryScreen from '../screens/CreditHistory/CreditHistoryScreen';
import PayHistoryScreen from '../screens/PayHistory/PayHistoryScreen';
import CreditRequestScreen from '../screens/CreditRequest/CreditRequestScreen';
import ScoreScreen from '../screens/Score/ScoreScreen';
import PayScreen from '../screens/Pay/PayScreen';
import NetworkScreen from '../screens/Network/NetworkScreen';

// Login and forgot password screen
import LoginScreen from '../screens/LoginScreen';

// Navigator menu
import  BCNavigationMenu from '../components/BCNavigationMenu';

// Navigators
const Auth = StackNavigator({ Login: LoginScreen });
const App = DrawerNavigator(
  //Screens
  {
    Home: HomeScreen,
    NewUser: NewUserScreen,
    CreditHistory: CreditHistoryScreen,
    PayHistory: PayHistoryScreen,
    ScoreScreen: ScoreScreen,
    Pay: PayScreen,
    CreditRequest: CreditRequestScreen,
    ProfileScreen: ProfileScreen,
    Network: NetworkScreen
  },
  // Navigator Menu
  { contentComponent: BCNavigationMenu }
);

const RootNavigator = SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: Auth,
    App: App,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default RootNavigator;
