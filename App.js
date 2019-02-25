
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
        <Text style={{fontSize: 60,textAlign: "center",fontStyle: 'normal',color: 'lightyellow',marginTop: 100, marginBottom: 50}}>

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
      <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
        <View style={{width: 300, height: 300, backgroundColor: 'coral', marginTop: 100, alignItems: 'center'}} />
        <TouchableOpacity style={{backgroundColor: 'deepskyblue', paddingLeft: 60, paddingRight: 60, marginTop: -160,}}
        onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Listener' })
              ],
            }))
          }}>
          <Text style={{ fontSize: 20,color: '#841584'}}>Start</Text>
        </TouchableOpacity> 
      </View>
    );
  }  
}
class ListenerScreen extends React.Component { /* Creates Play Screen and Go to Home Screen Button */
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
        <View style={{width: 300, height: 300, backgroundColor: 'coral', marginTop: 100, alignItems: 'center'}} />
        <TouchableOpacity style={{backgroundColor: 'deepskyblue', paddingLeft: 60, paddingRight: 60, marginTop: 100,}}
        onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Comparison' })
              ],
            }))
          }}>
          <Text style={{ fontSize: 20,color: '#841584'}}>Stop</Text>
        </TouchableOpacity> 
      </View>
    );
  }  
}
class ComparisonScreen extends React.Component { /* Creates Play Screen and Go to Home Screen Button */
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
      <Text style={{ fontSize: 20,color: 'coral',marginTop: 50}}>What you drew</Text>
        <View style={{width: 300, height: 300, backgroundColor: 'coral', marginTop: 10, alignItems: 'center'}} />
        <Text style={{ fontSize: 20,color: 'coral',marginTop: 10}}>Actual Image</Text>
         <View style={{width: 300, height: 300, backgroundColor: 'coral', marginTop: 10, alignItems: 'center'}} />
        <TouchableOpacity style={{backgroundColor: 'deepskyblue', paddingLeft: 60, paddingRight: 60, marginTop: 10,}}
        onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}>
          <Text style={{ fontSize: 20,color: '#841584'}}>Back to Home</Text>
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
  Listener: {
    screen: ListenerScreen,
  },
  Comparison: {
    screen: ComparisonScreen,
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

