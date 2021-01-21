import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function detailsScreen({ route, navigation }) {
    const { flower } = route.params

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ padding: 10, alignItems: 'flex-start', width: '100%'}}>
          <MaterialCommunityIcons name="arrow-left" color='black' size={30} onPress={() => navigation.goBack()} />
        </View>

        <View>
          <Image source={{ uri: `${ flower.image_url }` }} style={{ width: 315, height: 293, borderRadius: 5}}/>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingBottom: 10}}>
            <Text style={{fontSize: 20, paddingBottom: 10}}>{flower.common_name}</Text>
            <MaterialCommunityIcons name="heart-outline" color='red' size={26} />
          </View>
        </View>

        <View  style={styles.Info}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', padding: 20, paddingBottom: 50}}>
              <Text style={styles.color}>details</Text>
              <Text style={styles.color}>care</Text>
              <Text style={styles.color}>tools</Text>
            </View>
            <View>
              <Text style={{color: 'white', width: 290, fontSize: 20, fontWeight: '200', paddingBottom: 5}}>Care Guide</Text>
            </View>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 50
    },
    Info: {
      flex: 1,
      backgroundColor: '#373737',
      alignItems: 'center',
    },
    color: {
      color: 'white',
      fontSize: 20
    }
})
  export default detailsScreen