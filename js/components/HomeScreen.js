import React from 'react';
import { Button, View, Text } from 'react-native';

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'HomeScreen',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#fff"
        />
      ),
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Recipes"
          onPress={() => {
            /* 1. Navigate to the Recipes route with params */
            this.props.navigation.navigate('Recipes', {
              itemId: 86,
              otherParam: 'First Recipes',
            });
          }}
        />
      </View>
    );
  }
}
