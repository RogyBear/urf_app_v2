import React from 'react';
import { View } from 'react-native';

const SettingsScreen = ({
    children, style, ...rest
}) => (
    <View style={style}>
        {children}
    </View>
);

export default SettingsScreen;
