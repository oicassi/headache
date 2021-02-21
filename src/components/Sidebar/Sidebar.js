import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Sidebar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >
        Login Screen
      </Text>
    </View>
  );
}

export default Sidebar;