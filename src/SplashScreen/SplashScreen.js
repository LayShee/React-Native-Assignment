import { Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import React, {useEffect} from 'react';
import styles from "./Styles";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/my_pic.jpg")}
            />
            <Text>Developer <Text style={{color : 'red'}}>Naw Lay Wah Shee</Text></Text>
        </View>  
    )
}

export default SplashScreen;