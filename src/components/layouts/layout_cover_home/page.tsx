'use client';

import React from 'react';
import Styles from '@/styles/layout_home.module.css';

import Navigation from '@/components/layouts/layout_navigation/page';

import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import stf from '@/styles/footer.module.css';
import Image from 'next/image';

export default function LayoutHome({ children }: { children: React.ReactNode }) {
  return (
    <div className={Styles.container}>
      {/* navigation menu */}
      <div className="menu">
        <Navigation />
      </div>
      <Container>
        {/* header */}
        <div className={Styles.header}>
          <div className={Styles.imgHeader}>
            <Image priority={true} src="/BannerWebsitePP.png" alt="" width={1200} height={300} />
          </div>
        </div>
        {/* end Header template */}
        {/* div children */}
        <div className={Styles.coverContent}>{children}</div>
      </Container>

      {/* Footer */}
      <>
        {/* <div className={stf.coverFooter}>
          <div className={stf.title}>
            <h3 style={{ textAlign: 'center', color: 'white' }}> NHÀ PHÂN PHỐI HƯƠNG SẠCH T&T</h3>
          </div>
          <div className={stf.contentF}>
            <div className={stf.col_left}>
              <p>
                <strong>
                  <u>Địa chỉ nhà phân phối:</u>{' '}
                </strong>{' '}
                xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam.
              </p>

              <p>
                <strong>
                  <u>Email:</u>{' '}
                </strong>
                <Link href={'mailto:huongtunhienthuthao.22@gmail.com'}>
                  huongtunhienthuthao.22@gmail.com
                </Link>
              </p>
              <p>
                <strong>
                  {' '}
                  <u>Số Điện Thoại:</u>
                </strong>
                <a href="tel:0707960071">070 796 0071</a>
              </p>
              <p>
                <strong>
                  <u>Địa chỉ nhà sản xuất:</u>{' '}
                </strong>{' '}
                thôn Trà Kiệu Tây, xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam.
              </p>
            </div>
            <div className={stf.col_right}>
              <p>
                <strong>
                  <u>Liên Hệ: </u>
                </strong>
                <Link href={'https://www.facebook.com/huongthaomocThuThao'}>
                  <Image src="/iconFB.png" alt="" width={30} height={30} />
                </Link>

                <Link href={'/contact'}>
                  <Image src="/iconZalo.png" alt="" width={30} height={30} />
                </Link>
              </p>
              <Link href={'/contact'}> Xin hãy click tại đây</Link>
            </div>
          </div>
        </div> */}
        <footer>
          <div className={stf.footer}>
            <div className={stf.row}>
              <Link href={'https://www.facebook.com/huongthaomocThuThao'}>
                <Image src="/iconFB.png" alt="" width={40} height={40} />
              </Link>
              <Link href={'https://www.instagram.com/huong_thao_moc_thu_thao/'}>
                <Image src="/iconInsta.png" alt="" width={40} height={40} />
              </Link>
              <Link href={'/contact'}>
                <Image src="/iconZalo.png" alt="" width={40} height={40} />
              </Link>
            </div>
            <div className={stf.row}>
              <ul>
                <li>
                  <Link href={'tel:0707960071'}> Gọi Ngay</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Liên Hệ</Link>
                </li>
                <li>
                  <Link href={'mailto:huongtunhienthuthao.22@gmail.com'}>Gửi Thư</Link>
                </li>
              </ul>
            </div>
            <div className={stf.row}>
              <h4>Địa chỉ nhà phân phối: xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam.</h4>
            </div>
            <div className={stf.row}>
              <h5>Design By : Quang Hieu - STS</h5>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
