import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../actions/ApiActionCreator';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.apiReducer.data);
    const loading = useSelector((state) => state.apiReducer.loading);
    const numColumns = 2;
    const card = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {
            flower: item
          })} 
          style={styles.card}>
            <Image source={{ uri: `${item.image_url}` }} style={styles.images}/>
          <Text>{item.common_name}</Text>
        </TouchableOpacity>
      )
    }

  useEffect(() => {
    dispatch(apiCall(`https://trefle.io/api/v1/plants?token=`));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
          <View>
            <FlatList
            ListHeaderComponent={
                <>
                    <Text style={{ fontSize: 35, fontWeight: '700', padding: 18}}>Flowers</Text>
                </>
            }
            data={data.data}
            renderItem={({item}) => card({item})}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            ListFooterComponent={
                <>
                <Text style={{ fontSize: 17, fontWeight: '700', textAlign: 'right'}}>BROWSE ALL</Text>
                </>
            }
            />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  images: {
      width: 180,
      height: 300,
      margin: 5,
      borderRadius: 10
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  header: {
      fontSize: 35,
      fontWeight: '700',
  },
  card: {
    width: '50%',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home;