import { Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import React, {useContext, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { appStorage } from "../utils/appStorage";
import styles from "./Styles";
import {AuthContext} from '../Context/context';
import useLocal from "../Hook/useLocal";

const PasswordScreen= (props) => {
    const local = useLocal();
    const email = props.route.params.email;
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {isLogin,getIsLogin,userData, getAuth} = useContext(AuthContext);

    const changeLanguage = val => {
        try {
            appStorage.store('@lang', val);
            getLang(val);
        } catch (error) {
            console.log('error', error);
        }
    }

    const register = () => {
        if(password !== confirmPassword)
        {
            alert('Password and confirm password must have the same value!');
            return;
        }
        let userData = {
            email : email,
            password : password
        };        
        let userStr= JSON.stringify(userData);
        appStorage.store('@user.data', userStr);
        getIsLogin(true);
        props.navigation.navigate('Login');
    }

    const doLogin = () => {
        if(userData.password == password)
        {
            getAuth(true);
        }
        else {
            alert('Incorrect password');
        }
    }
    return (
        <View  style = {styles.container}>
            <Text style={styles.title}>{local.security}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder = {local.password}
                    value= {password}
                    onChangeText = {(value) => setPassword(value)}
                    secureTextEntry={true}
                />
                {
                    isLogin ? 
                    <View style={{
                        flexDirection: 'row',
                    }}>  
                        {/* <CheckBox
                            style={styles.checkbox}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />       
                        <TouchableOpacity onPress={()=>setToggleCheckBox(!toggleCheckBox)}> 
                            <Text style={styles.rememberPassword}>Remember Password</Text>
                        </TouchableOpacity>     */}
                    </View>                    
                    :
                    <TextInput 
                        style={styles.input}
                        placeholder = {local.confirmPassword}
                        value= {confirmPassword}
                        onChangeText = {(value) => setConfirmPassword(value)}
                        secureTextEntry={true}
                    /> 
                }
            </View>
            {
                isLogin ?
                <TouchableOpacity style ={styles.button} onPress={doLogin}>
                    <Text style = {styles.buttonText}>{local.login}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style ={styles.button}  onPress={register}>
                    <Text style = {styles.buttonText}>{local.register}</Text>
                </TouchableOpacity>
            }
            <Text style={styles.bottom}>Developed By <Text style={{color : 'red'}}>Naw Lay Wah Shee</Text></Text>
        </View>
    )
}

export default PasswordScreen;