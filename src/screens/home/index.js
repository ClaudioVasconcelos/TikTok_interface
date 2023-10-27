import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	StatusBar,
	Platform,
	FlatList,
	Dimensions,
} from "react-native";
import { useRef, useState } from "react";
import { FeedItem } from "../../components/FeedItem";

export function Home() {
	const { height: heightScreen } = Dimensions.get("screen");
	let feedItems = [
		{
			id: "1",
			video: "https://i.imgur.com/Cnz1CPK.mp4",
			name: "@sujeitoprogramador",
			description: "Criando o ShortDev do zero com RN",
		},
		{
			id: "2",
			video: "https://i.imgur.com/E0tK2bY.mp4",
			name: "@henriquesilva",
			description: "Fala turma, estou aprendendo React Native com sujeito programador",
		},
		{
			id: "3",
			video: "https://i.imgur.com/mPFvFyX.mp4",
			name: "@sujeitoprogramador",
			description: "Aprendendo a trabalhar com Drag and Drop no React Native",
		},
	];
	const [showItem, setShowItem] = useState(feedItems[0]);

	const onViewRef = useRef(({ viewableItens }) => {
		if (viewableItens && viewableItens.length > 0) {
			setShowItem(feedItems[viewableItens[0].index]);
		}
	});
	return (
		<View style={styles.container}>
			<View style={styles.labels}>
				<TouchableOpacity>
					<Text style={[styles.labelsText, { color: "#DDD" }]}>Seguindo</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style={[styles.labelsText, { color: "#fff" }]}>Pra você</Text>
					<View style={styles.indicator}></View>
				</TouchableOpacity>
			</View>
			<FlatList
				data={feedItems}
				keyExtractor={(item) => item.id}
				onViewableItemsChanged={onViewRef.current}
				snapToAlignment="center"
				snapToInterval={heightScreen}
				decelerationRate={"fast"}
				scrollEventThrottle={200}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} />}
				viewabilityConfig={{
					waitForIntercation: false,
					viewAreaCoveragePercentThreshold: 100,
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
	},
	labels: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		position: "absolute",
		top: 6,
		left: 0,
		right: 0,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 55,
		zIndex: 99,
	},
	labelsText: {
		fontSize: 16,
		fontWeight: "500",
		marginBottom: 4,
	},
	indicator: {
		backgroundColor: "#fff",
		width: 45,
		height: 2,
		alignSelf: "center",
	},
});
