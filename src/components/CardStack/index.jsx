import { StyleSheet, useWindowDimensions, View } from 'react-native';
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
import Like from '../../../assets/images/LIKE.png';
import Nope from '../../../assets/images/nope.png';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

export default function CardStack({
    data,
    renderItem,
    onRightSwipe,
    onLeftSwipe,
}) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(currentIdx + 1);
    const currentProfile = data[currentIdx];
    const nextProfile = data[nextIdx];

    // animations
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
        setNextIdx(currentIdx + 1);
    }, [currentIdx]);

    useEffect(() => {
        translateX.value = 0;
    }, [nextIdx]);

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

            const onSwipe = e.velocityX > 0 ? onRightSwipe : onLeftSwipe;
            onSwipe && runOnJS(onSwipe)(currentProfile);
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
            {nextProfile && (
                <View style={styles.nextCardContainer}>
                    <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                        {renderItem({ item: nextProfile })}
                    </Animated.View>
                </View>
            )}

            {currentProfile && (
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
                            {renderItem({ item: currentProfile })}
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    animatedCard: {
        // width: '90%',
        // height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange'
    },
    choice: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 35,
        zIndex: 1,

        elevation: 1,
    },
});
