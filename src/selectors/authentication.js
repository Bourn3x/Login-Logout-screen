import { createSelector } from "reselect"

const authenticationState = (state) => state.authentication

export const makeSelectIsSubmitting = createSelector(
  authenticationState,
  (authentication) => authentication.isSubmitting
)

export const makeSelectError = createSelector(
  authenticationState,
  (authentication) => authentication.error
)
