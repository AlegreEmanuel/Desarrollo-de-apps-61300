import { Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import InputForm from '../components/inputForm'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../global/colors';
import SubmitButton from '../components/submitButton'
import { useEffect, useState } from 'react'
import {useLoginMutation} from '../services/AuthService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import loginSchema from '../validations/loginSchema'
import { insertSession } from '../db';





const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerSignIn, result] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
      if (result.data) {
        dispatch(setUser(result.data));
        insertSession({
          email: result.data.email,
          localId: result.data.localId,
          token: result.data.idToken
        })
        
      }
    }, [result]);

      const onSubmit = async () => {
        try {
          loginSchema.validateSync({ email, password });
          await triggerSignIn({ email, password });
        } catch (error) {
          console.log(error);
          switch (error.path) {
            case "email":
              setErrorEmail(error.message);
              break;
            case "password":
              setErrorPassword(error.message);
              break;
            default:
              break;
          }
        }
      };

    const goToSignUp = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <InputForm  label={"Email"} error={errorEmail} onChange={setEmail} />
            <InputForm  label={"Password"} error={errorPassword} onChange={setPassword} />
            {result.isLoading ? (<ActivityIndicator size="large" color="blue"/>
            ):( 
                <View>
            <SubmitButton title={"Login"} onPress={onSubmit} />
            <Pressable onPress={goToSignUp}>
                <Text style={styles.link}>Create an account</Text>
            </Pressable>
            </View>
            )
            }
            
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.blue_100,

  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Fuerte',
      marginBottom: 20,
  },
  link: {
      color: 'blue',
      marginTop: 10,
      fontFamily: 'Fuerte',

  },
  loginButton: {
      backgroundColor: colors.blue_300,
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      
  },
  loginButtonText: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Debil',
      fontSize: 24,


  },

});
