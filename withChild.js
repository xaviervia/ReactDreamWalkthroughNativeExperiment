import React from 'react'

export default getChildProps => Parent => Child => props =>
  <Parent {...props}>
    <Child {...getChildProps(props)} />
  </Parent>
