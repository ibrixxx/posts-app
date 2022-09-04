import { StatusBar } from 'expo-status-bar';
import {Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CreatNewPostScreen from "./screens/CreatNewPostScreen";
import {Provider} from 'react-redux';
import {store} from "./redux/postsStore";
import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <Provider store={store}>
          <StatusBar backgroundColor={'white'} style={'dark'}/>
          <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center'
                }}
            >
              <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: () => <Image source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D0BAQG24Mp8LlJWVQ/company-logo_200_200/0/1658192397316?e=1670457600&v=beta&t=f-LGmb3VAxYst5p5XbZihyGY5NxdvC6HsWZpa_RI-04'}} style={{width: 33, height: 33, borderRadius: 17}}/>}} />
              <Stack.Screen name="CreateNew" component={CreatNewPostScreen} options={{title: 'Create new post'}}/>
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
