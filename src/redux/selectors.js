import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filters/selectors";
import { selectContacts } from "./contacts/selectors";

export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectContacts],
    (filter, contacts ) => {
    return contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase()) });
})

