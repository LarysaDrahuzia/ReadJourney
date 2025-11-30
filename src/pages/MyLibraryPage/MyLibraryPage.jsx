import FiltersBooks from '../../components/FiltersBooks/FiltersBooks.jsx';
import { filtersForLibrary } from '../../components/FiltersBooks/filtersConfig.js';

const MyLibraryPage = () => {
  return (
    <>
      <FiltersBooks fields={filtersForLibrary} />
    </>
  );
};

export default MyLibraryPage;
