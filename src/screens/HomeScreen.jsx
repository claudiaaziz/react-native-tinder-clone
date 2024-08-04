import { SafeAreaView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import users from '../../assets/data/users';
import CardStack from '../components/CardStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
    const onLeftSwipe = (currentProfile) => {
        console.log('left swipe:', currentProfile.name);
    };

    const onRightSwipe = (currentProfile) => {
        console.log('right swipe:', currentProfile.name);
    };

    return (
        <SafeAreaView style={styles.container}>
            <CardStack
                data={users}
                renderItem={({ item }) => <Card user={item} />}
                onLeftSwipe={onLeftSwipe}
                onRightSwipe={onRightSwipe}
            />

            <View style={styles.optionsBar}>
                <FontAwesome name="undo" size={30} color="#FBD88B" />
                <Entypo name="cross" size={30} color="#F76C6B" />
                <FontAwesome name="star" size={30} color="#3AB4CC" />
                <FontAwesome name="heart" size={30} color="#4FCC94" />
                <Ionicons name="flash" size={30} color="#A65CD2" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    optionsBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});
