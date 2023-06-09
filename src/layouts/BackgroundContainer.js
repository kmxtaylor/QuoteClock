import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { useMode } from 'hooks/useMode';

const BackgroundContainer = ({ children, ...rest }) => {
  const [bgImg, setBgImg] = useState(null);

  const { mode } = useMode();

  useEffect(() => {
    if (mode) {
      let requiredBgImg = null;
      if (mode === 'day') {
        requiredBgImg = require('/../assets/images/bg-image-daytime.jpg');
      }
      else {
        requiredBgImg = require('/../assets/images/bg-image-nighttime.jpg')
      }
      setBgImg(requiredBgImg);
    }
  }, [mode]);

  return (
    <ImageBackground
      source={bgImg}
      resizeMode='cover'
      style={styles.container}
      {...rest}
    >
      <View style={styles.overlay} />
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: { // overlay to slightly darken background image
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // (0.5 = 50% transparency)
  },
});

export default BackgroundContainer;