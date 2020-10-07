import React from 'react'
import { Alert } from 'react-bootstrap'

// this currently causes "Objects are not valid as React child" error
const Message = (variant, children) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'danger',
}

export default Message
