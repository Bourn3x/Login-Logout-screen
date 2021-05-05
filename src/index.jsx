import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setIsSubmitting, submitLoginForm } from "./actions"
import { makeSelectIsSubmitting } from "./selectors"
import { createSelector } from "reselect"
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"

const stateSelector = createSelector(makeSelectIsSubmitting, (isSubmitting) => ({
  isSubmitting,
}))

const actionDispatch = (dispatch) => ({
  submitLoginForm: (email, password) => dispatch(submitLoginForm(email, password)),
  setIsSubmitting: (isSubmitting) => dispatch(isSubmitting(isSubmitting)),
})

export function LoginPage(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { isSubmitting } = useSelector(stateSelector)

  const { submitLoginForm } = actionDispatch(useDispatch())

  const handleSignInClick = (e) => {
    e.preventDefault()
    if (isSubmitting) {
      return
    }
    setIsSubmitting(true)
    submitLoginForm(email, password)
  }

  return (
    <div className="container">
      <div className="col-11 col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">

              <div className="form-label-group">
                <input id="inputEmail" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email address" />
                <label htmlFor="inputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                <label htmlFor="inputPassword">Password</label>
              </div>

              <button onClick={handleSignInClick} className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
