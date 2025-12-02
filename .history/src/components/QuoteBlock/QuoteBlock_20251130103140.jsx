import css from './QuoteBlock.module.css';

const QuoteBlock = () => {
  return (
    <div className={css.quoteBlock}>
      <div className={css.image}>
        <img src="/public/books.jpg" alt="Books" />
      </div>
      <p className={css.text}>
        "Books are <span className={css.part}>windows</span> to the world, and
        reading is a journey into the unknown."
      </p>
    </div>
  );
};

export default QuoteBlock;
