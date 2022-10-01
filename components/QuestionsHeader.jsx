import React, { Dispatch, SetStateAction } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
// import * as Progress from 'react-native-progress';
import { Svg } from 'react-native-svg';
import ProgressBar from './global-components/forms/ProgessBar';
// import SvgDog from '../assets/icons/question-dog.js'

export default function QuestionHeader({ palette, progress, setHelp, goBack }) {
    return (
        <View style={styles.container}>
            <CloseIcon goBack={goBack}/>
            <ProgressBar progress={progress} colors={palette.primary} style={{height: 10, borderRadius: 100, width: Dimensions.get('window').width / 1.7, backgroundColor: '#FFF' }}/>

            {/* <Progress.Bar style={{ marginBottom: 4  }} progress={progress} width={Dimensions.get('window').width /1.8} color={color} height={11} borderRadius={10000} /> */}

            {/* <ProgressBar progress={progress} colors={Array.isArray(colors) ? colors : [colors, colors]} /> */}
            <TouchableOpacity onPress={() => setHelp(h => !h)}>
                
                {/* <SvgDog width='100%' height='100%'/> */}
                    {/* https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg */}
                {/* <Image source={require('../assets/icons/question-dog.svg')} style={{ width: 35, height: 45 }} /> */}
            </TouchableOpacity>
        </View>
    )
}

const CloseIcon = ({goBack}) => {

    return (
        <TouchableOpacity style={styles.iconButton} onPress={goBack}>
            <Ionicons name='close' size={30} color="black" />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    iconButton: {
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 10
    },
    statusBar: { 
        backgroundColor: 'blue',
        height: 20,
        flex: 1
    },
    container: {
        marginHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    }
})