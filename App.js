import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import {
    GestureHandlerRootView,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import Like from './assets/images/LIKE.png';
import Nope from './assets/images/nope.png';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

export default function App() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(currentIdx + 1);
    const currentUser = users[currentIdx];
    const nextUser = users[nextIdx];

    // swipe animation
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

    useEffect(() => {
        translateX.value = 0;
        setNextIdx(currentIdx + 1);
    }, [currentIdx, translateX]);

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
        onEnd: (e) => {
            if (Math.abs(e.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0);
                return;
            }

            translateX.value = withSpring(
                e.velocityX > 0 ? offScreenTranslateX : -offScreenTranslateX,
                {},
                () => runOnJS(setCurrentIdx)(currentIdx + 1)
            );
        },
    });

    // next card animation
    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(
                    translateX.value,
                    [-offScreenTranslateX, 0, offScreenTranslateX],
                    [1, 0.9, 1]
                ),
            },
        ],
        opacity: interpolate(
            translateX.value,
            [-offScreenTranslateX, 0, offScreenTranslateX],
            [1, 0.7, 1]
        ),
    }));

    // choice animations
    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            translateX.value,
            [0, offScreenTranslateX / 5],
            [0, 1]
        ),
    }));
    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            translateX.value,
            [0, -offScreenTranslateX / 5],
            [0, 1]
        ),
    }));

    return (
        <View style={styles.container}>
            {nextUser && (
                <View style={styles.nextCardContainer}>
                    <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                        <Card user={nextUser} />
                    </Animated.View>
                </View>
            )}

            {currentUser && (
                <GestureHandlerRootView>
                    <PanGestureHandler onGestureEvent={gestureHandler}>
                        <Animated.View style={[styles.animatedCard, cardStyle]}>
                            <Animated.Image
                                source={Like}
                                style={[styles.choice, { left: 10 }, likeStyle]}
                                resizeMode="contain"
                            />
                            <Animated.Image
                                source={Nope}
                                style={[
                                    styles.choice,
                                    { right: 10 },
                                    nopeStyle,
                                ]}
                                resizeMode="contain"
                            />
                            <Card user={currentUser} />
                        </Animated.View>
                    </PanGestureHandler>
                </GestureHandlerRootView>
            )}
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
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choice: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 10,
        zIndex: 1,

        elevation: 1,
    },
});
