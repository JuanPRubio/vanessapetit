import { Fragment } from 'react';
import { Zoom } from '@mui/material';
import Card from '../../../card/Card.jsx';
import { recentsFiles } from './recents-files.js';

function Recents() {
  return (
    <Fragment>
      <div className='portfolio__sections'>
        {recentsFiles.map((website, index) => (
          <Zoom in={true} timeout={700} key={index}>
            <a href={website.route} target='_blank' rel='noreferrer'>
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
  );
}

export default Recents;
