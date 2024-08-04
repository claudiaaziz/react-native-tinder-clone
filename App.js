import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navbar from './src/components/Navbar';
import MatchesScreen from './src/screens/MatchesScreen';
import { useState } from 'react';

export default function App() {
    // temp
    const [activeScreen, setActiveScreen] = useState('home');

    return (
        <SafeAreaView style={styles.root}>
            <Navbar
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
            />

            {activeScreen === 'home' ? <HomeScreen /> : <MatchesScreen />}
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
