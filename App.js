
import React from 'react';
import { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

class HomeScreen extends React.Component {/* Creates Home Screen Buttons */
  render() {
    return (
     <View style={styles.container}>
        <Text style={{fontSize: 60,textAlign: "center",fontStyle: 'normal',color: 'lightyellow',marginTop: 60, marginBottom: 50}}>

        Welcome          to the         Ridge App!

       </Text>
      <TouchableOpacity style={{backgroundColor: 'powderblue', padding: 10}} /* Creates Play Button */
      onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Play' })
              ],
            }))
          }}>
      <Text style={{ fontSize: 40,color: '#841584'}}>Play</Text>                  
      </TouchableOpacity> 

       <TouchableOpacity style={{backgroundColor: 'powderblue', marginTop: 50, padding: 10}}> 
      <Text style={{ fontSize: 40,color: '#841584'}}>How to Play</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor: 'powderblue', marginTop: 50, padding: 10}}> 
      <Text style={{ fontSize: 40,color: '#841584'}}>Settings</Text>
    </TouchableOpacity>
      </View>
    );
  }  
}
class PlayScreen extends React.Component { /* Creates Play Screen and Go to Home Screen Button */
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:60,textAlign: "center",fontStyle: 'normal',color: 'lightyellow',marginTop: 5}}>Play Screen</Text>
        <TouchableOpacity style={{backgroundColor: 'deepskyblue', padding: 10, marginTop: 85,}}
        onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}>
          <Text style={{ fontSize: 20,color: '#841584'}}>Go back to Home Screen</Text>             
        </TouchableOpacity> 
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({ /*establishes navigation routes*/
  Home: {
    screen: HomeScreen,
  },
  Play: {
    screen: PlayScreen,
  },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: "center",
    justifyContent: 'flex-start',
  },
});

export default createAppContainer(AppNavigator); /*Shows screen*/

