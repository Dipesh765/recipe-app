import {NativeBaseProvider, Text} from 'native-base'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import {store} from './src/redux/store'
import HomeScreen from './src/screens/homeScreen';
import RecipeDetail from './src/screens/recipeDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const queryClient = new QueryClient()


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                  headerShown: false
                }
                }
              />
              <Stack.Screen
                name='Recipe'
                component={RecipeDetail}
                
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </NativeBaseProvider>
  );
}


