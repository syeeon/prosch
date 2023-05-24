import React from 'react';
import { NavLink } from "react-router-dom";

import 'styles/page/model.css'

function ModelNav(){
    return(
        <section className='container left_p'>
            <div className='box_wrap'>
                <h1 className='hide'>Model</h1>
                <ul className='model_nav'>
                    <NavLink to="/model_718">
                        <li className='btn'>718</li>
                    </NavLink>
                    <NavLink to="/model_911">
                        <li className='btn'>911</li>
                    </NavLink>
                    <NavLink to="/model_taycan">
                        <li className='btn'>Taycan</li>
                    </NavLink>
                    <NavLink to="/model_panamera">
                        <li className='btn'>Panamera</li>
                    </NavLink>
                    <NavLink to="/model_macan">
                        <li className='btn'>Macan</li>
                    </NavLink>
                    <NavLink to="/model_cayenne">
                        <li className='btn'>Cayenne</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    )
}

export default ModelNav;