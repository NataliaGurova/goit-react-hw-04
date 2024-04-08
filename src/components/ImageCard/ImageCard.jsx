import css from "./ImageCard.module.css"

const ImageCard = ({ small, regular, alt, onClick }) => {
  console.log(small);
  
  return (
    <div className={css.item}>
      <img src={small} alt={alt} onClick={onClick} />
    </div>
  )
}

export default ImageCard