import css from './QuoteBlock.module.css';

const QuoteBlock = () => {
  return (
    <div className={css.quoteBlock}>
      <div>
        <img src="/public/books.jpg" alt="Books" />
      </div>
    </div>
  );
};

export default QuoteBlock;
