import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/authentication'
import { DashboardPage } from '../components/DashboardPage'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logout,
  }, dispatch),
})

export default connect(
  null,
  mapDispatchToProps,
)(DashboardPage)
