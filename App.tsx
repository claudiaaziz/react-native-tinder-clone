import { StyleSheet, View } from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';

export default function App() {
    return (
        <View style={styles.container}>
            {users.map((user) => (
                <Card user={user} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
