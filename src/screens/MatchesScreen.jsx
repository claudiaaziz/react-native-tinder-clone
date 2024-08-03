import { Text, StyleSheet, SafeAreaView, Image, View } from 'react-native';
import users from '../../assets/data/users';

export default function MatchesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>New Matches</Text>

            <View style={styles.usersContainer}>
                {users.map((user) => (
                    <View style={styles.user} key={user.id}>
                        <Image
                            source={{ uri: user.image }}
                            style={styles.image}
                        />
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // temp
    container: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#F63A6E',
        padding: 20,
    },
    usersContainer: {
        flexDirection: 'row',
        marginHorizontal: 15
    },
    user: {
        width: 100,
        height: 100,
        margin: 5,
        borderWidth: 2,
        borderColor: '#F63A6E',
        borderRadius: 50,
        padding: 2
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
});
