import React from 'react';
import Image from 'next/image';

import styles from '../styles/GalleryItem.module.scss';

const GalleryItem = ({ src, alt }) => {
    return (
        <div className={styles.container}>
            <Image
                // loader={myLoader}
                src={src}
                alt={alt}
                width={500}
                height={500}
            />
        </div>
    )
}

export default GalleryItem