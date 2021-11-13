import React, { Fragment, useState } from 'react';
import { Zoom } from '@mui/material';
import Card from '../../../card/Card';
import { printFiles } from './print-files.js';

function Print() {

    const [subCategoryArray, setSubCategoryArray] = useState({
        education: true,
        travel: false,
        fashion: false,
        parenting: false}
    );
      // name = selected subcateg
    const handleClick = (name) => {
        let subCategoryAux = {
        education: false,
        travel: false,
        fashion: false,
        parenting: false
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
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("education")} style={{color: subCategoryArray.education? "var(--first-color)":""}} >
                            Education
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("travel")} style={{color: subCategoryArray.travel? "var(--first-color)":""}} >
                            Travel
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("fashion")} style={{color: subCategoryArray.fashion? "var(--first-color)":""}} >
                            Fashion
                    </div>
                    <div className="portfolio__subcat__button button--flex" onClick={()=> handleClick("parenting")} style={{color: subCategoryArray.parenting? "var(--first-color)":""}} >
                            Parenting
                    </div>

                </div>

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
