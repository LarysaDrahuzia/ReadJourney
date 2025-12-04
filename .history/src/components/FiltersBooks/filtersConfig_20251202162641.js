export const filtersForRecommended = [
  { name: 'title', label: 'Book title:', placeholder: 'Enter text' },
  { name: 'author', label: 'The author:', placeholder: 'Enter text' },
];

export const filtersForLibrary = [
  ...filtersForRecommended,
  { name: 'pages', label: 'Search by pages', type: 'number' },
];
