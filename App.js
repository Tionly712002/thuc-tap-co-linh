import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> 
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
//

// import React from 'react';


// import Dangnhap from './Dangnhap';
// import Login from './Login';
// import LoginScreen from './LoginScreen';
// import HomeScreen from './HomeScreen';
// import RegisterScreen from './RegisterScreen';


// export default function App() {
//   return (
//     <LoginScreen/>


//   );
// }


// "import React from "react" ;
// import { View, Text, TouchableOpacity } from "react-native" ;

// const App = ()=>{
//     return ( 
//         <View 
//             style={{
//                 backgroundColor : "#3498DB",
//                 flex: 1,
//             }}>
//             <View 
//                 style={{
//                     backgroundColor: 'white',
//                     margin : 10 ,
//                     flex :1,
//                     borderRadius:10,
//                 }}>
//                 <View 
//                     style={{
//                         flex:1,
//                         marginVertical:20,
//                     }}>

//                     {/*header*/}
//                     <View 
//                         style={{
//                             flex:1,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}>
//                         <Text 
//                             style={{
//                                 fontSize : 30,
//                                 fontWeight : 'bold',
//                                 color: 'black',
//                             }}>
//                             Login
//                         </Text>
//                     </View>

//                     {/*body */}
//                     <View 
//                         style={{
//                             flex: 6,
//                         }}>
//                         <View 
//                             style={{}}>
//                             <Text>top</Text>
//                         </View>
//                         <View 
//                         style={{
//                             marginVertical: 20,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}>
//                             <Text>Or Sign UP Using</Text>
//                         </View>
//                     </View>

//                     {/*footer */}
//                     <View 
//                         style={{
//                             flex:2,
//                             justifyContent:'center',
//                             alignItems: 'center',
//                         }}>
//                         <Text>Or Sign Up Using</Text>

//                         {/* button Sign up */}
//                         <TouchableOpacity 
//                             style={{
//                                 padding: 20,
//                             }}>
//                             <Text 
//                                 style={{
//                                     color: 'black',
//                                     fontWeight: '500',
//                                 }}>
//                                 SING UP
//                             </Text>
//                         </TouchableOpacity> 
//                     </View>
//                </View>
//             </View>
//         </View>
//     );
// };
// export default App;










// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// // App.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import { addUser, getUserByUsername, updateUserPassword, deleteUser } from './database';

// export default function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     addUser(username, password, (result) => {
//       if (result.rowsAffected > 0) {
//         Alert.alert('Success', 'User registered successfully!');
//       } else {
//         Alert.alert('Error', 'Failed to register user.');
//       }
//     });
//   };

//   const handleLogin = () => {
//     getUserByUsername(username, (result) => {
//       if (result.rows.length > 0) {
//         const storedPassword = result.rows.item(0).password;
//         if (storedPassword === password) {
//           Alert.alert('Success', 'Login successful!');
//         } else {
//           Alert.alert('Error', 'Incorrect password.');
//         }
//       } else {
//         Alert.alert('Error', 'User not found.');
//       }
//     });
//   };

//   const handleUpdatePassword = () => {
//     updateUserPassword(username, 'newpassword', (result) => {
//       if (result.rowsAffected > 0) {
//         Alert.alert('Success', 'Password updated successfully!');
//       } else {
//         Alert.alert('Error', 'Failed to update password.');
//       }
//     });
//   };

//   const handleDeleteUser = () => {
//     deleteUser(username, (result) => {
//       if (result.rowsAffected > 0) {
//         Alert.alert('Success', 'User deleted successfully!');
//       } else {
//         Alert.alert('Error', 'Failed to delete user.');
//       }
//     });
//   };

//   return (
//     <View>
//       <TextInput placeholder="Username" onChangeText={setUsername} />
//       <TextInput placeholder="Password" onChangeText={setPassword} secureTextEntry />
//       <Button title="Sign Up" onPress={handleSignUp} />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Update Password" onPress={handleUpdatePassword} />
//       <Button title="Delete User" onPress={handleDeleteUser} />
//     </View>
//   );
// }


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


