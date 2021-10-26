import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import BGimg from '../assets/BGimg.jpg'
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/chat.png';

export default Register = ({navigation}) => {

    const [data, setData] = React.useState({
        phone: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        const regex = /^\d{10}$/g;
        if (val.match(regex) !== null) {
            console.log("OK")
            setData({
                ...data,
                phone: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ...data,
                phone: val,
                check_textInputChange: false
            })
        }
    };
    const onPressContinue = (val)=>{
        const regex = /^\d{10}$/g;
        if(data){
            navigation.navigate('OTP')
        }
    }

    return (
        <ImageBackground source={BGimg} style={styles.backgroundContainer}>
            <View style={styles.logo_row}>
                <Text style={styles.logo_text}>XI</Text>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.logo_text}>AO</Text>
            </View>
            <View>
            <Text style={styles.title}>Đăng ký</Text>
            </View>
                <View>
                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        placeholder='Nhập số điện thoại'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    <Feather name={'phone'} size={23} style={styles.input_icon} />
                    {data.check_textInputChange ?
                        <Feather name='check-circle' style={styles.btn_icon} size={23} />
                        : null}
                </View>
                <TouchableOpacity style={styles.btn_regis}
                onPress ={(val) => onPressContinue(val)}
                >
                    <Text style={styles.text_login}>Đăng ký</Text>
                </TouchableOpacity>
                <Text onPress ={() =>navigation.goBack()}
                style={styles.btn_back}>Về Đăng nhập</Text>
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
    title:{
        color:'#4169E1',
        top:-20,
        fontSize:35,  
    },
    logo_row: {
        top:-40,
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
    input: {
        backgroundColor: '#FFEBCD',
        width: 300,
        height: 45,
        fontSize: 15,
        paddingLeft: 33,
        borderRadius: 20,
        color: 'black',
    },
    input_icon: {
        color: 'black',
        width:'10%',
        position: 'relative',
        left: 5,
        top: -37,
    },
    btn_icon: {
        top: -58,
        left: 270,
    },
    btn_regis: {
        backgroundColor: '#4169E1',
        width: 300,
        height: 45,
        borderRadius: 20,
        justifyContent: 'center',
    },
    text_login: {
        textAlign: 'center',
        fontSize: 17,
        color:'white'
    },
    btn_back:{
        top:200,
        color: '#663399',
        fontSize:17,
        alignItems:'center',
    },
});