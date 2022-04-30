import React from 'react';
import Slider from 'react-slick';
import getSettings from './fadeSlider.config';
import styles from '../../styles/modules/slider/ReactSlider.module.scss';

const ReactSlider = ({ dots, data }) => {
  const settings = getSettings(dots);
  return (
    <Slider {...settings}>
      {data.map((x, y) => (
        <div key={x.id} className={styles.imgWrapper}>
          <img src={x.url} alt={x.name} style={{ objectFit: 'contain', width: '100%' }} />
        </div>
      ))}
    </Slider>
  );
};

export default ReactSlider;
