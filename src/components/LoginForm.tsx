import React from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginForm:React.FC = () => {

    return (
        <View
            style = {styles.container}
        >
            <Text>E-mail</Text>
            <TextInput 
                style = {styles.input}
            />
            <Text>Password</Text>
            <TextInput 
                style = {styles.input}
            />
            <Button
                title="Login"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "#fff"
    },
    input : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})

export default LoginForm;