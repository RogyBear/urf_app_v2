import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactElement } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../../Text'



export default function Button({ text, handleForward, handleBack, primary = false, palette }) {
    const primaryColorArr = Array.isArray(palette.primary)
        ? palette.primary
        : [palette.primary, palette.primary]

    return (
        primary
            ? (
                <LinearGradient
                    colors={primaryColorArr}
                    style={[styles.primaryButton]}
                >
                    {/* disabled={!handleForward} */}
                    <TouchableOpacity disabled={!handleForward} onPress={handleForward} style={{ width: '100%', alignItems: 'center' }}>
                         <Text style={{ color: 'white', fontSize: 16 }}>{text}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            )
            : (
                <TouchableOpacity
                    onPress={handleBack}
                    disabled={!handleBack}
                    style={[styles.secondaryButton, { borderColor: primaryColorArr[0], background: palette.secondary }]}
                >
                    <Text style={{ color: primaryColorArr[0], fontSize: 16 }}>{text}</Text>
                </TouchableOpacity>
            )
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        boxShadow: '0px 6px 15px rgba(52, 122, 246, 0.25)',
        borderRadius: 14,
        margin: 5,
        zIndex: -10,
        elevation: -10
    },
    secondaryButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 14,
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 5,
        zIndex: -10,
        elevation: -10
    }
})