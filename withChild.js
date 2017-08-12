export default getChildProps => Parent => Child => props =>
  <Parent {...props}>
    <Child {...getChildProps(props)} />
  </Parent>
