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
  constructor(props) {
    super()
    this.state = {
      secureInputField: props.type === 'text' || props.type === 'email' ? false : true
    }
  }
  toggleInputSecurity = () => {
    this.setState({ secureInputField: !this.state.secureInputField })
  }
  render() {
    const { type, value, labelText, labelFontSize, labelFontColor, labelFontWeight, onChange, name } = this.props
    return (
      <View style={styles.wrapper}>
        <Text
          style={[ {fontSize: labelFontSize }, { color: labelFontColor }, { fontWeight: labelFontWeight } ]}
        >{labelText}
        </Text>
        {
          type === 'password' &&
          <TouchableOpacity style={styles.hideShowToggle} onPress={this.toggleInputSecurity}>
            <Text style={styles.hideShowText}>
              { this.state.secureInputField ? 'show' : 'hide' }
            </Text>
          </TouchableOpacity>
        }
        <TextInput
          value={value}
          secureTextEntry={this.state.secureInputField}
          autoCorrect={false}
          style={styles.input}
          onChangeText={text => onChange(text, name)}
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
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelFontSize: PropTypes.number,
  labelFontColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  inputTextColor: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40,
    alignItems: 'stretch'
  },
  input: {
    color: colors.white,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    paddingTop: 10
  },
  hideShowToggle: {
    position: 'absolute',
    right: 0,
  },
  hideShowText: {
    color: colors.white
  }
})