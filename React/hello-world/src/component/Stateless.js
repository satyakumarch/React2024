import React from 'react';
const statelessComponent=(props)=>{
    return(
        <div>
            <h1>stateless components</h1>
            <p>{props.message}</p>
        </div>
    );
};
export default statelessComponent;