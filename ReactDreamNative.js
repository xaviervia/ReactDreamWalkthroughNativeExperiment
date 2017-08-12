import React from 'react'
import {
  View as OriginalView,
  TouchableWithoutFeedback as OriginalTouchableWithoutFeedback,
} from 'react-native'
import { ReactDream } from 'react-dream'

export const View = ReactDream(OriginalView)

export const TouchableWithoutFeedback = ReactDream(
  OriginalTouchableWithoutFeedback
)
