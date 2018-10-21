import React from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native'
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Notification extends React.Component {
  state = {
    positionValue: new Animated.Value(60)
  }

  animateNotification = value => {
    const { positionValue } = this.state
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 400,
        velocity: 3,
        tenstion: 3,
        friction: 8,
        easing: Easing.easeOutBack,
      }
    ).start()
  }

  render() {
    const { positionValue } = this.state
    const { textArray, type, onPress, showNotification } = this.props
    showNotification ? this.animateNotification(0) : this.animateNotification(80)
    return (
      <Animated.View style={[{transform: [{ translateY: positionValue }] }, styles.notificationWrapper]}>
        <View style={styles.notificationTextWrapper}>
          {
            type === 'error' && <Text style={styles.notificationTypeTextError}>Error: </Text>
          }
          {
            textArray.map((text, i) => {
              return (
                <Text key={i}>
                  {text}
                </Text>
              )
            })
          }
        </View>
        <View style={styles.notificationDissmissWrapper}>
          <TouchableOpacity
            onPress={onPress}
            style={styles.dismissIcon}
          >
            <Icon name='times' size={20}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

Notification.propTypes = {
  textArray: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  showNotification: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  notificationWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 10,
  },
  notificationTypeTextError: {
    color: colors.darkOrange,
  },
  notificationDissmissWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  }
})
