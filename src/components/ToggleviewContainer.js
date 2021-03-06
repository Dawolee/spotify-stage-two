import { connect } from 'react-redux'
import Toggleview from './Toggleview'
import { updateView } from '../store/view'

const mapState = state => {
  return {
    currentView: state.view
  }
}

const mapDispatch = dispatch => {
  return {
    viewChange: view => {
      dispatch(updateView(view))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Toggleview)
