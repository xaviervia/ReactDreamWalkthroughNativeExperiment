import React from 'react'

export default getChildProps => Parent => Child => props =>
  <Parent {...props}>
    {extraProps => <Child {...getChildProps(props)} {...extraProps} />}
  </Parent>
