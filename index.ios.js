/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var CustomActionSheet = require('react-native-custom-action-sheet');
var {
  AppRegistry,
  StyleSheet,
  Text,
  DatePickerIOS,
  TouchableHighlight,
  View,
} = React;

class TTI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TouchableHighlight onPress={() => this.setState({modalVisible: true})}>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </TouchableHighlight>
      <View>
        <CustomActionSheet modalVisible={this.state.modalVisible} onCancel={this.onDateChange}>
          <View>
            <DatePickerIOS mode={"date"} date={new Date()} onDateChange={this.onDateChange.bind(this)} />
          </View>
        </CustomActionSheet>
      </View>
      </View>
    );
  }
  onDateChange(event) {
    var date = event.nativeEvent.text
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TTI', () => TTI);
