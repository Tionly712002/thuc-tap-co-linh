import React from "react" ;
import { View, Text, TouchableOpacity } from "react-native" ;

const Dangnhap = ()=>{
    return ( 
        <View 
            style={{
                backgroundColor : "#3498DB",
                flex: 1,
            }}>
            <View 
                style={{
                    backgroundColor: 'white',
                    margin : 10 ,
                    flex :1,
                    borderRadius:10,
                }}>
                <View 
                    style={{
                        flex:1,
                        marginVertical:20,
                    }}>

                    {/*header*/}
                    <View 
                        style={{
                            flex:1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text 
                            style={{
                                fontSize : 30,
                                fontWeight : 'bold',
                                color: 'black',
                            }}>
                            Login
                        </Text>
                    </View>

                    {/*body */}
                    <View 
                        style={{
                            flex: 6,
                        }}>
                        <View 
                            style={{}}>
                            <Text>top</Text>
                        </View>
                        <View 
                        style={{
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>Or Sign UP Using</Text>
                        </View>
                    </View>

                    {/*footer */}
                    <View 
                        style={{
                            flex:2,
                            justifyContent:'center',
                            alignItems: 'center',
                        }}>
                        <Text>Or Sign Up Using</Text>

                        {/* button Sign up */}
                        <TouchableOpacity 
                            style={{
                                padding: 20,
                            }}>
                            <Text 
                                style={{
                                    color: 'black',
                                    fontWeight: '500',
                                }}>
                                SING UP
                            </Text>
                        </TouchableOpacity> 
                    </View>
               </View>
            </View>
        </View>
    );
};
export default Dangnhap;