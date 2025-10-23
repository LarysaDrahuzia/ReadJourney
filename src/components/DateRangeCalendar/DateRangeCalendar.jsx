import { useState, useRef, useEffect, useMemo } from 'react';
import ReactCalendar from 'react-calendar';
import { format, isValid } from 'date-fns';
// import 'react-calendar/dist/Calendar.css';
import css from './DateRangeCalendar.module.css';

// Хелпер: привести значення до Date
function toDate(d) {
  const dt = d instanceof Date ? d : d ? new Date(d) : null;
  return dt && isValid(dt) ? dt : null;
}

const DateRangeCalendar = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // value у формі: { from, to }
  const valueForCalendar = useMemo(() => {
    const a = toDate(value?.from);
    const b = toDate(value?.to);
    return a && b ? [a, b] : a ? a : b ? b : null;
  }, [value]);

  // Форматований текст у полі вводу
  const formattedRange = useMemo(() => {
    if (
      Array.isArray(valueForCalendar) &&
      valueForCalendar[0] &&
      valueForCalendar[1]
    ) {
      return `${format(valueForCalendar[0], 'dd MMM yyyy')} - ${format(
        valueForCalendar[1],
        'dd MMM yyyy'
      )}`;
    }
    return '';
  }, [valueForCalendar]);

  // При виборі дат
  const handleSelect = nextVal => {
    if (Array.isArray(nextVal)) {
      onChange({ from: nextVal[0] || null, to: nextVal[1] || null });
      if (nextVal[0] && nextVal[1]) setOpen(false);
    } else {
      onChange({ from: nextVal || null, to: null });
    }
  };

  const handleClear = e => {
    e?.stopPropagation?.();
    onChange({ from: null, to: null });
    setOpen(false);
  };

  // Закриття по кліку поза календарем
  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={css.wrapper} ref={ref}>
      <input
        type="text"
        readOnly
        className={css.input}
        placeholder="Booking date"
        value={formattedRange}
        onClick={() => setOpen(o => !o)}
      />
      {formattedRange && (
        <button
          type="button"
          className={css.clearBtn}
          onClick={handleClear}
          aria-label="Clear date range"
        >
          ×
        </button>
      )}

      {open && (
        <div className={css.calendarWrapper}>
          <ReactCalendar
            onChange={handleSelect}
            value={valueForCalendar}
            selectRange
            minDate={new Date()}
            locale="en-GB"
            className={css.rdp}
            prevLabel={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#3740ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            nextLabel={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#3740ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            prev2Label={null} // сховати «подвійні» стрілки (рік назад/вперед)
            next2Label={null}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangeCalendar;
