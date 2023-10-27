import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Dimensions,
	Platform,
	TouchableOpacity,
} from "react-native";
import { useRef, useState, useEffect } from "react";

import { Video } from "expo-av";

import { Ionicons } from "@expo/vector-icons";

const { height: heightScreen } = Dimensions.get("screen");

export const FeedItem = ({ data, currentVisibleItem }) => {
	const [status, setStatus] = useState({});

	const video = useRef(null);

	useEffect(() => {
		if (currentVisibleItem?.id === data?.id) {
			video.current?.playAsync();
		} else {
			video.current?.pauseAsync();
		}
	}, [currentVisibleItem]);

	const handlePlayer = () => {
		status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
	};

	return (
		<Pressable onPress={handlePlayer}>
			<View style={styles.info}>
				<Text style={styles.name}>{data?.name}</Text>
				<Text numberOfLines={2} style={styles.description}>
					{data?.description}
				</Text>
			</View>

			<View style={styles.actions}>
				<TouchableOpacity style={styles.button}>
					<Ionicons name="heart" size={35} color={"#fff"} />
					<Text style={styles.actionsText}>30.3k</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Ionicons name="chatbubble-ellipses" size={35} color={"#fff"} />
					<Text style={styles.actionsText}>23.9k</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Ionicons name="bookmark" size={35} color={"#fff"} />
				</TouchableOpacity>
			</View>

			<Video
				ref={video}
				resizeMode="cover"
				style={styles.videoStyle}
				shouldPlay={false}
				isLooping
				isMuted={false}
				source={{ uri: data?.video }}
				onPlaybackStatusUpdate={(status) => setStatus(() => status)}
			/>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	videoStyle: {
		width: "100%",
		height: heightScreen,
		left: 8,
		padding: 8,
	},
	info: {
		position: "absolute",
		zIndex: 99,
		bottom: 100,
	},
	name: {
		color: "#fff",
		textShadowColor: "rgba(0,0,0, 0.60)",
		textShadowOffset: { width: -1, height: 1.5 },
		textShadowRadius: 8,
		fontWeight: "bold",
		marginBottom: 4,
	},
	description: {
		color: "#fff",
		marginRight: 14,
		textShadowColor: "rgba(0,0,0, 0.40)",
	},
	actions: {
		position: "absolute",
		zIndex: 99,
		right: 8,
		bottom: Platform.OS === "android" ? 120 : 170,
		gap: 8,
	},

	actionsText: {
		textAlign: "center",
		color: "#fff",
		textShadowColor: "rgba(0,0,0, 0.60)",
		textShadowOffset: { width: -1, height: 1.5 },
		textShadowRadius: 8,
	},
});
