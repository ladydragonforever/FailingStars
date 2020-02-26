import {connect} from "react-redux";
import {openModal} from "../../actions/modal_actions"
import Background from "./background.jsx";

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal("Failing Stars"))
})

export default connect(null, mapDispatchToProps)(Background)