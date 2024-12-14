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
            <Image priority={true} src="/bannerupdatesdt.svg" alt="" width={1200} height={300} />
          </div>
        </div>
        {/* end Header template */}
        {/* div children */}
        <div className={Styles.coverContent}>{children}</div>
      </Container>

      {/* Footer */}
      <>
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
                  <Link href={'tel:0766757525'}> Gọi Ngay</Link>
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
              <h5>
                <Link href={'https://beacons.ai/nqhharry09'}>Design By : Quang Hieu - Harry</Link>
              </h5>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
