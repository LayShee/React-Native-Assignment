import { Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Pressable
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import React, {useState,useContext, useEffect} from 'react';
import { AuthContext } from "../Context/context";
import styles from "./Styles";
import useLocal from "../Hook/useLocal";
import { appStorage } from "../utils/appStorage";
//storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

const LoginScreen= (props) => {    
    const {isLogin, getIsLogin, userData ,getUserData, lang, getLang} = useContext(AuthContext); 
    const [email , setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(lang);         
    const local = useLocal();

    useEffect(() => {
        setEmail('')
        getData();
      }, [isLogin]);
    
    const getData = () => {
        RNSecureKeyStore.get('@user.data')
        .then((res) => {
            console.log('result>',res);
            getUserData(JSON.parse(res));
        }, (err) => {
            console.log(err);
        });
    }

    const changeLanguage = val => {
        try {
            appStorage.store('@lang', val);
            getLang(val);
        } catch (error) {
            console.log('error', error);
        }
    }

    const onPressNext = () => {  
        console.log('userData>>>',userData);
        if(isLogin)
        {
            if(userData?.email == email)
            {
                props.navigation.navigate('Password', {'email': email});
            }
            else
            {
                alert('User does not exist!');
            }
        }
        else {
            if(userData?.email == email)
            {
                alert('User already exist!');
            }
            else {
                props.navigation.navigate('Password', {'email': email});
            }
        }
    }

    return (
        <View  style = {styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{
                            flexDirection: 'row',
                            marginBottom : 10
                        }}>  
                            <CheckBox
                                style={{
                                    paddingLeft :20
                                }}
                                disabled={false}
                                value={toggleCheckBox == 'en' ? true : false}
                                onValueChange={()=>toggleCheckBox== 'en' ? setToggleCheckBox('mm') : setToggleCheckBox('en')}
                            />       
                            <TouchableOpacity onPress={()=>toggleCheckBox== 'en' ? setToggleCheckBox('mm') : setToggleCheckBox('en')}> 
                                <Text style={{marginTop: 5}}>English</Text>
                            </TouchableOpacity>    
                        </View>  
                        <View style={{
                            flexDirection: 'row',
                            marginBottom : 10
                        }}>  
                            <CheckBox
                                // style={styles.checkbox}
                                disabled={false}
                                value={toggleCheckBox == 'mm' ? true : false}
                                onValueChange={()=>toggleCheckBox== 'mm' ? setToggleCheckBox('en') : setToggleCheckBox('mm')}
                            />       
                            <TouchableOpacity onPress={()=>toggleCheckBox== 'mm' ? setToggleCheckBox('en') : setToggleCheckBox('mm')}> 
                                <Text style={{marginTop: 5}}>Myanmar</Text>
                            </TouchableOpacity>    
                        </View>  
                        <Pressable
                            style={[styles.modalButton, styles.buttonClose]}
                            onPress={()=>{
                                changeLanguage(toggleCheckBox);
                                setModalVisible(false);
                            }}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable> 
                    </View>                    
                </View>
            </Modal>
            <TouchableOpacity onPress={()=> setModalVisible(true)}>
                <Text style = {styles.language}>Language</Text>
            </TouchableOpacity>
            {isLogin? 
                <Text style={styles.title}>{local.login}</Text>
                :
                <Text style={styles.title}>{local.register}</Text>
            }
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder = {local.email}
                    value={email}
                    onChangeText = {(value)=> setEmail(value)}
                />
            </View>
            <TouchableOpacity 
                style ={styles.button}
                onPress={onPressNext}
            >
                <Text style = {styles.buttonText}>{local.next}</Text>
            </TouchableOpacity>
            <View
            style = {{
                alignItems: 'center', 
                justifyContent: 'center',
                padding : 20,
                flexDirection: 'row',
            }}
            >
                {isLogin ? 
                    <Text>{local.noAccount} </Text>
                    :
                    <Text>{local.already}</Text>
                }
                {isLogin ? 
                    <TouchableOpacity onPress={()=> getIsLogin(false)}>
                        <Text style={{color : 'red'}}>{local.register}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=> getIsLogin(true)}>
                        <Text style={{color : 'red'}}>{local.login}</Text>
                    </TouchableOpacity>
                }
            </View>
            <Text style={styles.bottom}>Developed By <Text style={{color : 'red'}}>Naw Lay Wah Shee</Text></Text>
        </View>
    )
}

export default LoginScreen;