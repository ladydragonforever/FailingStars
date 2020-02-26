import React from 'react';

class FailingStars extends React.Component {


    render() {

        return(
            <div>
                <h1>Failing Stars Modal</h1>
                <p>The following stars have been returned from the /failing_stars endpoint</p>    
            </div>
        )

    }
}

export default FailingStars;