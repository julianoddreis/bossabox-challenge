import React, { useState } from 'react'
import { BannerNotification } from '../components'

const customStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  zIndex: 999
}

export default (WrappedComponent) => {
  return (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [notification, setNotification] = useState(null)

    const closeNotification = () => {
      setIsOpen(false)
    }

    const showNotification = (title, description, type) => {
      setNotification({ title, description, type })
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false)
        setNotification(null)
      }, 5000)
    }

    return (
      <>
        {isOpen && notification && <BannerNotification notification={notification} close={closeNotification} style={customStyle} />}
        <WrappedComponent {...props} notification={showNotification} />
      </>
    )
  }
}
