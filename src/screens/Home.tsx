import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {}

const Home = (props: Props) => {
    return (
        <View>
            <View style={styles.main}>
                <Icon name="navicon" size={30} color="#fff" />
            </View>
            <View>
                <Text>
                    Good Afternoon
                </Text>
                <Text>
                    Milton Azibapu
                </Text>
            </View>
            <View>
                <TextInput />
                <Button title="Track" />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    main: {
        paddingHorizontal: 20,
        marginTop: 20
    }
});