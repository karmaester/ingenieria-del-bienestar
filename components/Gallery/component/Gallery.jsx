import styles from '../styles/Gallery.module.scss'

import React from 'react'
import { Row, Col, Container } from "reactstrap";
import GalleryItem from '../../GalleryItem/component/GalleryItem'
import img10 from "../../../assets/images/portfolio/61.png";


const images = [
    {
        alt: 'first',
        src: img10
    },
    {
        alt: 'second',
        src: img10
    },
    {
        alt: 'third',
        src: img10
    },
    {
        alt: 'fourth',
        src: img10
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