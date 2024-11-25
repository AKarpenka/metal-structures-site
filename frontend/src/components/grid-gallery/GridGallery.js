import React from 'react';
import { Gallery } from 'react-grid-gallery';
import './GridGallery.scss';

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
