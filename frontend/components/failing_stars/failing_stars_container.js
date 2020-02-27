import {connect} from "react-redux";
import {closeModal} from "../../actions/modal_actions";
import {fetchStar} from "../../actions/failing_stars_actions"
import FailingStars from "../failing_stars/failing_stars"

const mapStateToProps = state => {
    console.log(state.failingStars.stars);
    return({
        stars: state.failingStars.stars
})};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchStar: () =>dispatch(fetchStar())
});

export default connect(mapStateToProps, mapDispatchToProps)(FailingStars);
