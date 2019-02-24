
import React from 'react';
import { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {/* Creates Home Screen and Go to Details Button */
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {/* Creates Details Screen and Go to Home Screen Button */
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back to Home Screen"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({/*establishes navigation routes*/
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);/*Shows screen*/

/*
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import {
  AppRegistry,
  TouchableOpacity,
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 60,textAlign: "center",fontStyle: 'normal',color: 'lightyellow',marginTop: 130}}>

        Welcome          to the         Ridge App!

       </Text>
       <TouchableOpacity>
      <Text style={{ fontSize: 40,color: '#841584', marginTop: 85}}>Play</Text>
    </TouchableOpacity>
    <TouchableWithoutFeedback>
      <Text style={{ fontSize: 40,color: '#841584', marginTop: 50 }}>How to Play</Text>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback>
      <Text style={{ fontSize: 40,color: '#841584', marginTop: 50 }}>Settings</Text>
    </TouchableWithoutFeedback>
   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: "center",
    justifyContent: 'flex-start',
  },
});
*/