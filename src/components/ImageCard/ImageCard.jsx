
const ImageCard = ({ small, regular, alt }) => {
  console.log(small);
  
  return (
    <div>
  <img src={small} alt={alt} />
</div>
  )
}

export default ImageCard