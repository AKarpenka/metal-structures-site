/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './GridGallery.scss';
import Gallery from 'react-grid-gallery';
import IMAGES from '../../constants/imagesStore';

class GridGallery extends React.Component {
    render() {
        return (
            <div>
                <Gallery
                    images={IMAGES}
                    imageCountSeparator=" из "
                    showLightboxThumbnails="true"
                    enableImageSelection={false}
                />
            </div>
        );
    }
}

export default GridGallery;
