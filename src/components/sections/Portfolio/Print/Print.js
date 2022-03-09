import React, { Fragment, useState } from 'react';
import { Zoom } from '@mui/material';
import Card from '../../../card/Card';
import { printFiles } from './print-files.js';

function Print() {

    const [subCategoryArray, setSubCategoryArray] = useState({
        beauty: true,
        parenting: false,
        travel: false,
        education: false,
        celebrtiy: false
    }
    );
      // name = selected subcateg
    const handleClick = (name) => {
        let subCategoryAux = {
            beauty: false,
            parenting: false,
            travel: false,
            education: false,
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

    return (
        <Fragment>
                {/* <div className="portfolio__tabs">
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("beauty")} style={{color: subCategoryArray.beauty? "white":"", backgroundColor: subCategoryArray.beauty? "var(--first-color)":""}} >
                            Beauty
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("parenting")} style={{color: subCategoryArray.parenting? "white":"", backgroundColor: subCategoryArray.parenting? "var(--first-color)":""}} >
                            Parenting
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("travel")} style={{color: subCategoryArray.travel? "white":"", backgroundColor: subCategoryArray.travel? "var(--first-color)":""}} >
                            Travel
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("education")} style={{color: subCategoryArray.education? "white":"", backgroundColor: subCategoryArray.education? "var(--first-color)":""}} >
                            Education
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("celebrity")} style={{color: subCategoryArray.celebrity? "white":"", backgroundColor: subCategoryArray.celebrity? "var(--first-color)":""}} >
                            Celebrity
                    </div>

                </div> */}

                <Zoom in={true} timeout={700}>
                <div className="portfolio__sections">
                {(printFiles).map((website, index) => (
                    <Card
                    key={website.description}
                    hexa={website.hexa}
                    title={website.title}
                    description={website.description}
                    image={website.image}
                    />
                ))}
                </div>
                </Zoom>
            </Fragment>
    )
}

export default Print
