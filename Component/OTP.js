import React, { useRef, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    KeyboardAvoidingView,
} from 'react-native';
import BGimg from '../assets/BGimg.jpg'
import Logo from '../assets/chat.png';

export default OTP = ({ navigation }) => {

    var textInput = useRef(null)
    var clockCall = null
    const lengthInput = 6;
    const defaultCountdown = 5;
    const [internalVal, setInternaVal] = useState('')
    const [countdown, setCountdown] = useState(defaultCountdown)
    const [enableResend, setEnableResend] = useState(false)

    useEffect(() =>{
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000)
        return () =>{
            clearInterval(clockCall)
        }
    })

    const decrementClock = () =>{
        if(countdown === 0){
            setEnableResend(true)
            setCountdown(0)
            clearInterval(clockCall)
        }else{
        setCountdown(countdown -1)
        }
    }

    const onChangeText = (val) => {
        setInternaVal(val)
    }

    const onResendOTP = () =>{
        if(enableResend){
            setCountdown(defaultCountdown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(() =>{
                decrementClock()
            }, 1000)
        }
    }

    useEffect(() => {
        textInput.focus()
    }, [])  

    return (
        <ImageBackground source={BGimg} style={styles.backgroundContainer}>
            <View style={styles.logo_row}>
                <Text style={styles.logo_text}>XI</Text>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.logo_text}>AO</Text>
            </View>
            <View>
                <Text style={styles.title}>OTP</Text>
            </View>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={styles.containerAvoiddingView}
            >
                <View>
                    <TextInput
                        ref={(input) => textInput = input}
                        onChangeText={onChangeText}
                        style={{ width: 0, height: 0 }}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType='done'
                        keyboardType='numeric'
                    />
                    <View style={styles.containerInput}>
                        {
                            Array(lengthInput).fill().map((data, index) => (
                                <View
                                    key={index}
                                    style={styles.cellView}>
                                    <Text style={styles.cellText}
                                        onPress={() => textInput.focus()}
                                    >
                                        {internalVal && internalVal.length > 0 ? internalVal[index] : ''}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.bottom_view}>
                    <TouchableOpacity onPress ={onResendOTP}>
                        <View style={styles.btn_resend}>
                            <Text style={[
                                styles.text_resend,
                                {
                                    color: enableResend ? '#234DB7' :'gray'
                                }
                            ]}
                            >Gửi lại mã ({countdown})</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_back}
                    onPress={() => navigation.goBack()}>
                        <Text 
                            style={styles.text_back}>Quay lại
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
    },
    title: {
        color: '#4169E1',
        top: -20,
        fontSize: 35,
    },
    logo_row: {
        top: -40,
        flexDirection: 'row',
    },
    logo: {
        width: 50,
        height: 50,
    },
    text: {
        color: '#DB7093',
        fontSize: 17,
    },
    logo_text: {
        color: '#7B68EE',
        fontSize: 50,
    },
    containerAvoiddingView: {
        alignItems: 'center',
        padding: 10,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5,
    },
    cellText: {
        textAlign: 'center',
        fontSize: 17,
    },
    bottom_view:{
        flexDirection:'row',
        marginTop:50,
        alignItems:'center',
    },
    btn_back: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 150,
        height: 50,
        marginLeft:80,
    },
    text_back: {
        color: '#663399',
        alignItems: 'center',
        fontSize: 17,
    },
    btn_resend: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    text_resend: {
        alignItems: 'center',
        fontSize: 17,
    }
});