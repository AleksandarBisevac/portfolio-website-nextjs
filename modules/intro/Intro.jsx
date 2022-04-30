import React from 'react';
import getHeroImagesRequest from '../../api/hero/getHeroImageRequest';
import ReactSlider from '../../components/slider/ReactSlider';
import styles from '../../styles/modules/Intro.module.scss';
import Logo from '../../components/SVGs/Logo';
const Intro = () => {
  const [images, setImages] = React.useState([]);

  const getImages = async () => {
    try {
      const response = await getHeroImagesRequest();
      console.log(response);
      setImages(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getImages();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <Logo width={100} height={100} className={styles.brand} alt='logo' />
          john doe
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quam ipsum voluptatum voluptate eaque officiis odio? Rerum quo sint eaque.
        </p>
        <button className={styles.button}>discover</button>
      </div>
      <div className={styles.slider}>
        <ReactSlider dots={false} data={images} />
      </div>
    </div>
  );
};

export default Intro;
