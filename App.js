import React from 'react'
import {
  Dimensions,
  View as OriginalView,
  TouchableWithoutFeedback as OriginalTouchableWithoutFeedback,
} from 'react-native'
import { ReactDream } from 'react-dream'
import { withHandlers, withState } from 'recompose'
import { Motion as OriginalMotion, spring } from 'react-motion'
import withChild from './withChild'
import withFunctionAsChild from './withFunctionAsChild'

const windowSize = Dimensions.get('window')

const TouchableWithoutFeedback = ReactDream(OriginalTouchableWithoutFeedback)
const View = ReactDream(OriginalView)
const Motion = ReactDream(OriginalMotion)

const Box = View.style(({ x, y }) => ({
  backgroundColor: 'red',
  width: 100,
  height: 100,
  transform: [{ translate: [x - 50, y - 50] }],
}))

const BigView = View.style(() => ({
  flex: 1,
  backgroundColor: '#ccc',
}))
  .map(withChild(({ x, y }) => ({ x, y })))
  .ap(Box)

const TouchableSurface = TouchableWithoutFeedback.addProps(() => ({
  onPress: event => console.log(event.nativeEvent),
}))
  .map(withChild(({ x, y }) => ({ x, y })))
  .ap(BigView)

const BoxMotion = Motion.style(({ x, y }) => ({
  x: spring(x),
  y: spring(y),
}))
  .map(withFunctionAsChild(({ onPress }) => ({ onPress })))
  .ap(TouchableSurface)

const App = BoxMotion.map(
  withHandlers({
    onPress: props => event => {
      props.updateX(event.nativeEvent.pageX)
      props.updateY(event.nativeEvent.pageY)
    },
  })
)
  .map(withState('x', 'updateX', windowSize.width / 2))
  .map(withState('y', 'updateY', windowSize.height / 2))

export default () => <App.Component />
