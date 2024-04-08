import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ images, isOpen, onRequestClose }) => {
 
console.log(images);

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

//  style={{ display: visible ? "block" : "none"}}
// const ComponentA = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button onClick={openModal}>Open modal</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

ImageGallery передаємо на зображення
onClick={() => onClick(image.urls.regular)}

App
      <ImageModal
        images={selectedImage} 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />