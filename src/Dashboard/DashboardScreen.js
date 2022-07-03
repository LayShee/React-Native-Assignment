import { Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import React, {useContext} from 'react';
import styles from "./Styles";
import {AuthContext} from '../Context/context';

const DashboardScreen= () => {   
    const {userData, getAuth} = useContext(AuthContext);
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.label}>Email : {userData.email}</Text>
                {/* <Text style={styles.label}>{test}</Text> */}
            </View>     
            <TouchableOpacity style={styles.bottom} onPress={()=>getAuth(false)}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardScreen;