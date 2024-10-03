import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
//* Icons
import { Feather, Fontisto } from '@expo/vector-icons';
//* Utils
import { colors } from '../../utils/colors';
import { googleLogo } from '../../utils/image';
//* Component
import CustomButton from '../../components/CustomButton';

const RegisterScreen = () => {

    const navigation = useNavigation();
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const handleGoBack = () => {

        navigation.goBack();
    };

    const handleLogin = () => {

        navigation.push('Login');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleGoBack}
                activeOpacity={0.9}
                style={styles.backButtonWrapper}
            >
                <Feather name='arrow-left' size={30} color={colors.primary} />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Let's, get</Text>
                <Text style={styles.text}>Started</Text>
            </View>

            {/* Form */}

            <View style={styles.formContainer}>

                <View style={styles.inputContainer}>
                    <Feather name='user' size={24} color={colors.secondary} />
                    <TextInput
                        style={styles.inputText}
                        placeholder='Enter your username'
                        placeholderTextColor={colors.secondary}
                        maxLength={40}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Fontisto name='email' size={24} color={colors.secondary} />
                    <TextInput
                        style={styles.inputText}
                        placeholder='Enter your email'
                        placeholderTextColor={colors.secondary}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        maxLength={40}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Fontisto name='locked' size={24} color={colors.secondary} />
                    <TextInput
                        style={styles.inputText}
                        placeholder='Enter your Password'
                        placeholderTextColor={colors.secondary}
                        autoCapitalize='none'
                        secureTextEntry={secureTextEntry}
                        maxLength={15}
                    />
                    <TouchableOpacity
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                    >
                        {
                            secureTextEntry ?
                                <Feather name='eye' size={18} color={colors.secondary} /> :
                                <Feather name='eye-off' size={18} color={colors.secondary} />
                        }
                    </TouchableOpacity>
                </View>
            </View>


            <View>
                <CustomButton
                    title='Sign Up'
                    onPress={() => { }}
                    textStyle={{ padding: 10 }}
                    containerStyle={{ borderRadius: 45 / 2, marginVertical: 20 }}
                />

                <Text style={styles.textContinue}>or continue with</Text>

                <CustomButton
                    title='Google'
                    image={googleLogo}
                    imageStyle={{ marginRight: 10 }}
                    onPress={() => { }}
                    textStyle={{ padding: 10, color: colors.primary }}
                    containerStyle={{ borderRadius: 45 / 2, marginVertical: 10, backgroundColor: colors.white, borderWidth: 2, borderColor: colors.primary }}
                />
            </View>

            <View style={styles.textFooter}>
                <Text style={styles.textContinue}>
                    Already have an account?
                </Text>
                <TouchableOpacity
                    onPress={handleLogin}
                    activeOpacity={0.9}
                >
                    <Text style={[styles.textContinue, { color: colors.primary, fontFamily: 'Poppins-SemiBold' }]}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    backButtonWrapper: {
        width: 45,
        height: 45,
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45 / 2,
        marginTop: 30,
    },
    textContainer: {
        marginVertical: 20,
    },
    text: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: 'Poppins-Regular',
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 45 / 2,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginVertical: 10,
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        marginTop: 5,
    },
    textForgetting: {
        textAlign: 'right',
        fontSize: 16,
        color: colors.primary,
        fontFamily: 'Poppins-Regular',
        marginVertical: 5,
    },
    textContinue: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    textRegister: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    textFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 10,
    },
});

export default RegisterScreen;