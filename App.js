import { StyleSheet, View } from 'react-native';
import Card from './src/components/Card';
import users from './assets/data/users';
import CardStack from './src/components/CardStack';

export default function App() {
    return (
        <View style={styles.container}>
            <CardStack
                data={users}
                renderItem={({ item }) => <Card user={item} />}
            />
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
