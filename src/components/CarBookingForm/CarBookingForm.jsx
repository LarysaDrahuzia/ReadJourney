import Button from '../Button/Button.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DateRangeCalendar from '../DateRangeCalendar/DateRangeCalendar.jsx';
import FloatingField from '../FloatingField/FloatingField.jsx';
import css from './CarBookingForm.module.css';

const CarBookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('This field is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('This field is required'),
  comment: Yup.string(),
  rentalDates: Yup.object()
    .shape({ from: Yup.date().nullable(), to: Yup.date().nullable() })
    .test('both-or-none', 'You can select a date range', value => {
      return !value || (value.from && value.to) || (!value.from && !value.to);
    }),
});

const CarBookingForm = () => {
  const handleSubmit = (values, actions) => {
    toast.success('Your booking request has been sent!');
    actions.resetForm();
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              backgroundColor: '#2d6a4f',
              color: '#ffffff',
              fontWeight: '500',
            },
          },
        }}
      />
      <Formik
        initialValues={{
          name: '',
          email: '',
          comment: '',
          rentalDates: { from: null, to: null },
        }}
        validationSchema={CarBookingSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.form} noValidate>
            <h3 className={css.title}>Book your car now</h3>
            <p className={css.text}>
              Stay connected! We are always ready to help you.
            </p>

            <FloatingField name="name" label="Name" />
            <FloatingField name="email" label="Email" type="email" />
            <div className={css.group}>
              <DateRangeCalendar
                value={values.rentalDates}
                onChange={range => setFieldValue('rentalDates', range)}
              />
              <ErrorMessage
                name="rentalDates"
                component="span"
                className={css.error}
              />
            </div>
            <Field
              className={css.textarea}
              placeholder="Comment"
              rows="4"
              name="comment"
              as="textarea"
            />
            <Button className={css.button} type="submit">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CarBookingForm;

// const CarBookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [startDate, setStartDate] = useState(null);
//   const [comment, setComment] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();

//     // if (!name.trim() || !email.trim() || !startDate) {
//     //   toast.error('Please fill in all required fields.');
//     //   return;
//     // }

//     toast.success('Your booking request has been sent!');

//     // скидати всі поля
//     setName('');
//     setEmail('');
//     setStartDate(null);
//     setComment('');
//   };

//   return (
//     <>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           success: {
//             style: {
//               backgroundColor: '#2d6a4f',
//               color: '#ffffff',
//               fontWeight: '500',
//             },
//           },
//         }}
//       />

//       <form className={css.form} onSubmit={handleSubmit}>
//         <h3 className={css.title}>Book your car now</h3>
//         <p className={css.text}>
//           Stay connected! We are always ready to help you.
//         </p>

//         <input
//           className={css.input}
//           type="text"
//           placeholder="Name*"
//           required
//           value={name}
//           onChange={e => setName(e.target.value)}
//         />
//         <input
//           className={css.input}
//           type="email"
//           placeholder="Email*"
//           required
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <DatePicker
//           selected={startDate}
//           onChange={date => setStartDate(date)}
//           placeholderText="Booking date"
//           className={css.input}
//           calendarClassName={css.calendar}
//           dateFormat="dd MMMM yyyy"
//           minDate={new Date()}
//         />
//         <textarea
//           className={css.textarea}
//           placeholder="Comment"
//           rows="4"
//           value={comment}
//           onChange={e => setComment(e.target.value)}
//         />
//         <Button className={css.button} type="submit">
//           Send
//         </Button>
//       </form>
//     </>
//   );
// };

// export default CarBookingForm;
