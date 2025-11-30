import BookCard from '../BookCard/BookCard.jsx';
import css from './BooksList.module.css';

const BooksList = ({ books=[] }) => {
  return (
    <div className={css.carsWrap}>
      <ul className={css.list}>
        {cars.map(car => (
          <li key={car.id}>
            <CarCard {...car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
import css from './TeachersList.module.css';

const TeachersList = ({ teachers = [] }) => {
  return (
    <div className={css.teachersWrap}>
      <ul className={css.list}>
        {teachers.map(teacher => (
          <li key={teacher._id || teacher.id}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;