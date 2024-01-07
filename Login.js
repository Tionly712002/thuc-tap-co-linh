import React from "react";
import { View, Text } from "react-native";

const Login = () =>{
    return (
        <View
            style={{
                backgroundColor:  '#3498DB',
                flex : 1,
            }}>

            <View
                style={{
                    backgroundColor :  'White',
                    margin : 10 , 
                    flex : 1,
                    borderRadius:10,
                }}>
                    <Text>Login</Text>
            </View>
        </View>
    );
};

export default Login;





