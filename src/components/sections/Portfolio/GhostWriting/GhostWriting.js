import { Zoom } from '@mui/material';
import React, { Fragment } from 'react';
import Card from '../../../card/Card';
import { ghostwritingFiles } from './ghostwriting-files';

function GhostWriting() {

    return (
        <Fragment>
                <div className="portfolio__sections">
                {(ghostwritingFiles).map((website, index) => (
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

export default GhostWriting
