import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ImageBackground
                    source={{
                        uri: 'https://media.glamour.com/photos/5695a0a793ef4b09520da005/master/w_1600%2Cc_limit/beauty-blogs-girls-in-the-beauty-department-2011-07-21-0721-victorias-secret-Candice-Swanepoel_gb.jpg',
                    }}
                    style={styles.image}
                >
                    {/* <View style={styles.cardText}> */}
                    <Text style={styles.name}>Candice</Text>
                    <Text style={styles.bio}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi dolor doloremque quas itaque sunt, iusto harum a
                        quidem. Magni maxime nemo, molestias fuga perferendis
                        officiis atque exercitationem magnam illum veritatis.
                    </Text>
                    {/* </View> */}
                </ImageBackground>
            </View>
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
