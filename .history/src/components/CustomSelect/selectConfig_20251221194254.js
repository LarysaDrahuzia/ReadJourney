export const customStyles = {
  control: provided => ({
    ...provided,
    minHeight: 44,
    height: 44,
    maxWidth: 204,
    width: 204,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    borderRadius: 12,
    padding: '0 16px',
    cursor: 'pointer', // щоб видно було, що це клікабельне
    '&:hover': {
      backgroundColor: '#f7f7f7', // не міняємо фон при hover
    },
  }),

  // просто центруємо вміст
  valueContainer: prov => ({
    ...prov,
    padding: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  }),

  // текст обраного значення
  singleValue: prov => ({
    ...prov,
    color: '#101828',
    fontSize: 16,
    fontWeight: 500,
  }),

  // плейсхолдер
  placeholder: prov => ({
    ...prov,
    color: '#101828',
    fontSize: 16,
    fontWeight: 500,
  }),

  // прибираємо роздільник
  indicatorSeparator: () => ({ display: 'none' }),

  // робимо більшу зону кліка по стрілці
  dropdownIndicator: (provided, { selectProps }) => ({
    ...provided,
    padding: 8,
    transition: 'transform 0.2s ease',
    transform: selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),

  // контейнер опцій
  menu: prov => ({
    ...prov,
    marginTop: 4,
    borderRadius: 12,
    boxShadow: '0 4px 36px rgba(0,0,0,0.02)',
    backgroundColor: '#ffffff',
    border: '1px solid #f7f7f7',
    zIndex: 10,
  }),

  // список опцій із скролом
  menuList: prov => ({
    ...prov,
    maxHeight: 272,
    padding: 0,
  }),

  // самі опції
  option: (prov, { isSelected }) => ({
    ...prov,
    backgroundColor: '#ffffff', // завжди білий
    color: isSelected
      ? '#101828' // темніший текст коли вибрано
      : '#8d929a', // світліший для інших
    fontWeight: isSelected ? 500 : 400, // жирніше для вибраної
    padding: '14px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f7f7f7', // можна трохи підсвітити при hover
    },
  }),

  // повідомлення “немає опцій”
  noOptionsMessage: prov => ({
    ...prov,
    color: '#8d929a',
    padding: '14px 16px',
  }),
};
