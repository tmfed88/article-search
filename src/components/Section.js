import React, {useState} from 'react';

const Section = ({articles}) => {
    const [section, setSection] = useState();

    articles.map(article => {
    setSection(article.section, []);
    console.log(section);
    
    return (
        <div>
           {section} 
        </div>
    )
    })
}

export default Section;