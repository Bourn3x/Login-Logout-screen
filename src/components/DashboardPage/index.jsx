import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css"

export function DashboardPage(props) {
  const { actions } = props

  const handleSignOutClick = (e) => {
    e.preventDefault()
    actions.logout()
  }

  return (
    <div className="dashboard-body">
    <div className="container my-auto">
      <div className="col-11 col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card-signout">
          <div className="card-body">
            <h5 className="card-title text-center">Your are now signed in!</h5>
            <form className="form-signin">

              <button onClick={handleSignOutClick} className="btn btn-lg btn-primary btn-block text-uppercase">Logout</button>

            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
