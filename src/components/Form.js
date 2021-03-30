import React from 'react';
import Dropdown from './Dropdown.js';


const Form = ({stories, mount}) => {
    if (!stories || stories.length === 0) {
       return <div>{mount}</div>;;
    }
    else {
            return (
                <div>
                    <Dropdown articles={stories.results} />
                </div>
            )
    }
}

export default Form;
