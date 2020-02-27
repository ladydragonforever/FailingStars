import React from "react"

const Background = ({openModal}) => {
        return(
           
            <div>
                <button  className="button-background" onClick={() => openModal('Failing Stars')}>
                    CLICK HERE
                </button>
            </div>
        )
}

export default Background;