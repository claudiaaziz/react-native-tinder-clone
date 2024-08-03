import { StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import users from '../../assets/data/users';
import CardStack from '../components/CardStack';

export default function HomeScreen() {
    const onLeftSwipe = (currentProfile) => {
        console.warn('left swipe:', currentProfile.name);
    };

    const onRightSwipe = (currentProfile) => {
        console.warn('right swipe:', currentProfile.name);
    };

    return (
        <SafeAreaView style={styles.container}>
            <CardStack
                data={users}
                renderItem={({ item }) => <Card user={item} />}
                onLeftSwipe={onLeftSwipe}
                onRightSwipe={onRightSwipe}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
