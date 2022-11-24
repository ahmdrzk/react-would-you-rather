import { createSelector } from "reselect";

export const selectUsers = (state) => state.users.entities;

export const selectIsLoadingUsers = (state) => state.users.isLoading;

export const selectUsersSortedByScore = createSelector(
  (state) => state.users.entities,
  (users) =>
    Object.values(users).sort(
      (a, b) =>
        b.questions.length + Object.keys(b.answers).length - (a.questions.length + Object.keys(a.answers).length)
    )
);
