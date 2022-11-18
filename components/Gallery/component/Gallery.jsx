import styles from '../styles/Gallery.module.scss'

import React from 'react'
import { Row, Col, Container } from "reactstrap";
import GalleryItem from '../../GalleryItem/component/GalleryItem'
import vid1 from '../videos/vid1.gif'
import vid2 from '../videos/vid2.gif'


const images = [
    {
        alt: 'ecografia',
        src: vid1
    },
    {
        alt: 'ecografia',
        src: vid2
    }
]

const Gallery = () => {
    return (
        <div className="spacer bg-light" id="gallery">
            <Container>
                <Row className="justify-content-center">
                    <Col md="12" className="text-center">
                        <h1 className="title font-bold">Galería</h1>
                        <div className={styles.container} id="mission">
                            {images.map((element, i) => (
                                <div className={styles.imageContainer} key={i} >
                                    <GalleryItem src={element.src} alt={element.alt} />
                                </div>
                            ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gallery