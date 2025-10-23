import { RingLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RingLoader color="#3470ff" size={80} />
    </div>
  );
};

export default Loader;
