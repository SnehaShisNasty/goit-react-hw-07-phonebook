export const getAllContacts = store => store.contacts;
export const getFiltered = store => {
  const { contacts, filter } = store;
  const { items, isLoading, error } = contacts;
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredBooks = items.filter(({ name, phone }) => {
    const normalizedTitle = name.toLowerCase();
    const normalizedAuthor = phone.toLowerCase();

    return (
      normalizedAuthor.includes(normalizedFilter) ||
      normalizedTitle.includes(normalizedFilter)
    );
  });

  return {
    items: filteredBooks,
    isLoading,
    error,
  };
};
export const getFilter = store => store.filter;
