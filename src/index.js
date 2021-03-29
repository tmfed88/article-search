import './style.css';
import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';
import fetchData from './helpers/fetch.js';
import getUrl from './helpers/url.js';

let App = () => {
    const [mounted, setMounted] = useState({isMounted: false})
    const [stories, setStories] = useState();

    useEffect(() => {
        setMounted({isMounted: false})
        fetchData(getUrl)
        .then(data => {
            setMounted({...mounted, isMounted: true});
            setStories({...stories, articles: data.results});
        })
        .catch(() => {
            setMounted({isMounted: false});
        }) 
        return;
    }, []);
    console.log(mounted);
    console.log(stories);
    return ( <>
    
        </>
    );
}

render( <App /> , document.querySelector("#app"));