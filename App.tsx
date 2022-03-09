import {NativeBaseProvider, Text} from 'native-base'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import {store} from './src/redux/store'
import HomeScreen from './src/screens/homeScreen';
import RecipeDetail from './src/screens/recipeDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import DrawerNavigator from './src/components/drawerNavigation';

const queryClient = new QueryClient()
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <DrawerNavigator/>
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </NativeBaseProvider>
  );
}


