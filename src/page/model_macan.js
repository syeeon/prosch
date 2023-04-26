import React, {useState, useEffect} from 'react';

import 'styles/page/model.css'
import ModelNav from 'components/Model_nav'

function ModelMacan(){
    const [model, setModel] = useState([]);
    
    useEffect(() => {
        fetch("macan.json")
        .then((res) => res.json())
        .then((data) => setModel(data));
    }, [])
    //console.log(model)
    
    return(
        <section className=''>
            <div className='box_wrap'>
                <ModelNav />
                <div className='container'>
                    <h2 className='model_name'>Macan Model</h2>
                    {model.map((item) => (
                        <div className='model_info'>
                            <div>
                                <img src={item.url} />
                                <p>{item.model}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ModelMacan;