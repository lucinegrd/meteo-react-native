import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/About';
import Search from './components/Search';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: "white",
					tabBarInactiveTintColor: "#CC0000",
					tabBarActiveBackgroundColor : "#CC0000",
					tabBarInactiveBackgroundColor: "white"
				}}
			>
				<Tab.Screen 
					name="Météo" 
					component={Search} 
					options={{
						tabBarIcon: ({color, size}) => <Ionicons name="partly-sunny-outline" size={size} color={color}/>,
						tabBarShowLabel : false,
						
					}}
				/>
				<Tab.Screen
					name="À propos"
					component={About}
					options={{
						tabBarIcon: ({color, size}) => <Ionicons name="information-circle-outline" size={size} color={color} />,
						tabBarShowLabel : false
					}}
					
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}