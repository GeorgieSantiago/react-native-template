import Animation from 'animations/Animation';

export const Loading = () => (
    <Animation 
        animation={'../lottie/loading.json'}
        duration={500}
        toValue={1}
        easingStatic={300}
        useNativeDriver={true}
    />
)