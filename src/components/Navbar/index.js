import { Pressable, StyleSheet, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Navbar({ setActiveScreen, activeScreen }) {
    const color = 'lightgray';
    const activeColor = '#fe3c72';

    return (
        <View style={styles.navbar}>
            <Pressable onPress={() => setActiveScreen('home')}>
                <Fontisto
                    name="tinder"
                    size={30}
                    color={activeScreen === 'home' ? activeColor : color}
                />
            </Pressable>
            <MaterialCommunityIcons
                name="star-four-points"
                size={30}
                color={color}
            />
            <Pressable onPress={() => setActiveScreen('messages')}>
                <Ionicons
                    name="chatbubble-sharp"
                    size={30}
                    color={activeScreen === 'messages' ? activeColor : color}
                />
            </Pressable>
            <FontAwesome name="user" size={30} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
});
