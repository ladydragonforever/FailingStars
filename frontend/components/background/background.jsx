import React from "react"

class Background extends React.Component{

    render() {
        
        return(
           
            <div>
                <button  className="button-background" onClick={() => this.props.openModal('Failing Stars')}>
                    CLICK HERE
                </button>
            </div>
        )
    }
}

export default Background;