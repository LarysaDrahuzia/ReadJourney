export const normalizeUser = user => ({
  name: user?.name ?? null,
  email: user?.email ?? null,
  library: Array.isArray(user?.library)
    ? user.library.map(item => (typeof item === 'string' ? item : item._id))
    : [],
});
