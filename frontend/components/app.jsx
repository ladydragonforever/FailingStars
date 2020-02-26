import React from 'react';
import Modal from './modal/modal'
import FailingStarsContainer from './failing_stars/failing_stars_container';
import BackgroundContainer from "../components/background/background_container"

const App = () => (
    <div>
        <BackgroundContainer/>
        <Modal/>
    </div>
)

export default App;