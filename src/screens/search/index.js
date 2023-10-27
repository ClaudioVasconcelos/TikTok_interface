import { View, StyleSheet, Text } from "react-native";

export function Search () {
    return ( 
        <View style={styles.container}>
            <Text>Buscar</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    }
})