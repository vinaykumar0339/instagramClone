import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import { images, colors, dimensions, icons } from '../resources'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function SignIn() {

    const [passwordHide, setpasswordHide] = useState(true)

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={colors.BLACK}
            />
            {/* header */}
            <TouchableOpacity 
                style={styles.header}
                activeOpacity={1}
            >
                <Text style={styles.headerText}>English</Text>
                <EvilIcons 
                    size={dimensions.ICON_MEDIUM}
                    name={icons.EvilIcons.CHEVRON_DOWM}
                    color={colors.LIGHT_GRAY}
                />
            </TouchableOpacity>
            {/* body */}
            <View style={styles.body}>
                <Image 
                    source={images.instagramTextImage}
                    style={styles.image}
                />
                <TextInput 
                    placeholder={'Phone number, email or username'}
                    placeholderTextColor={colors.LIGHT_GRAY}
                    style={styles.input}
                />
                <View style={styles.passwordInput}>
                    <TextInput 
                        placeholder={'Password'}
                        secureTextEntry={passwordHide}
                        placeholderTextColor={colors.LIGHT_GRAY}
                        style={styles.input}
                    />
                    <Ionicons 
                        size={dimensions.ICON_MEDIUM}
                        name={passwordHide ? icons.Ionicons.EYE_OFF : icons.Ionicons.EYE}
                        color={colors.LIGHT_GRAY}
                        style={styles.eyeIcon}
                        onPress={() => setpasswordHide(!passwordHide)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.login}
                >
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.forgotPassword}
                    activeOpacity={1}
                >
                    <Text style={styles.footerOne}>Forgot your login details? </Text>
                    <Text style={styles.footerTwo}>Get help logging in.</Text>
                </TouchableOpacity>
                <View style={styles.or}>
                    <View style={styles.orDivider} />
                    <View>
                        <Text style={styles.orText}>OR</Text>
                    </View>
                    <View style={styles.orDivider} />
                </View>
                <View style={styles.loginFacebook}>
                    <MaterialIcons 
                        size={dimensions.ICON_MEDIUM}
                        name={icons.MaterialIcons.FACEBOOK}
                        color={colors.DARK_SKY_BLUE}
                    />
                    <Text style={styles.loginFacebookText}>Log in with Facebook</Text>
                </View>
            </View>
            {/* footer */}
            <TouchableOpacity 
                style={styles.footer}
                activeOpacity={1}
            >
                <Text style={styles.footerOne}>Don't have an account? </Text>
                <Text style={styles.footerTwo}>Sign up.</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLACK,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: colors.LIGHT_GRAY
    },
    body: {
        width: '90%',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        tintColor: colors.WHITE,
    },
    input: {
        backgroundColor: colors.MEDIUM_GRAY,
        padding: 10,
        width: '100%',
        marginBottom: 20,
        borderRadius: 5,
        color: colors.WHITE,
        fontWeight: 'bold'
    },
    passwordInput: {
        width: '100%'
    },
    eyeIcon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    login: {
        backgroundColor: colors.SKY_BLUE,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    loginText: {
        color: colors.WHITE,
        fontWeight: 'bold'
    },
    forgotPassword: {
        flexDirection: 'row',
        marginVertical: 10
    },
    or: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    orDivider: {
        flex: 1, 
        height: 1, 
        backgroundColor: colors.LIGHT_GRAY
    },
    orText: {
        width: 50, 
        textAlign: 'center',
        color: colors.LIGHT_GRAY
    },
    loginFacebook: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    loginFacebookText: {
        color: colors.DARK_SKY_BLUE,
        marginLeft: 3,
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderTopColor: colors.LIGHT_GRAY,
        width: '100%',
        paddingVertical: 10
    },
    footerOne: {
        color: colors.WHITE
    },
    footerTwo: {
        color: colors.VERY_LIGHT_SKY_BLUE
    }
})

export default SignIn
