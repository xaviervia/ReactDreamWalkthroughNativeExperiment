import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native'
import { Motion, spring } from 'react-motion'

export default class App extends React.Component {
  constructor() {
    super()

    const windowSize = Dimensions.get('window')

    this.state = {
      x: windowSize.width / 2,
      y: windowSize.height / 2,
      windowSize,
    }

    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(event) {
    console.log(event.nativeEvent)
    this.setState({
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY,
    })
  }

  render() {
    return (
      <Motion style={{ x: spring(this.state.x), y: spring(this.state.y) }}>
        {({ x, y }) =>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
              }}
            >
              <View
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  height: 100,
                  transform: [{ translate: [x - 50, y - 50] }],
                }}
              />
            </View>
          </TouchableWithoutFeedback>}
      </Motion>
    )
  }
}
