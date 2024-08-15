import React from 'react'

interface attorneyProps {
    attorneyTitle: string;
    attorneyImage: string;
    attorneyBody: string;
    attorneyHead: string;
}

const Attorney: React.FC<attorneyProps> = ({ attorneyTitle, attorneyImage, attorneyBody, attorneyHead }) => {
    return (
        <div className='attorney-card'>
            <div className="container">
                <img src={attorneyImage} className="card-img-top attorneyimg" alt="..." />
                <div className="card-body text-center" >
                    <h2>{attorneyHead}</h2>
                    <p className="card-title py-3">{attorneyTitle}</p>
                    <p className="card-text py-3">{attorneyBody}</p>

                </div>
            </div>

        </div>
    )
}

export default Attorney