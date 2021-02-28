import React from 'react';
import { heroes } from '../data/heroes';



export const getHeroByPublisher = ( publisher ) => {
    
    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher " ${ publisher } " do not correct"`);
    }

    return heroes.filter( hero => hero.publisher === publisher);
};
