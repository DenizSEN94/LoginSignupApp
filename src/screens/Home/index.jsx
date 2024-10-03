import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//* Utils
import { colors } from '../../utils/colors';
import { logo, man } from '../../utils/image';


const HomeScreen = () => {

    const [activeButton, setActiveButton] = useState('login');
    const navigation = useNavigation();


    const handleLogin = () => {
        setActiveButton('login');
        setTimeout(() => {
            navigation.push('Login');
        }, 300);
    };

    const handleRegister = () => {
        setActiveButton('register');
        setTimeout(() => {
            navigation.push('Register');
            setActiveButton('login');
        }, 300);
    };


    return (
        <View style={styles.container}>
            <Image
                source={logo}
                resizeMode='contain'
                style={styles.logo}
            />
            <Image
                source={man}
                resizeMode='contain'
                style={styles.bannerImage}
            />
            <Text style={styles.titleText}>
                Lorem Ipsun {'      '} Dolor...</Text>
            <Text style={styles.descriptionText}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>

            <View style={styles.buttonContainer}>

                {/* Login Button */}
                <TouchableOpacity
                    style={[
                        styles.buttonWrapper,
                        { backgroundColor: activeButton === 'login' ? colors.primary : colors.white },
                    ]}
                    activeOpacity={0.9}
                    onPress={handleLogin}
                >
                    <Text style={[
                        styles.buttonText,
                        { color: activeButton === 'login' ? colors.white : colors.primary }
                    ]}>Login</Text>
                </TouchableOpacity>

                {/* Register Button */}
                <TouchableOpacity
                    style={[
                        styles.buttonWrapper,
                        { backgroundColor: activeButton === 'register' ? colors.primary : colors.white },
                    ]}
                    activeOpacity={0.9}
                    onPress={handleRegister}
                >
                    <Text style={[
                        styles.buttonText,
                        { color: activeButton === 'register' ? colors.white : colors.primary }
                    ]}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    logo: {
        height: 40,
        width: 140,
        marginVertical: 50,
    },
    bannerImage: {
        height: 250,
        width: 250,
    },
    titleText: {
        fontSize: 36,
        marginTop: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.primary,
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 20,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.secondary,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.primary,
        width: '85%',
        height: 60,
        borderRadius: 100,
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 98,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
});

export default HomeScreen;