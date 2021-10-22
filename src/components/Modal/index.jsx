import React from 'react'
import Modal from 'react-modal'
import { Images } from '../../services/datas'
import IconPrevious from '../../assets/images/icon-previous.svg'
import IconNext from '../../assets/images/icon-next.svg'
import { useCounter } from '../../Hook/useCounter'

export const ModalWrapper = ({ modalIsOpen, handleCloseModal }) => {
  const { imageMain, setImageMain } = useCounter()
  const ImagesModalSelections = Images.map(img => img.img)

  const handlePreviousImageModal = () => {
    let index = ImagesModalSelections.indexOf(imageMain)
    setImageMain(ImagesModalSelections[index - 1 < 0 ? 0 : index - 1])
  }
  const handleNextImageModal = () => {
    let index = ImagesModalSelections.indexOf(imageMain)
    setImageMain(ImagesModalSelections[index + 1 > 3 ? 3 : index + 1])
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="iconPrevious" onClick={handlePreviousImageModal}>
        <img src={IconPrevious} alt="" />
      </div>

      <div className="react-modal-image">
        <img src={imageMain} alt="" />
      </div>

      <div className="iconNext" onClick={handleNextImageModal}>
        <img src={IconNext} alt="" />
      </div>
    </Modal>
  )
}
