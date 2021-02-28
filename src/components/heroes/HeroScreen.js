import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ( { history } ) => {

    const { heroId } = useParams();

    // Memorize results 
    const hero = useMemo(() => 
         getHeroById( heroId )
    , [ heroId ])


    if( !hero ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if(history.lenght <= 2){
            history.push("/");
        }else {
            history.goBack();
        }
    };

    const {
        alter_ego,
        characters,
        first_appearance,
        id,
        publisher,
        superhero
    } = hero;

    
    return (
        <div className="row mt-5 card-columns animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img src = { `../assets/heroes/${id}.jpg `} 
                alt={superhero}
                className="img-thumbnail"/>
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item "> <b>Alter ego: </b> { alter_ego }</li>
                    <li className="list-group-item "> <b>First Appearance: </b>{ first_appearance }</li>
                    <li className="list-group-item "> <b>Publisher: </b>{ publisher }</li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>

                <button className="btn btn-outline-info"
                onClick = { handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
};
