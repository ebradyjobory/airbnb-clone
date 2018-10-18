import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'
import colors from '../styles/colors';

export default class Button extends React.Component {
  render() {
    const { text, textColor, backgroundColor, handleOnPress, icon } = this.props
    return (
      <TouchableHighlight
        style={[ {backgroundColor}, styles.wrapper ]}
        onPress={handleOnPress}
      >
        <View style={styles.facebookBtn}>
          {icon}
          <Text style={[ { color: textColor }, styles.buttonText ]}>
            { text }
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
  icon: PropTypes.object
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    margin: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 17,
    width: '100%',
    textAlign: 'center'
  },
  facebookBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})