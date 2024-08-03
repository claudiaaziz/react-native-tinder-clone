import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';
import Animated, {
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
} from 'react-native-reanimated';
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';

const ROTATION = 60;

export default function App() {
    const { width } = useWindowDimensions();

    const offScreenTranslateX = 2 * width;

    const translateX = useSharedValue(0);
    const rotate = useDerivedValue(
        () =>
            interpolate(
                translateX.value,
                [0, offScreenTranslateX],
                [0, ROTATION]
            ) + 'deg'
    );

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
            {
                rotate: rotate.value,
            },
        ],
    }));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => (context.startX = translateX.value),
        onActive: (e, context) => {
            translateX.value = context.startX + e.translationX;
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
