import React, {useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const initialState = {
  email: '',
  password: ','
};

const loadApplication = async () => {
    await Font.loadAsync({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
    })
}
export default function App  ()  {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [isReady, setIsReady] = useState(false);
    
    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setState(initialState);
    };

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onFinish={() => setIsReady(true)}
            onError={console.warn} />
    };

 
  return (
      <TouchableWithoutFeedback onPress={keyboardHide} >
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/Photo BG.jpg')}
          style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View >
              <View
                style={{
                  ...styles.formWrapper,
                  ...Platform.select({
                    android: {
                      marginTop: isShowKeyboard ? -50 : 0,
                    }
                  })
                }}
              >
                <Text style={{
                  ...styles.title,
                  marginTop: isShowKeyboard ? 32 : 0,
                }}
                >
                  Вхід
                </Text>
                <View style={{
                  ...styles.form,
                  paddingBottom: isShowKeyboard? 32 : 100,
                }}
                >
                  <View style={styles.inputMail}>
                    <TextInput style={{
                      ...styles.input,
                      borderColor: email ? '#FF6C00' : '#F6F6F6',
                      backgroundColor:email ? '#FFFFFF' : '#212121',
                    }}
                      textAlign={'left'}
                      placeholderTextColor={'#BDBDBD'}
                      keyboardType='email-address'
                      textContentType="email"
                      value={state.email}
                      placeholder='Введіть електронну пошту'
                      onFocus={() => {
                        setIsShowKeyboard(true),
                          setIsFocusInput({
                            ...isFocusInput,
                            email: true,
                          });
                      }}
                      onBlur={() => {
                        setIsFocusInput({
                          ...isFocusInput,
                          email: false,
                        });
                      }}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email:value,
                        }))
                      }
                    />
                  </View>
                  <View style={styles.inputPassword}>
                    <TextInput
                      style={{
                        ...styles.input,
                        borderColor: isFocusInput.password ? '#FF6C00' : '#F6F6F6',
                        backgroundColor: isFocusInput.password ? '#FFFFFF' : '#212121',
                      }}
                      textAlign={'left'}
                      placeholderTextColor={'#BDBDBD'}
                      textContentType="password"
                      value={state.password}
                      secureTextEntry={isShowPassword}
                      placeholder='Пароль'
                      onFocus={() => {
                        setIsShowKeyboard(true),
                          setIsFocusInput({
                            ...isFocusInput,
                            password: true,
                          });
                      }}
                      onBlur={() => {
                        setIsFocusInput({
                          ...isFocusInput,
                          password: false,
                        });
                      }}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <Text style={styles.showPass}
                      onPress={() => {
                      setIsShowPassword((prevState)=>!prevState)
                    }}
                    >
                      {isShowPassword ? 'Показати' : 'Приховати'}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleSubmit}>
                    <Text style={styles.buttontext}>
                      Увійти
                    </Text>
                  </TouchableOpacity >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}>
                    <Text style={styles.aside}>
                      Немає акаунту? Зареєструйся
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  formWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
  },
  title: {
    fontFamily: "RobotoMedium",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    paddingLeft: 16,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
  },
  inputMail: {
    marginTop: 32,
  },
  inputPassword: {
    marginTop: 16,
  },
  showPass: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    lineHeight: 19,
    fontSize: 16,
    position: "absolute",
    top: 16,
    left: 260,
    color: "#1B4371",
  },
  button: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 61,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
  },
  aside: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});