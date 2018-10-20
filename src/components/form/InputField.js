import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import colors from '../../styles/colors';

export default class InputField extends React.Component {
  render() {
    const { type, labelText, labelFontSize, labelFontColor, labelFontWeight } = this.props
    return (
      <View style={styles.wrapper}>
        <Text
          style={[ {fontSize: labelFontSize}, {color: labelFontColor}, {fontWeight: labelFontWeight} ]}
        >{labelText}
        </Text>
        <TextInput
          secureTextEntry={type === 'password'}
          autoCorrect={false}
          style={styles.input}
        />
      </View>
    )
  }
} 

InputField.defaultProps = {
  type: 'text',
  labelFontSize: 17,
  labelFontColor: colors.white,
  inputTextColor: colors.white,
  labelFontWeight: '700',
}

InputField.propTypes = {
  type: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number,
  labelFontColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  inputTextColor: PropTypes.string,
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40,
  },
  input: {
    color: colors.white,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingTop: 10,
  }
})