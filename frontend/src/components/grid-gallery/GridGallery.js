import React from 'react';
import './GridGallery.scss';
import Gallery from 'react-grid-gallery';

export default function GridGallery(props) {
    return (
        <div>
            <Gallery
                images={props.photos}
                imageCountSeparator=" из "
                showLightboxThumbnails
                enableImageSelection={false}
            />
        </div>
    );
}
