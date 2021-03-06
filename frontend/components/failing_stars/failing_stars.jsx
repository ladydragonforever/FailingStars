import React from 'react';
import {capitalize} from '../../util/helper_functions'

const FailingStars = ({ stars, closeModal, fetchStar, sort }) =>{
    return(
        <div className='content-container'>
            <h1>Failing Stars Modal</h1>
            <p>The following stars have been returned from the <span>/failing_stars</span> endpoint:</p> 
            <p className="stars-text">Stars:</p>
            <ul className="stars-list">
                {
                    stars.map(
                                (star,idx) =>
                                <li key={idx} className="stars-list-item">
                                        {capitalize(star)}
                                </li>
                            )

                }
            </ul>    
            <div className="button-container">
                <button className="button-close" onClick={closeModal}>CLOSE</button>
                <button className="button-add" onClick={fetchStar}>ADD STAR</button>
                <button onClick={sort}>sort</button>
            </div>

        </div>
    )

}

export default FailingStars;