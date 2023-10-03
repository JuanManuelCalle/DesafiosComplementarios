import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import HeaderComponente from './src/components/Header/HeaderComponente';
import Categories from './src/components/Categories/Categories';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';
import { useFonts } from 'expo-font';
import ProductDetail from './src/screens/ProductDetail';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/Navigation/RootNavigation';
import TabNav from './src/Navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Login from './src/screens/Login';
import MainNav from './src/Navigation/MainNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    RalewayBlack: require("./assets/Fonts/Raleway-Black.ttf"),
    RaleWayBold: require("./assets/Fonts/Raleway-Bold.ttf"),
    RaleWaylight: require("./assets/Fonts/Raleway-Light.ttf"),
  })

  if(!fontsLoaded) return;

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}

//El useWindowsDimension captura tanto horizontal como vertical
