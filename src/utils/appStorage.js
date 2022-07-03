import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

// For storing key
export const appStorage = {
    store : (key,value) => {
        RNSecureKeyStore.set(key, value, {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
        .then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    },

    fetch : (key) => {
        RNSecureKeyStore.get(key)
        .then((res) => {
            console.log('result>',res);
            return res;
        }, (err) => {
            console.log(err);
        });
    },
    remove : (key) =>{
        RNSecureKeyStore.remove(key)
        .then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
}