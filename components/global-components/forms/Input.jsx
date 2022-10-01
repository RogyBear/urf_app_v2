import React, { useState } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'


export default function Input({ placeholder, value, multiline, handleBlur, style }) {

    const [input, setInput] = useState<string>(value ?? "")

    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            placeholderTextColor="#9CA9B4"
            value={input}
            onChangeText={setInput}
            onBlur={() => handleBlur(input)}
            multiline={multiline}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'Nunito',
        border: '1px solid #DBECFE',
        gap: 10
    }
})