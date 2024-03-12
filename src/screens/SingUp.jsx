import { Pressable, StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/inputForm'
import { useSignUpMutation } from '../services/AuthService'
import SubmitButton from '../components/submitButton'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import signUpSchema from '../validations/singUpSchema'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../global/colors'



const SingUp = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [errorEmail, setErrorEmail] = useState()
    const [errorPassword, setErrorPassword] = useState()
    const [errorConfirmPassword, setErrorConfirmPassword] = useState()
    const [triggerSingUp,result] = useSignUpMutation()
    const navigation = useNavigation();


    const onSubmit = () =>{


        try{
          signUpSchema.validateSync({email,password,confirmPassword})
          triggerSingUp({email,password})

        } catch(err){
          console.log(err)
          switch(err.path){
            case "email":
              setErrorEmail(err.message);
              break;
            case "password":
              setErrorPassword(err.message);
              break;
            case "confirmPassword":
              setErrorConfirmPassword(err.message);
              break;
            default:
              break;
          }
        }
    }

    const goToLogin = () => {
      navigation.navigate('Login');
  }
    const dispatch = useDispatch()

    useEffect(()=>{
      if(result.data){
        dispatch(setUser(result))
      }
    }, [result])

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <InputForm style={styles.input} label={"Email"} error={errorEmail} onChange={setEmail} />
          <InputForm style={styles.input} label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true} />
          <InputForm style={styles.input} label={"ConfirmPassword"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true} />
          {result.isLoading ? (<ActivityIndicator size="large" color="blue"/>
            ):( 
            <View>
            <SubmitButton title={"Register"} onPress={onSubmit} />
            <Pressable onPress={goToLogin}>
                <Text style={styles.link}>Already have an account? Login</Text>
            </Pressable>
            </View>
              )
            }
      </View>
  )
}

export default SingUp

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
      marginBottom: 20,
      fontFamily: 'Fuerte',

  },
  link: {
      color: 'blue',
      marginTop: 10,
      fontFamily: 'Fuerte',
  },
  

});