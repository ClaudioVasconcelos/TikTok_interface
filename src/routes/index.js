import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/home";
import { Search } from "../screens/search";
import { Inbox } from "../screens/inbox";
import { New } from "../screens/new";
import { Profile } from "../screens/profile";
import { ButtonNew } from "../components/ButtonNew";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Routes = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,

				tabBarStyle: {
					backgroundColor: "#000",
					borderTopWidth: 0,
				},
				tabBarActiveTintColor: "#FFF",
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused, size, color }) =>
						focused ? (
							<Ionicons name="home" size={size} color={color} />
						) : (
							<Ionicons name="home-outline" size={size} color={color} />
						),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ focused, size, color }) =>
						focused ? (
							<Ionicons name="search" size={size} color={color} />
						) : (
							<Ionicons name="search-outline" size={size} color={color} />
						),
				}}
			/>
			<Tab.Screen
				name="New"
				component={New}
				options={{
					tabBarIcon: ({ size }) => {
						return <ButtonNew size={size} />;
					},
				}}
			/>
			<Tab.Screen
				name="Inbox"
				component={Inbox}
				options={{
					tabBarIcon: ({ focused, size, color }) =>
						focused ? (
							<Ionicons name="ios-chatbubble-ellipses" size={size} color={color} />
						) : (
							<Ionicons
								name="ios-chatbubble-ellipses-outline"
								size={size}
								color={color}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused, size, color }) =>
						focused ? (
							<Ionicons name="person" size={size} color={color} />
						) : (
							<Ionicons name="person-outline" size={size} color={color} />
						),
				}}
			/>
		</Tab.Navigator>
	);
};
