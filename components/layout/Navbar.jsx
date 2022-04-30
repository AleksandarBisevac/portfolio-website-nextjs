import Link from 'next/link';
import styles from '../../styles/modules/Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'>LOGO</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href='/projects'>projects</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/freestyle'>freestyle</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/about'>about me</Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/contact'>contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
