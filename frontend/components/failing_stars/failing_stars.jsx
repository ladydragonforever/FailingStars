import React from 'react';

class FailingStars extends React.Component {

    render() {
        const {stars, closeModal, fetchStar} = this.props;
        return(
            <div className='content-container'>
                <h1>Failing Stars Modal</h1>
                <p>The following stars have been returned from the /failing_stars endpoint</p> 
                <p>Stars:</p>
                    {
                        stars.map((star,idx) => <li key={idx}>{star}</li>)
                    }
                <div>
                    <button onClick={closeModal}>CLOSE</button>
                    <button onClick={fetchStar}>ADD STAR</button>
                </div>

            </div>
        )

    }
}

export default FailingStars;