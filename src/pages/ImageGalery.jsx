/* eslint-disable react/prop-types */

import { useState } from 'react';
import styles from './ImagesGalery.module.css';


export const ImageGalery = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  };

  const renderImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = images.slice(startIndex, endIndex);

    return currentImages.map((image, index) => (
      <div key={index} className={styles.card}>
        <img src={image.url} alt={`Image ${index}`} />
      </div>
    ));
  };
  return (
    <div>

      <div className={styles.container}>
        {renderImages()}
      </div>
      <div className={styles.buttons}>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );

}