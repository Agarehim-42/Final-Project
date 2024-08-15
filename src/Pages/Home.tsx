import React from 'react'
import Attorneys from '../components/Attorneys'
import Bookinfo from '../components/Bookinfo'
import Client from '../components/Client'
import Consult from '../components/Consult'
import Consult2 from '../components/Consult2'
import Contactemail from '../components/Contactemail'
import Lawmen from '../components/Lawmen'
import Testimonial from '../components/Testimonial'
import Welcomes from '../components/Welcomes'


const Home: React.FC = () => {
    return (
        <div>
            <Welcomes />
            <Bookinfo />
            <Lawmen />
            <Consult />
            <Consult2 />
            <Testimonial />
            <Attorneys />
            <Contactemail />
            <Client />
        </div>
    )
}

export default Home