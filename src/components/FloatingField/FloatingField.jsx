import { Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import css from './FloatingField.module.css'; // якщо стилі потрібні

const FloatingField = ({ name, type = 'text', label }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={css.group}>
      <Field name={name}>
        {({ field }) => (
          <input
            {...field}
            type={type}
            className={css.input}
            placeholder={isFocused ? label : `${label}*`}
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={e => {
              setIsFocused(false);
              field.onBlur(e);
            }}
          />
        )}
      </Field>
      <ErrorMessage name={name} component="span" className={css.error} />
    </div>
  );
};

export default FloatingField;
