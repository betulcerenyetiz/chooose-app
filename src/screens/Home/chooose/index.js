import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const chooosePage = () => {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [allImages, setAllImages] = useState([]);
  const key = '31642465-7dc0ee126acec92c2dae15f96';

  let newImage = () => {
    fetch(`https://pixabay.com/api/?key=${key}&per_page=100`)
      .then(data => {
        return data.json();
      })
      .then(pics => {
        let randomImage = parseInt(Math.random() * pics.totalHits);
        setImage1(pics.hits[randomImage].previewURL);
        setImage2(pics.hits[randomImage + 10].previewURL);
        setImage3(pics.hits[randomImage + 30].previewURL);
        setAllImages(pics.hits);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => newImage(), []);

  const updateImage = () => {
    let randomImage = parseInt(Math.random() * (allImages.length - 1));
    let randomImage2 = parseInt(Math.random() * (allImages.length - 1));
    let randomImage3 = parseInt(Math.random() * (allImages.length - 1));

    setImage1(allImages[randomImage].previewURL);
    setImage2(allImages[randomImage2].previewURL);
    setImage3(allImages[randomImage3].previewURL);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/chooose.png')}
        />
        <Text style={styles.upperText}>görsellerinden birini seç!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blue}>
          <Image source={{uri: image1}} style={styles.image} />
        </View>
        <View style={styles.pink}>
          <Image source={{uri: image2}} style={styles.image} />
        </View>
        <View style={styles.green}>
          <Image source={{uri: image3}} style={styles.image} />
        </View>
        <TouchableOpacity
          style={styles.refresh}
          onPress={() => allImages.length > 0 && updateImage()}>
          <Text style={styles.refreshText}>YENILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {chooosePage};
