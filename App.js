import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navbar from './src/components/Navbar';

export default function App() {
    return (
        <SafeAreaView style={styles.root}>
            <Navbar />

            <HomeScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        // backgroundColor: 'blue',
    },
});
