import { Ionicons } from '@expo/vector-icons'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { Animated, Easing, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import ClickAwayListener from '../ClickAwayListener'
import ScrollBar from '../Scrollbar'
// import Text from '../Text'





export default function Dropdown({ menuItems, onPress, placeholder, style }) {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState()

    return (
        <View style={[{ width: '100%' }, style]}>
            {/* <ClickAwayListener active={visible} onPress={() => setVisible(false)}>
                <>
                    <Anchor setVisible={setVisible} text={selected?.title || placeholder || ""} visible={visible} />
                    {
                        visible && (
                            <ScrollBar scrollStyle={styles.menu}>
                                {
                                    menuItems?.map(menuItem => (
                                        <TouchableOpacity key={menuItem.title} onPress={() => {
                                            onPress(menuItem.value)
                                            setSelected(menuItem)
                                            setVisible(false)

                                        }}>
                                            <View style={styles.menuItem} key={menuItem.value}>
                                                <Text>{menuItem.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollBar>
                        )
                    }
                </>
            </ClickAwayListener> */}
        </View>
    )
}

const Anchor = ({ setVisible, visible, text }) => {

    const rotateAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(rotateAnim, {
            toValue: visible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()

    }, [visible])

    const rotation = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    return (
        <TouchableOpacity onPress={() => {
            setVisible(v => !v)
        }} style={styles.dropdownMenu}>
            <Text style={{ color: "#9CA9B4" }}>{text}</Text>
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                <Ionicons name="caret-down" color="#9CA9B4" size={15} />
            </Animated.View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: '40vh',
        backgroundColor: 'white',
        position: 'absolute',
        top: 70,
        borderRadius: 20,
        overflowY: 'auto',
        padding: 20,
        zIndex: 500,
        elevation: 500
    },
    menuItem: {
        paddingVertical: 10
    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderRadius: 18,
        flex: 1,
        padding: 20,
        border: '1px solid #DBECFE',
        justifyContent: 'space-between',
        zIndex: 0,
        elevation: 0,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuWrapper: {
        width: '100%'
    }
})