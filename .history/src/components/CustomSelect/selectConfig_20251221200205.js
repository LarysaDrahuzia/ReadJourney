export const customStyles = {
  control: provided => ({
    ...provided,
    minHeight: 40,
    height: 40,
    maxWidth: 120,
    width: 120,
    backgroundColor: 'transparent',
    border: '1px solid #3e3e3e',
    boxShadow: 'none',
    borderRadius: 12,
    padding: '0 12px',
    cursor: 'pointer', // щоб видно було, що це клікабельне
    '&:hover': {
      backgroundColor: 'transparent', // не міняємо фон при hover
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
    color: '#f9f9f9',
    fontSize: 12,
    fontWeight: 500,
  }),

  // плейсхолдер
  placeholder: prov => ({
    ...prov,
    color: '#f9f9f9',
    fontSize: 12,
    fontWeight: 500,
  }),

  // прибираємо роздільник
  indicatorSeparator: () => ({ display: 'none' }),

  // робимо більшу зону кліка по стрілці
  dropdownIndicator: (provided, { selectProps }) => ({
    ...provided,
    padding: 8,
    // transition: 'transform 0.2s ease',
    // transform: selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),

  // контейнер опцій
  menu: prov => ({
    ...prov,
    marginTop: 14,
    borderRadius: 12,

    backgroundColor: '#262626',
    border: 'none',
    zIndex: 7,
  }),

  // список опцій із скролом
  menuList: prov => ({
    ...prov,
    maxHeight: 113,
    padding: 0,
  }),

  // самі опції
  option: (prov, { isSelected }) => ({
    ...prov,
    backgroundColor: '#262626', // завжди білий
    color: isSelected
      ? '#f9f9f9' // темніший текст коли вибрано
      : '#686868', // світліший для інших
    fontWeight: 500,
    padding: '14px',
    cursor: 'pointer',
    // '&:hover': {
    //   backgroundColor: '#f7f7f7', // можна трохи підсвітити при hover
    // },
  }),

  // повідомлення “немає опцій”
  noOptionsMessage: prov => ({
    ...prov,
    color: '#686868',
    padding: '14px',
  }),
};
