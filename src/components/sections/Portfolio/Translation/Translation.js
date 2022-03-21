import { Zoom } from '@mui/material';
import React, { Fragment, useState } from 'react';
import Card from '../../../card/Card';
import { translationFiles } from './translation-files.js';

function Translation() {

    const [subCategoryArray, setSubCategoryArray] = useState({
        parenting: true,
        business: false,
        press: false}
    );
      // name = selected subcateg
    const handleClick = (name) => {
        let subCategoryAux = {
            parenting: false,
            business: false,
            press: false
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
                <Zoom in={true} timeout={700}>
                <div className="portfolio__sections">
                {(translationFiles).map((website, index) => (
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

export default Translation
