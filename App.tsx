import { Pressable, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';

export default function App() {
    const translateX = useSharedValue(0);

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            // console.log('touch start');
            context.startX = translateX.value;
        },
        onActive: (e, context) => {
            translateX.value = context.startX + e.translationX;
            // console.log('touch x:', e.translationX);
        },
        onEnd: () => console.log('touch end'),
    });

    return (
        <View style={styles.container}>
            <GestureHandlerRootView>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.animatedCard, cardStyle]}>
                        <Card user={users[0]} />
                    </Animated.View>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedCard: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
