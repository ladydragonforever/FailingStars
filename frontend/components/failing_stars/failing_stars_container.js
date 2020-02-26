import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import FailingStars from "../failing_stars/failing_stars"

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FailingStars);
