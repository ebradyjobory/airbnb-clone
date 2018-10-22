import React from 'react'
import PropTypes from 'prop-types'
import colors from '../styles/colors'
import baseStyles from '../styles/base'

import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Easing,
} from 'react-native'

import InputField from '../components/form/InputField'
import NextArrowBtn from '../components/buttons/NextArrowBtn'
import Notification from '../components/Notification'
import Loader from '../components/Loader'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    formIsValid: true,
    emailIsValid: false,
    passwordIsValid: false,
  }
  onNextArrowBtnClick = () => {
    // alert('next arrow btn clicked.')
    // this.setState({ formIsValid: !this.state.formIsValid })
  }
  closeNotification = () => {
    this.setState({ formIsValid: true })
  }

  onFormChange = (text, name) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = re.test(String(text).toLowerCase())
    const passwordIsValid = this.state.password.length > 5
    this.setState({
      [name]: text,
      emailIsValid,
      passwordIsValid,
      formIsValid: emailIsValid && passwordIsValid,
    })
  }

  formCompleteAndValid = () => {
    return this.state.formIsValid &&
      this.state.emailIsValid &&
      this.state.passwordIsValid
  }

  render() {
    const { formIsValid } = this.state
    const backgroundColor = formIsValid ? colors.green01 : colors.darkOrange
    return (
      <KeyboardAvoidingView
        style={[styles.loginContainer, { backgroundColor }]}
        behavior='padding'
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.ScrollView}>
            <Text style={baseStyles.screenTitle}>Log In</Text>
            <InputField
              name='email'
              value={this.state.email}
              labelText='EMAIL ADDRESS'
              onChange={this.onFormChange}
            />
            <InputField
              name='password'
              value={this.state.password}
              labelText='PASSWORD'
              type='password'
              onChange={this.onFormChange}
            />
          </ScrollView>
          <View style={styles.nextArrowBtn}>
            <NextArrowBtn
              disabled={!this.formCompleteAndValid()}
              onClick={this.onNextArrowBtnClick}
            />
          </View>
          <Notification
            showNotification={!formIsValid}
            type='error'
            textArray={[ 'Those credentials don\'t look right.', 'Please try again.' ]}
            onPress={this.closeNotification}
          />
        </View>
        <Loader
          animationType='fade'
          visible
          text='Please wait..'
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  scrollViewWrapper: {
    flex: 1,
    marginTop: 70,
  },
  ScrollView: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
  },
  nextArrowBtn: {
    alignItems: 'flex-end',
    marginRight: 20,
    bottom: 20,
  },
})
