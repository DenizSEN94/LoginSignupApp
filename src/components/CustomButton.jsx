import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { colors } from '../utils/colors';

const CustomButton = ({ title, containerStyle, textStyle, onPress, image, imageStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={[styles.container, containerStyle]}
        >
            <View style={styles.content}>
                {image && <Image source={image} style={[{ width: 20, height: 20 }, imageStyle]} />}
                {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
            </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
});


export default CustomButton;