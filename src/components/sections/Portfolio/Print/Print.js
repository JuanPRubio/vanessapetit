import React, { Fragment, useState } from 'react';
import { Zoom } from '@mui/material';
import Card from '../../../card/Card';
import { beauty } from './beauty.js';
import { travel } from './travel.js';
import { health } from './health.js';
import { culture } from './culture.js';
import { celebrity } from './celebrity.js';
import { fashion } from './fashion.js';

function Print() {

    const [subCategoryArray, setSubCategoryArray] = useState({
        beauty: true,
        fashion: false,
        culture: false,
        health: false,
        travel: false
    }
    );
    
    let currentSubcat = Object.keys(subCategoryArray).filter(function(key) {
        return subCategoryArray[key]
    });
    
    let renderCurrentSubcategory = () => {
        switch (currentSubcat[0].toString()) {
        case 'beauty':
            return beauty;
        case 'fashion':
            return fashion;
        case 'travel':
            return travel;
        case 'culture':
            return culture;
        case 'health':
            return health;
        case 'celebrity':
            return celebrity;
        default:
            console.log("No Funciona")
            break;
    
        }
    };

      // name = selected subcateg
    const handleClick = (name) => {
        let subCategoryAux = {
            beauty: false,
            fashion: false,
            culture: false,
            health: false,
            travel: false
        }
        if (!name) {
        setSubCategoryArray(subCategoryAux)
        } else {
        setSubCategoryArray({
        ...subCategoryAux,
        [name] : true
        })}
    };

    return (
        <Fragment>
                <div className="portfolio__tabs">
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("beauty")} style={{color: subCategoryArray.beauty? "white":"", backgroundColor: subCategoryArray.beauty? "var(--first-color)":""}} >
                            Beauty
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("fashion")} style={{color: subCategoryArray.fashion? "white":"", backgroundColor: subCategoryArray.fashion? "var(--first-color)":""}} >
                            Fashion
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("culture")} style={{color: subCategoryArray.culture? "white":"", backgroundColor: subCategoryArray.culture? "var(--first-color)":""}} >
                            Culture
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("health")} style={{color: subCategoryArray.health? "white":"", backgroundColor: subCategoryArray.health? "var(--first-color)":""}} >
                            Health
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("travel")} style={{color: subCategoryArray.travel? "white":"", backgroundColor: subCategoryArray.travel? "var(--first-color)":""}} >
                            Travel
                    </div>

                </div>

                <div className="portfolio__sections">
                {renderCurrentSubcategory()?.map((website, index) => (
                <Zoom in={true} timeout={700}>
                    <a href={website.route} target="_blank" rel='noreferrer'>
                    <Card
                    key={website.description}
                    hexa={website.hexa}
                    title={website.title}
                    description={website.description}
                    image={website.image}
                    />
                    </a>
                </Zoom>
                ))}
                </div>
            </Fragment>
    )
}

export default Print
