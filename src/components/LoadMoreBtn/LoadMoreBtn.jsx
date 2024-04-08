import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick, children }) => {
  // console.log(onClick);
  
  return (
    <button className={css.btn} onClick={onClick} type="button">
      {children}
    </button>
  );
};

// export default LoadMoreBtn;