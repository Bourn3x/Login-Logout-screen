import { ActionTypes } from "../constants/authentication"

export const setIsSubmitting = (isSubmitting) => ({
  type: ActionTypes.SET_IS_SUBMITTING,
  isSubmitting,
})

export const submitLoginForm = (email, password) => ({
  type: ActionTypes.SUBMIT_LOGIN_FORM,
  email,
  password,
})

export const logout = () => ({
  type: ActionTypes.LOGOUT,
})
