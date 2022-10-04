import React from 'react';
import { View } from 'react-native';

const SelectPDF = ({
    children, style, ...rest
}) => (
    <View style={style}>
        {children}
    </View>
);

export default SelectPDF;
