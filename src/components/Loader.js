import React from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  Image,
  Text,
  View,
  Modal,
} from 'react-native'
import colors from '../styles/colors';

export default class Loader extends React.Component {
  render() {
    const { animationType, visible, text } = this.props
    return (
      <Modal
        animationType={animationType}
        visible={visible}
        transparent
      >
        <View style={styles.loaderWrapper}>
          <Image source={require('../img/whiteLoader.gif')}/>
          { text && <Text style={styles.loaderText}>{text}</Text> }
        </View>
      </Modal>
    )
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string
}


const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    color: colors.white,
  }
})