import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name:');
  const [age, onChangeAge] = React.useState('Age:');
  const [address, onChangeAddress] = React.useState('Address:');
  const [school, onChangeSchool] = React.useState('School:');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [contact, onChangeContact] = React.useState('Contact No:');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeTextName={onChangeName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeTextAge={onChangeAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          onChangeTextAddress={onChangeAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeTextSchool={onChangeSchool}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeTextCourse={onChangeCourse}
          value={course}
        />
        <TextInput
          style={styles.input}
          onChangeTextEmail={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeTextContact={onChangeContact}
          value={contact}  
          />     
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;