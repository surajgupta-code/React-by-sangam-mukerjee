import React from 'react';
import { useState } from 'react';
import data from './data';
import './style.css';
const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const handleSelection = (id) => {
        if (selected === id) {
            return setSelected(null);
        }
        setSelected(id);
    }

    return (
        <div className="container">
            <div className="accordian">
                <h1>Accordian</h1>
                <div className='accordian-container'>
                    {
                        data && data.length > 0 ? data.map((item) => (
                            <div key={item.id} className="accordian-item" onClick={() => handleSelection(item.id)}>
                                <h1>
                                    {item.question}
                                </h1>
                                <span>+</span>
                                <div>
                                    {selected === item.id ? <p>{item.answer}</p> : null}
                                </div>
                            </div>
                        )) : <div><p>No data available</p></div>
                    }

                </div>
            </div>
        </div>
    )

}
export default Accordian;