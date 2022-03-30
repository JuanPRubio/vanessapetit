import { Zoom } from '@mui/material';
import React, { Fragment } from 'react';
import Card from '../../../card/Card2';
import { translationFiles } from './translation-files.js';

function Translation() {

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
