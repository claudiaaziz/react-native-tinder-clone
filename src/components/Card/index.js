import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Card({ user }) {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={{
                    uri: user.image,
                }}
                style={styles.image}
            >
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '95%',
        height: '70%',
        borderRadius: 10,

        // shadow
        // ios
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,

        // android
        elevation: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        gap: 3,
    },
    // cardText: {},
    name: {
        color: 'white',
        fontSize: 32,
        padding: 20,
    },
    bio: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        padding: 20,
    },
});
