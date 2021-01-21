import * as React from 'react';
import { Text, View } from 'react-native';
import FlowerCard from './FlowerCard'

const GardenScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Garden screen</Text>
      <FlowerCard/>
    </View>
  );
}

  export default GardenScreen