/* eslint-disable react/prop-types */
import React from 'react'

const Uppercase = (props) => {

  const {component: BlueText, click, attr, children } = props

  return (
    <>
      <button onClick={click}>
        <BlueText>
        content : {children} {attr.name}
        </BlueText>
      </button>
    </>
  )
}

export default Uppercase
