import Select from 'react-select';
import { customStyles } from './selectConfig.jsx';

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  isClearable = true,
  isSearchable = false,
  classNamePrefix = 'custom-select',
}) => (
  <Select
    options={options}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    classNamePrefix={classNamePrefix}
    styles={customStyles}
    isClearable={isClearable}
    isSearchable={isSearchable}
  />
);

export default CustomSelect;
