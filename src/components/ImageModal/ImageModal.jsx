
import Modal from 'react-modal';

const customStyles = {

  overlay: {
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.7)",

  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    // overflow: "auto",
    overflow: "hidden",
    objectFit: "cover",
    border: "none",
    borderRadius: "0",
    padding: "0",
    margin: "20px",
    
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ images, isOpen, onRequestClose }) => {

    return (
		<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <img src={images} alt="Selected Image" />
    </Modal>
  )
}
