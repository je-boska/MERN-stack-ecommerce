import React from 'react'
import { Alert } from 'react-bootstrap'

// the contents of this Alert is supposed to be {children}, but this causes "Objects are not valid as React child" error
const Message = (variant, children) => {
  return (
    <Alert variant={variant}>
      This is a placeholder error message.
      {/* children */}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
