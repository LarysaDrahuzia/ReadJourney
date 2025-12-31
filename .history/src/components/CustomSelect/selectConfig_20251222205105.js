export const customStyles = {
  control: provided => ({
    ...provided,

    height: 40,

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
  dropdownIndicator: provided => ({
    ...provided,
    padding: 4,
  }),

  // контейнер опцій
  menu: prov => ({
    ...prov,
    marginTop: 4,
    borderRadius: 12,

    backgroundColor: '#262626',
    border: 'none',
    zIndex: 10,
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
    backgroundColor: '#262626',
    color: isSelected ? '#f9f9f9' : '#686868',
    fontSize: 12,
    fontWeight: 500,
    padding: '7px',
    cursor: 'pointer',
  }),

  // повідомлення “немає опцій”
  noOptionsMessage: prov => ({
    ...prov,
    color: '#686868',
    padding: '14px',
  }),
};
