import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';

const Tab = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="About"
					component={About}
					options={{title:"About me"}}
				/>
				<Tab.Screen name="Search" component={Search} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	app: {
		margin:15
	}
})