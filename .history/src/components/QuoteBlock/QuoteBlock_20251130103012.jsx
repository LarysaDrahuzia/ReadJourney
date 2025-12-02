import css from './QuoteBlock.module.css';

const QuoteBlock = () => {
  return (
    <div className={css.quoteBlock}>
      <div className={css.image}>
        <img src="/public/books.jpg" alt="Books" />
      </div>
      <p></p>
    </div>
  );
};

export default QuoteBlock;
