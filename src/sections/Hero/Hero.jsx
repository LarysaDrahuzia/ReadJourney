import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import css from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={css.hero}>
        <div className={css.content}>
          <h1 className={css.titleHero}>Find your perfect rental car</h1>
          <p className={css.text}>
            Reliable and budget-friendly rentals for any journey
          </p>

          <Button
            className={css.button}
            type="button"
            onClick={() => navigate('/catalog')}
          >
            View Catalog
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
