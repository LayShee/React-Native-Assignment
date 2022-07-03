import {StyleSheet,
    fontSize} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container :{
        textAlign : 'center',
        margin: hp(9),
        paddingVertical : hp(4),
        borderWidth : 1
    },
    title : {
        textAlign :'center',
        fontSize : 20,
        marginBottom : 20
    },
    label : {
        textAlign :'center',
        fontSize : 15,
        marginBottom : 20
    },
    bottom : {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : hp('50%'),
        marginHorizontal : wp('30%'),
        borderWidth : 1,
        borderColor : 'grey',
        borderRadius : 5,
        padding : 10,        
        marginBottom : hp(10)
    },
    buttonText : {
        fontSize : 18,
    }
});

export default styles;