import { Text, TextProps } from "react-native";


export default (props) => {
    const defaultStyle = { fontFamily: 'Nunito' }
    const otherStyles = Array.isArray(props.style) ? props.style : [props.style]
    return <Text {...props} style={[defaultStyle, otherStyles]} />
}