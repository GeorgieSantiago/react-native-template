import React, { useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import { EasingStatic } from 'react-native';

const Animation = (props: {
    animation: string;
    toValue: number;
    duration: number;
    easingStatic: number;
    useNativeDriver: boolean;
 }) => {
    const [progress, setProgress] = useState<Animated.Value>(new Animated.Value(0))
    const [running, setRunning] = useState<boolean>(false);
    useEffect(() => {
        if( !running ) {
            setRunning(true)
            Animated.timing(progress, props).start()
        }
    }, [])

    return (<LottieView loop imageAssetsFolder={'../lottie'} source={props.animation} progress={progress} />)
}

export default Animation;