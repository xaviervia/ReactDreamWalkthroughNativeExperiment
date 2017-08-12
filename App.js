import React from 'react'
import { View, TouchableWithoutFeedback } from './ReactDreamNative'
import withChild from './withChild'

const Box = View.style(({ x, y }) => ({
  backgroundColor: 'red',
  width: 100,
  height: 100,
  transform: [{ translate: [x - 50, y - 50] }],
}))

const BigView = View.style(() => ({
  flex: 1,
  backgroundColor: 'green',
}))
  .map(withChild(({ x, y }) => ({ x, y })))
  .ap(Box)

const App = TouchableWithoutFeedback.addProps(() => ({
  onPress: event => console.log(event.nativeEvent),
}))
  .map(withChild(({ x, y }) => ({ x, y })))
  .ap(BigView)

export default () => <App.Component x={100} y={100} />
