import React, {useState} from 'react';
import Section from './Section.js';

const Dropdown = ({articles}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    
   
    
    return( 
    <div>
        <button onClick={e => {
        setIsOpen(!isOpen)}}>Section</button>
        {articles.map((article, index) => {
            return (
                <div key={index}>
                    <div className= {isOpen ? "dropdown active" : "dropdown"}>
                        <Section articles={articles} />
                    </div>
                </div>
            )
    })} 
    </div>
    )
   
}

export default Dropdown;