import React, {useState, useEffect} from 'react';
import {AuthContext} from '../Context/context';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//storage
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

//Component
import LoginScreen from '../LoginScreen/LoginScreen';
import PasswordScreen from '../LoginScreen/PasswordScreen';
import DashboardScreen from '../Dashboard/DashboardScreen';
import SplashScreen from '../SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
    </Stack.Navigator>
  );
};
const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  )
}

const appNavigator = () => {
  const [lang, setLang] = useState('en');
  const [splashScreen, setSplashScreen] = useState(true);
  const [auth, setAuth] = useState(false);
  const [userData,setUserData] =useState(null);
  const [isLogin,setIsLogin] = useState(true);

  
  useEffect(() => {
    storeData();
  }, []);

  const storeData = () => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
    // try {
     
    //   const locale = appStorage.getItem('@lang');
    //   setLang(locale);
    //   if (data) {
    //     setAuth(true);
      
    //   } else {
    //     setAuth(false);
    //     setSplashScreen(false);
    //   }
    // } catch (error) {
    //   console.log('error', error);
    // }
  };

  const context = {
    lang,
    userData,
    isLogin,
    auth,
    getLang: value => {
      setLang(value);
    },

    getUserData : value => {
      setUserData(value);
    },

    getIsLogin : value => {
      setIsLogin(value);
    },
    getAuth : value => {
      setAuth(value);
    }
  };

  if(splashScreen)
  {
    return (
      <SplashScreen/>
    );
  }
  else if(auth)
  {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack/>
        </NavigationContainer>
      </AuthContext.Provider>
    ); 
  }
  else{
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default appNavigator;
