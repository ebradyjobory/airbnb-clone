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
    const { disabled } = this.props
    const opacity = disabled ? 0.4 : 1
    return (
      <TouchableHighlight style={[ styles.nextBtnWrapper, {opacity} ]} disabled={disabled} >
        <Icon name='angle-right' color={colors.green01} size={35}/>
      </TouchableHighlight>
    )
  }
}

NextArrowBtn.defaultProps = {
  disabled: false,
}

const styles = StyleSheet.create({
  nextBtnWrapper: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: colors.white,
  }
})
