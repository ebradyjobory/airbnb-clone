import React from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons//FontAwesome'
import colors from '../../styles/colors';

export default class NextArrowBtn extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool
  }

  render() {
    const { disabled, onClick } = this.props
    const opacity = disabled ? 0.4 : 1
    return (
      <TouchableHighlight
        style={[ styles.nextBtnWrapper, { opacity } ]}
        disabled={disabled}
        onPress={onClick}
      >
        <Icon name='angle-right' color={colors.green01} size={35}/>
      </TouchableHighlight>
    )
  }
}

NextArrowBtn.propTypes = {
  onClick: PropTypes.func,
}

NextArrowBtn.defaultProps = {
  disabled: false,
}

const styles = StyleSheet.create({
  nextBtnWrapper: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: colors.white,
  }
})
