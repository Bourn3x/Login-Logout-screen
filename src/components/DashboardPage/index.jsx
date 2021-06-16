import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import styles from "./style.module.css"

export function DashboardPage(props) {
  const { actions } = props

  const handleSignOutClick = (e) => {
    e.preventDefault()
    actions.logout()
  }

  return (
    <div className={`${styles["dashboard-body"]}`}>
      <div className={`container my-auto`}>
        <div className={`col-11 col-sm-9 col-md-7 col-lg-5 mx-auto`}>
          <div className={`${styles["card-signout"]}`}>
            <div className={`${styles["card-body"]}`}>
              <h5 className={`${styles["card-title"]} text-center`}>Your are now signed in!</h5>
              <button onClick={handleSignOutClick} className={`btn btn-lg btn-primary btn-block text-uppercase`}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
