import { StyleSheet, View } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Navbar() {
    const color = 'lightgray';

    return (
        <View style={styles.navbar}>
            <Fontisto name="tinder" size={30} color={color} />
            <MaterialCommunityIcons
                name="star-four-points"
                size={30}
                color={color}
            />
            <Ionicons name="ios-chatbubbles" size={30} color={color} />
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
