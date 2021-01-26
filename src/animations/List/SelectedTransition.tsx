import React, { useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';

interface SelectedTransitionProp {
    running: boolean;
    children: React.ReactChild;
    startHidden?: boolean;
}

export const SelectedTransition = ({
    running,
    children,
    startHidden = false,
}: SelectedTransitionProp) => {
    const fadeAnim = useRef(new Animated.Value(startHidden ? 0 : 1)).current  // Initial value for opacity: 0
    const [isHidden, setIsHidden] = useState(!startHidden)
    const animate = () => {
        //Initial Animation
        Animated.timing(fadeAnim, {
            toValue: isHidden ? 1 : 0,
            duration: 1500,
            useNativeDriver: false
        })
        setIsHidden(!isHidden);
    }

    useEffect(() => {
        animate()
    }, [running])

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            {children}
        </Animated.View>
    )
}