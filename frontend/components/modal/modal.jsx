import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import FailingStarsContainer from "../failing_stars/failing_stars_container"
import { connect } from 'react-redux';

class Modal extends React.Component {

    render(){
        const { modal, closeModal } = this.props;
        if (!modal) {
            return null;
        };
        let component;
        switch (modal) {
            case 'Failing Stars':
                component = <FailingStarsContainer/>;
                break;
            default:
                return null;
        };

        return(
            <div className='modal-background' onClick={closeModal}>
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    {component}
    
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modal
})


const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)