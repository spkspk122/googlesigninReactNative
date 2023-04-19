import React, {useState} from 'react';

import {TouchableOpacity, View, Text} from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function App() {
  const [init, setInit] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      '87913127677-s1tim0tp47msjtsdfcuil2bt26osafqg.apps.googleusercontent.com',
  });

  const login = async () => {
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const userLogin = auth().signInWithCredential(googleCredential);

    userLogin.then(re => {
      console.log(re);
    });
  };
  return (
    <View style={{marginTop: '40%', alignSelf: 'center'}}>
      <TouchableOpacity onPress={login}>
        <Text>login with google</Text>
      </TouchableOpacity>
    </View>
  );
}
