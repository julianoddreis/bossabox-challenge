import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export default ({ isOpen, children }) => {
  const docRef = document.getElementById('root')

  if (isOpen) {
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    document.querySelector('body').style.overflow = 'auto'
  }

  return ReactDOM.createPortal(
    <ModalContainer isOpen={isOpen}>
      <Modal>{children}</Modal>
    </ModalContainer>,
    docRef
  )
}

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`

const Modal = styled.div`
  width: 570;
  height: auto;
  padding: 80px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
`
