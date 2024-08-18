import React from 'react'

const PracticeAreas:React.FC = () => {
  return (
    <>
    <div className='py-5'>
            <div className='about-us-picture'>
                <h3 className='text-center About-us-h3 text-white'>Practice Areas – Modern 3 Columns</h3>
            </div>
            <div className="container">
                <div className="row py-5 ">
                    <div className="col-12 col-md-4 col-lg-4 my-3 d-flex flex-column ">
                    <div className="practice-card1 text-center">
                            <h4 className='text-white'><b>Bank And Financial</b></h4>
                        </div>
                        <div className="practice-card2 text-center my-5">
                            <h4 className='text-white'><b>Car Accident</b></h4>
                        </div>
                        <div className="practice-card3 text-center">
                            <h4 className='text-white'><b>Personal Injury</b></h4>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 my-3">
                    <div className="practice-card4 text-center">
                            <h4 className='text-white'><b>Family Law</b></h4>
                        </div>
                        <div className="practice-card5 my-5 text-center">
                            <h4 className='text-white'><b>Capital Market</b></h4>
                        </div>
                        <div className="practice-card6 text-center">
                            <h4 className='text-white'><b>Employment Law</b></h4>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 my-3">
                    <div className="practice-card7 text-center">
                            <h4 className='text-white'><b>Corporate</b></h4>
                        </div>
                        <div className="practice-card8 text-center my-5">
                            <h4 className='text-white'><b>Dispute Resolution</b></h4>
                        </div>
                        <div className="practice-card9 text-center">
                            <h4 className='text-white'><b>Guardian Ship</b></h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}

export default PracticeAreas