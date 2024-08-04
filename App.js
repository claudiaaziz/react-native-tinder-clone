import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navbar from './src/components/Navbar';
import MatchesScreen from './src/screens/MatchesScreen';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
// import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
// import outputs from './amplify_outputs.json';

Amplify.configure(outputs);

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
