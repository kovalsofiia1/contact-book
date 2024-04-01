import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";

export const selectContactsInfo = (state) => state.contacts;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectNameFilter, selectContacts],
    (filter, contacts ) => {
    return contacts.filter((contact) => { return contact.name.toLowerCase().includes(filter.toLowerCase()) });
})
