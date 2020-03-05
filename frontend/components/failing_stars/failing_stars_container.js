import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import {fetchStar, sort} from "../../actions/failing_stars_actions"
import FailingStars from "../failing_stars/failing_stars"

const mapStateToProps = state => ({
    stars: state.failingStars.stars
});
   
const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchStar: () =>dispatch(fetchStar()),
    sort: ()=>dispatch(sort()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FailingStars);
