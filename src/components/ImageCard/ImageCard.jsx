import css from "./ImageCard.module.css"

const ImageCard = ({ small, regular, alt }) => {
  console.log(small);
  
  return (
    <div className={css.item}>
      <img src={small} alt={alt} />
    </div>
  )
}

export default ImageCard