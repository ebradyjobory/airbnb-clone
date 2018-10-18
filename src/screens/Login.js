import React from 'react'
import colors from '../styles/colors'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native'

import Button from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Login extends React.Component {
  onFaceBookBtnPress = () => {
    alert('facebook btn clicked')
  }
  onMoreOptionPress = () => {
    alert('More options pressed')
  }
  render () {
    return (
      <View style={ styles.wrapper }>
        <View style={ styles.welcomeWrapper }>
          <Image style={ styles.logo } source={ require('../img/airbnb-logo.png') } />
          <Text style={ styles.welcomeText }>
            Welcome to Airbnb.
          </Text>
          <View style={ styles.btns }>
            <Button
              text='continue with Facebook'
              textColor={ colors.green01 }
              backgroundColor={ colors.white }
              handleOnPress={this.onFaceBookBtnPress}
              icon={<Icon name='facebook' size={25} style={styles.facebookBtnStyle}/>}
            />
            <Button
              text='create an account'
              textColor={ colors.white }
              backgroundColor={ colors.green01 }
              handleOnPress={() => {}}
            />
            <TouchableHighlight
              style={styles.moreOptionWrapper}
              onPress={this.onMoreOptionPress}
            >
              <Text style={styles.moreOptionText}>More options</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.green01,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
  },
  welcomeWrapper: {
    flex: 1,
    marginTop: 30,
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 40,
    color: colors.white,
    marginBottom: 40,
    fontWeight: '300',
  },
  btns: {
    flex: 1
  },
  facebookBtnStyle: {
    color: colors.green01,
    position: 'relative',
    left: 20
  },
  moreOptionWrapper: {
    marginLeft: 20
  },
  moreOptionText: {
    color: colors.white
  }
})