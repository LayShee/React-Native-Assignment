import {StyleSheet,
    fontSize} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container :{
        backgroundColor: 'white',
        flex: 1
    },
    languageContainer: {
        alignItems: 'flex-end',
        padding: hp(1),
    },
    language : {
        textAlign: 'right',
        padding: hp(1),
    },
    title : {
        textAlign : 'center',
        fontSize : 30,
        padding: hp(6),
    },
    inputContainer : {
        textAlign : 'center',
        padding: hp(5),
        backgroundColor : 'white',
    },
    input : {
        borderColor : 'grey',
        borderWidth: 1, 
        borderRadius: 5,
        fontSize : 20,
        textAlign : 'left',
        padding : 10,
        marginTop : 20
    },
    rememberPassword : {
        borderRadius: 5,
        fontSize : 15,
        textAlign : 'left',
        padding : 10,
        marginTop : 20
    },
    checkbox : {
        borderRadius: 5,
        fontSize : 15,
        textAlign : 'left',
        marginTop : 25
    },
    button : {
        justifyContent : 'center',
        borderWidth : 1,
        backgroundColor : 'grey',
        // padding: hp(1),
        marginHorizontal : hp(5),
        borderRadius : 5,
        borderColor : 'grey'
    },
    buttonText : {
        borderColor : 'grey',
        borderWidth: 1, 
        borderRadius: 5,
        fontSize : 20,
        color : 'white',
        textAlign : 'center',
        padding : 10
    },
    bottom : {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop : hp(40),
        marginBottom : hp(10)
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignItems:'center',
        marginLeft : 25
    },
    buttonOpen: {
        backgroundColor: "grey",
    },
    buttonClose: {
        backgroundColor: "grey",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
    
});

export default styles;