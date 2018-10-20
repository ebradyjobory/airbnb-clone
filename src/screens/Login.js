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
} from 'react-native'

import InputField from '../components/form/InputField'
import NextArrowBtn from '../components/buttons/NextArrowBtn'

export default class Login extends React.Component {
  onNextArrowBtnClick = () => {
    alert('next arrow btn clicked.')
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.loginContainer}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.ScrollView}>
            <Text style={baseStyles.screenTitle}>Log In</Text>
            <InputField
              labelText='EMAIL ADDRESS'
            />
            <InputField
              labelText='PASSWORD'
              type='password'
            />
          </ScrollView>
        </View>
        <View style={styles.nextArrowBtn}>
          <NextArrowBtn
            onClick={this.onNextArrowBtnClick}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: colors.green01,
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
  }
})
