import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import MyBook from '../../components/MyBook/MyBook.jsx';
// import css from './ReadingPage.module.css';

const ReadingPage = () => {
  return (
    <div className={`container ${css.pageWrap}`}>
      <Dashboard />
      <MyBook />
    </div>
  );
};

export default ReadingPage;
