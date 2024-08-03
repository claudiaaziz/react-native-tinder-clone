import { Pressable, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
    const values = useSharedValue(1);

    const cardStyle = useAnimatedStyle(() => ({
        opacity: values.value,
    }));

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.container}>
                {/* {users.map((user) => ( */}
                <Animated.View style={[styles.animatedCard, cardStyle]}>
                    <Card user={users[0]} />
                </Animated.View>
                <Pressable
                    onPress={() =>
                        (values.value = withSpring(Math.random()))
                    }
                >
                    <Text>update value</Text>
                </Pressable>
                {/* ))} */}
            </View>
        </GestureHandlerRootView>
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
