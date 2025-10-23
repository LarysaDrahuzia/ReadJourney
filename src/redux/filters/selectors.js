export const selectFilters = state => state.filters;
export const selectFilterBrand = state => state.filters.brand;
export const selectFilterBrands = state => state.filters.brands;
export const selectFilterPrice = state => state.filters.rentalPrice;
export const selectMileageFrom = state => state.filters.minMileage;
export const selectMileageTo = state => state.filters.maxMileage;
export const selectFiltersLoading = state => state.filters.isLoading;
