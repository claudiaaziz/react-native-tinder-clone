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
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        // backgroundColor: 'white',

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
        marginTop: 50,
        width: 350,
        height: 700,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignSelf: 'center', // Center the image horizontally
    },
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
