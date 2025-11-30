import { RingLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RingLoader color="#f9f9f9" size={80} />
    </div>
  );
};

export default Loader;
