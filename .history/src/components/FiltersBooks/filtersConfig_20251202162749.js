export const filtersForRecommended = [
  { name: 'title', label: 'Book title:', placeholder: 'Enter text' },
  { name: 'author', label: 'The author:', placeholder: 'Enter text' },
];

export const filtersForLibrary = [
  ...filtersForRecommended,
  { name: 'pages', label: 'Number of pages:', placeholder: 0, type: 'number' },
];
