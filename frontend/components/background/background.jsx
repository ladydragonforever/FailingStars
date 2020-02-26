import React from "react"

class Background extends React.Component{

    render() {
        
        return(
           
            <div>
                <button  onClick={() => this.props.openModal('Failing Stars')}>
                    {console.log(this.props)}
                    FailingStars
                </button>
            </div>
        )
    }
}

export default Background;