import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // Perform additional actions such as navigating to another screen
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // Display an error message to the user
        ToastAndroid.show(`Error: ${errorMessage}`, ToastAndroid.LONG);
      });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>
        Create New Account
      </Text>

      {/* User Full Name */}
      <View style={{
        marginTop: 50,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          onChangeText={(value) => setFullName(value)}
          value={fullName}
        />
      </View>

      {/* Email */}
      <View style={{
        marginTop: 50,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          placeholder="Enter Email"
          value={email}
        />
      </View>

      {/* Password */}
      <View style={{
        marginTop: 50,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter Password"
          value={password}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity onPress={onCreateAccount} style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50
      }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center'
        }}>
          Create Account
        </Text>
      </TouchableOpacity>
      
      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-in')}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1
        }}
      >
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center'
        }}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit',
  },
});
