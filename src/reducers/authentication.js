import { ActionTypes } from "../constants/authentication"

const authenticationToken = localStorage.getItem('authenticationToken')

const defaultState = {
  isSubmitting: false,
  token: authenticationToken ? authenticationToken : null,
  error: null,
}

const validLoginCredentials = {
  email: "admin@example.org",
  password: "password"
}

export default function authenticationReducer(state = defaultState, action) {
  switch (action.type) {

    case ActionTypes.SET_IS_SUBMITTING: {
      const { isSubmitting } = action
      return {
        ...state,
        isSubmitting: isSubmitting,
      }
    }

    case ActionTypes.SUBMIT_LOGIN_FORM: {
      const { email, password } = action

      // -- API CALL WITH RESPONSE --
      const authenticated = email === validLoginCredentials.email && password === validLoginCredentials.password
      const response = {
        statusCode: authenticated ? 200 : 400,
        token: authenticated ? "hashedJWTToken" : null,
        error: authenticated ? null : "Email or password is invalid",
      }
      // -- API CALL WITH RESPONSE END --

      if (authenticated) {
        localStorage.setItem('authenticationToken', response.token)
        window.location.replace("/home")
      }
      
      return {
        ...state,
        isSubmitting: false,
        token: response.token,
        error: response.error,
      }
    }

    case ActionTypes.LOGOUT: {
      localStorage.clear()
      window.location.replace("/")
      return {
        ...state,
        token: null,
      }
    }

    default:
      return state
  }
}
