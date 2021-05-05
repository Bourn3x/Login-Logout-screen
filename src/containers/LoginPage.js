import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setIsSubmitting, submitLoginForm } from '../actions/authentication'
import { makeSelectIsSubmitting, makeSelectError } from '../selectors/authentication'
import { LoginPage } from '../components/LoginPage'

const mapStateToProps = state => ({
  isSubmitting: makeSelectIsSubmitting(state),
  error: makeSelectError(state),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setIsSubmitting,
    submitLoginForm,
  }, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
