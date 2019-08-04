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
      <Modal isOpen={isOpen}>{children}</Modal>
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
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`

const Modal = styled.div`
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  width: 570px;
  height: auto;
  padding: 40px 20px;
  border-radius: 5px;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(100%)')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
`
