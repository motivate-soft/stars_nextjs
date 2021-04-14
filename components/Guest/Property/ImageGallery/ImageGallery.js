import React from 'react';
import ImageGallery from 'react-image-gallery';
import ImageGalleryWrapper from './ImageGallery.style';


const PropertyImageGallery = ({images}) => {
    return (
        <ImageGalleryWrapper>
            <ImageGallery
                items={images.map(image => ({
                    original: image.file,
                    thumbnail: image.file
                }))}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={true}
                lazyLoad={true}
                slideDuration={550}
            />
        </ImageGalleryWrapper>
    );
};

export default PropertyImageGallery;
