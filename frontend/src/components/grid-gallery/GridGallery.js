/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './GridGallery.scss';
import Gallery from 'react-grid-gallery';

class GridGallery extends React.Component {
    render() {
        const { photos } = this.props;
        return (
            <div>
                <Gallery
                    images={photos}
                    imageCountSeparator=" из "
                    showLightboxThumbnails
                    enableImageSelection={false}
                />
            </div>
        );
    }
}

GridGallery.propTypes = {
    photos: PropTypes.array
};

export default GridGallery;
