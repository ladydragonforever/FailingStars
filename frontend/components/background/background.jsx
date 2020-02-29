import React from "react";
import Modal from "../modal/modal"
import FailingStarsContainer from "../failing_stars/failing_stars_container"

const Background = ({openModal}) => {
        return(
           
            <div>
                <button  className="button-background" onClick={() => openModal("Failing stars")}>
                    CLICK HERE
                   
                </button>
                <Modal> <FailingStarsContainer /></Modal>
            </div>
        )
}

export default Background;