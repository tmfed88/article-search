import './style.css';
import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';
import fetchData from './helpers/fetch.js';
import getUrl from './helpers/url.js';
import Form from './components/Form.js'

let App = () => {
    const [mounted, setMounted] = useState({isMounted: false})
    const [stories, setStories] = useState();

    useEffect(() => {
        setMounted({isMounted: false})
        fetchData(getUrl)
        .then(data => {
            setMounted({...mounted, isMounted: true});
            setStories({...stories, results: data.results});
        })
        .catch(() => {
            setMounted({isMounted: false});
        }) 
        return;
    }, []);
    // console.log(mounted);
    
    return ( 
        <>
            <Form stories={stories} mount={mounted.isMounted} />
        </>
    );
}

render( <App /> , document.querySelector("#app"));