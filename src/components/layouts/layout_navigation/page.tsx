'use client';

import styles from '@/styles/layout_navigation.module.css';
import Link from 'next/link';

const Navigation: React.FC = () => {
  function XuLiManHinhThuGon() {
    const x = document.getElementById('myTopnav') as HTMLElement;
    if (x.className === styles.topnav) {
      x.className += ' ' + styles.responsive;
    } else {
      x.className = styles.topnav;
    }
  }

  return (
    <>
      <div className={styles.topnav} id="myTopnav">
        <Link href="/">TRANG CHỦ</Link>

        <Link href={'/products/allproducts'}>SẢN PHẨM</Link>

        <Link href={'/contact'}>LIÊN HỆ</Link>

        <Link href="#" className={styles.icon} onClick={() => XuLiManHinhThuGon()}>
          &#9776;
        </Link>
      </div>
    </>
  );
};

export default Navigation;
