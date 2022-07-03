import {StyleSheet,
    fontSize} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container :{
        textAlign : 'center',
        justifyContent: 'center',
        alignItems :'center',
        marginTop: hp(20),
    },
    image : {
        height : 100 ,
        width : 100 ,
        borderRadius : 5,
        marginBottom : 20
    }
});

export default styles;