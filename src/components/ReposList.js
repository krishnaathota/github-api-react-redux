import React from 'react';
import Card from './Card';

const RepoList = (props) => {
    console.log(`siddhu ${props}`);

    const repos = props.repos && props.repos.map((item, i) =>{
        return <Card data={item} key={i}/>
    });

    return (
        <div className="repos-list">{repos}</div>
    );
}

export default RepoList;