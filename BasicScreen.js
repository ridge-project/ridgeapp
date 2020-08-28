import React from 'react';
import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { TouchableOpacity } from 'react-native';

class PlayScreen extends React.Component { /* Creates Play Screen and Go to Home Screen Button */
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'powderblue', alignItems: 'center' }}>
                <View style={{ width: 300, height: 300, backgroundColor: 'coral', marginTop: 100, alignItems: 'center' }} />
                <TouchableOpacity style={{ backgroundColor: 'deepskyblue', paddingLeft: 60, paddingRight: 60, marginTop: -160, }}
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Listener' })
                            ],
                        }))
                    }}>
                    <Text style={{ fontSize: 20, color: '#841584' }}>Start</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class ListenerScreen extends React.Component { /* Creates Play Screen and Go to Home Screen Button */
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'powderblue', alignItems: 'center' }}>
                <View style={{ width: 300, height: 300, backgroundColor: 'coral', marginTop: 100, alignItems: 'center' }} />
                <TouchableOpacity style={{ backgroundColor: 'deepskyblue', paddingLeft: 60, paddingRight: 60, marginTop: 100, }}
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Comparison' })
                            ],
                        }))
                    }}>
                    <Text style={{ fontSize: 20, color: '#841584' }}>Stop</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default { PlayScreen, ListenerScreen }