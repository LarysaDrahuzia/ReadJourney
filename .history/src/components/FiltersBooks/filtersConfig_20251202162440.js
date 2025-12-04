export const filtersForRecommended = [
  { name: 'title', placeholder: 'Search by title' },
  { name: 'author', placeholder: 'Search by author' },
];

export const filtersForLibrary = [
  ...filtersForRecommended,
  { name: 'pages', placeholder: 'Search by pages', type: 'number' },
];
