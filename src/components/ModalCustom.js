import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
const ModalWithClose = (props) => {
  const { isOpen, toggleModal, children } = props

  return (
        <Modal isOpen={isOpen} toggle={toggleModal} >
            <div onClick={toggleModal} className='flex mr-10-px' style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: '10px', marginTop: '10px' }} >
            <FontAwesomeIcon icon={faWindowClose} size='2x' />
            </div>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
  )
}

ModalWithClose.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.node
}

export default ModalWithClose
