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
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.bio}>{user.bio}</Text>
                </View>
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
        // marginTop: 42,
        width: 350,
        height: 600,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    textContainer: {
        padding: 20,
    },
    name: {
        color: 'white',
        fontSize: 32,
        marginBottom: 10,
    },
    bio: {
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
    },
});
