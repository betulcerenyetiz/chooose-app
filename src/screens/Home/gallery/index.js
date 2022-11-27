import React, {useState} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const galleryPage = () => {
  const [allImages, setAllImages] = useState([]);
  const key = '31642465-7dc0ee126acec92c2dae15f96';
  let images = () => {
    fetch(
      `https://pixabay.com/api/?key=${key}&per_page=100`,
    )
      .then(data => {
        return data.json();
      })
      .then(pics => {
        setAllImages(pics.hits);
      })
      .catch(err => {
        console.log(err);
      });
  };
  images();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.header}>gallery</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={allImages}
          numColumns={2}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.previewURL}} 
              key={index}
              style={{
                width: width / 2,
                height: 300,
                borderWidth: 2,
                borderColor: 'white',
                resizeMode: 'contain',
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export {galleryPage};
