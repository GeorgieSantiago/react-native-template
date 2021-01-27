import React, {useEffect, useState, useRef} from 'react';
import {Animated} from 'react-native';
import LottieView from 'lottie-react-native';

const Animation = (props: {
  animation: string;
  toValue: number;
  duration: number;
  easingStatic: number;
  useNativeDriver: boolean;
}) => {
  const progress = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [running, setRunning] = useState<boolean>(false);
  useEffect(() => {
    if (!running) {
      setRunning(true);
      Animated.timing(progress, {
        toValue: 1,
        duration: props.duration,
        useNativeDriver: props.useNativeDriver,
      }).start();
    }
  }, [running, progress, props.duration, props.useNativeDriver]);

  return (
    <LottieView
      loop
      imageAssetsFolder={'../lottie'}
      source={props.animation}
      progress={progress}
    />
  );
};

export default Animation;
