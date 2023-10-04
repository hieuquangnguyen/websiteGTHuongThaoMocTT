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
        <div className={stf.coverFooter}>
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
              {/* <span>Bạn có thể liên hệ qua Facebook, Zalo, SĐT, Email. </span> */}
              <Link href={'/contact'}> Xin hãy click tại đây</Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
