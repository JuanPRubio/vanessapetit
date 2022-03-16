import React, { Fragment, useState } from 'react';
import { Zoom } from '@mui/material';
import Card from '../../../card/Card';
import { beauty } from './beauty.js';

function Print() {

    const [subCategoryArray, setSubCategoryArray] = useState({
        beauty: true,
        fashion: false,
        culture: false,
        health: false,
        celebrtiy: false
    }
    );
      // name = selected subcateg
    const handleClick = (name) => {
        let subCategoryAux = {
            beauty: false,
            fashion: false,
            culture: false,
            health: false,
            celebrtiy: false
        }
        if (!name) {
        setSubCategoryArray(subCategoryAux)
        } else {
        setSubCategoryArray({
        ...subCategoryAux,
        [name] : true
        })}
    };

    let currentSubcat = Object.keys(subCategoryArray).filter(function(key) {
        return subCategoryArray[key]
    });

    console.log(currentSubcat[0]);

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
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("celebrity")} style={{color: subCategoryArray.celebrity? "white":"", backgroundColor: subCategoryArray.celebrity? "var(--first-color)":""}} >
                            Celebrity
                    </div>

                </div>

                <Zoom in={true} timeout={700}>
                <div className="portfolio__sections">
                {(beauty)?.map((website, index) => (
                    <a href={website.route} target="_blank" rel='noreferrer'>
                    <Card
                    key={website.description}
                    hexa={website.hexa}
                    title={website.title}
                    description={website.description}
                    image={website.image}
                    />
                    </a>
                ))}
                </div>
                </Zoom>
            </Fragment>
    )
}

export default Print
