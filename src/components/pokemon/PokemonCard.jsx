import React from 'react';

export default function PokemonCard ({id, name, img, type}) {
    const style = `cardContainer card  ${type}`
    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className={style} >
                <img className="card-img-top" src={img} alt={name} />
                <div className="card-header">
                    <h1>{name}</h1>
                </div>
                
                <div className="card-body">
                    <p>Type: {type} </p>
                    <small>#0{id}</small>
                </div>
            </div>
        </div>
    )
}