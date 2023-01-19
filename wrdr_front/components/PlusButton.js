import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import {images} from '../images';

const PlusButton = () => {
    return (
        <TouchableOpacity style={StyleSheet.button}>
            <Image source={require('../images/plusButton.png')} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
    },
});

export default IconButton;