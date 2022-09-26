import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
// import Text from '../Text'

const ButtonFilled = require('../../../assets/components/select-button-filled.svg')
const ButtonEmpty = require('../../../assets/components/select-button-empty.svg')



export default function Select({ options, selected, onChange, style }) {

    const handlePress = (option) => {
        let temp;
        if (selected?.includes(option.value)) {
            temp = selected.filter(s => s !== option.value)
        } else {
            temp = [...(selected || []), option.value]
        }
        onChange(temp)
    }

    return (
        <View style={{ height: 'fit-content' }}>
            {/* {
                options.map(option => (
                    <TouchableOpacity key={option.value} onPress={() => handlePress(option)}>
                        <View style={[styles.select, style]}>
                            <Image source={selected?.includes(option.value) ? ButtonFilled : ButtonEmpty} style={styles.button} />
                            <Text style={{ fontSize: 18 }}>{option.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        width: '100%',
        padding: 18,
        backgroundColor: 'white',
        borderRadius: 18,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    button: {
        width: 25,
        height: 25,
        marginRight: 20
    }
})