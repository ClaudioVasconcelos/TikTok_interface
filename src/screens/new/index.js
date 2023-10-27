import { View, StyleSheet, Text } from "react-native";

export function New () {
    return ( 
        <View style={styles.container}>
            <Text>Cadastrar Novo video</Text>
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