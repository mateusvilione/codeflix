import React from 'react';
import './style.css';

export default function ButtonLink(props){
    return (
        <a className={props.className} href={props.href} >
            {props.children}
        </a>
    );
}