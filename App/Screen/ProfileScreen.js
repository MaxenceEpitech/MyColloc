import React from "react";

import { Text, View, Button } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  constructor({ navigation }) {
    super();
    this.state = {
      id: JSON.stringify(navigation.getParam("Id", "undefined"))
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen {this.state.id}</Text>

        <Button
          title="Go to Profile AGAIN"
          onPress={() =>
            navigation.push("Profile", {
              Id: Math.floor(Math.random() * 100)
            })
          }
        />
      </View>
    );
  }
}

export default ProfileScreen;
