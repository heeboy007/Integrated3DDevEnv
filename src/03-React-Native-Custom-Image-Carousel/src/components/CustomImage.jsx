import {StyleSheet, Image, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';
import { Platform } from 'react-native';
const CustomImage = ({item, x, index, size, spacer}) => {
  const [aspectRatio, setAspectRatio] = useState(1);
  // Get Image Width and Height to Calculate AspectRatio
  useLayoutEffect(() => {
    if (item.image) {
      if(Platform.OS === 'web') {
        Image.getSize(item.image, (width, height) => {
          setAspectRatio(width / height);
        });
      } else {
        //this only works on native codes.
        const {width, height} = Image.resolveAssetSource(item.image);
        setAspectRatio(width / height);
      }
    }
  }, [item.image]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8],
    );
    return {
      transform: [{scale}],
    };
  });

  if (!item.image) {
    return <View style={{width: spacer}} key={index} />;
  }
  return (
    <View style={{width: size}} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <Image
          source={Platform.OS === 'web' ? item.image.default : item.image}
          style={[styles.image, {aspectRatio: aspectRatio}]}
        />
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
  },
});
