import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.jsx';
import Select from 'react-select';
import { setFilters } from '../../redux/filters/slice.js';
import {
  selectFilterBrands,
  selectFilterBrand,
  selectFilterPrice,
  selectMileageFrom,
  selectMileageTo,
} from '../../redux/filters/selectors.js';

import { customStyles } from '../CustomSelect/selectConfig.js';
import css from './CarsFilters.module.css';

const CarsFilters = ({ onFilter }) => {
  const dispatch = useDispatch();

  const brands = useSelector(selectFilterBrands) || [];
  const brand = useSelector(selectFilterBrand) || '';
  const price = useSelector(selectFilterPrice) ?? '';
  const mileageFrom = useSelector(selectMileageFrom) ?? '';
  const mileageTo = useSelector(selectMileageTo) ?? '';

  const handleChange = (field, value) => {
    dispatch(setFilters({ [field]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFilter?.({
      page: 1,
      brand,
      rentalPrice: price,
      minMileage: mileageFrom,
      maxMileage: mileageTo,
    });
  };

  // Форматуємо опції для react-select
  const brandOptions = brands.map(b => ({ label: b, value: b }));
  const priceOptions = Array.from({ length: 20 }, (_, i) => 30 + i * 10).map(
    p => ({ label: `${p}`, value: p })
  );

  return (
    <form className={css.filtersForm} onSubmit={handleSubmit}>
      {/* Brand */}
      <div className={css.field}>
        <label className={css.labelBrand}>Car brand</label>
        <Select
          placeholder="Choose a brand"
          options={brandOptions}
          value={brand ? { label: brand, value: brand } : null}
          onChange={opt => handleChange('brand', opt?.value || '')}
          styles={customStyles}
          classNamePrefix="custom-select"
          isClearable
          isSearchable={false}
        />
      </div>
      {/* Price */}
      <div className={css.field}>
        <label className={css.labelPrice}>Price / 1 hour</label>
        <Select
          placeholder="Choose a price"
          options={priceOptions}
          value={price ? { label: `To $${price}`, value: price } : null}
          onChange={opt => handleChange('rentalPrice', opt?.value || '')}
          styles={customStyles}
          classNamePrefix="custom-select"
          isClearable
          isSearchable={false}
        />
      </div>
      {/* Mileage From/To */}
      <label className={css.labelMileage}>
        Car mileage / km
        <div className={css.mileageWrapper}>
          <div className={css.fakeInput}>
            <span className={css.staticText}>From</span>
            <input
              type="text"
              inputMode="numeric"
              className={css.input}
              value={mileageFrom?.toLocaleString('en-US') || ''}
              onChange={e => {
                const raw = e.target.value.replace(/,/g, '');
                if (raw === '') {
                  handleChange('minMileage', ''); // очищено
                } else if (/^\d+$/.test(raw)) {
                  handleChange('minMileage', Number(raw));
                }
              }}
            />
          </div>
          <div className={css.fakeInput}>
            <span className={css.staticText}>To</span>
            <input
              type="text"
              inputMode="numeric"
              className={css.input}
              value={mileageTo?.toLocaleString('en-US') || ''}
              onChange={e => {
                const raw = e.target.value.replace(/,/g, '');
                if (raw === '') {
                  handleChange('maxMileage', ''); // очищено
                } else if (/^\d+$/.test(raw)) {
                  handleChange('maxMileage', Number(raw));
                }
              }}
            />
          </div>
        </div>
      </label>
      <Button type="submit" className={css.searchBtn}>
        Search
      </Button>
    </form>
  );
};

export default CarsFilters;
