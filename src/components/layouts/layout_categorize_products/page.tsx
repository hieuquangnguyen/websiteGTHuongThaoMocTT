'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import st from '@/components/layouts/layout_categorize_products/layout_categorize.module.css';
export default function LayoutCategorizeProducts() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={st.coverLeft}>
        <div className={st.titleLeft}>Danh Mục Sản Phẩm</div>
        {/* tạo biểu tượng menu "hamburger"  */}
        <div className={st.menuIcon} onClick={toggleMenu}>
          <div className={st.bar}></div>
          <div className={st.bar}></div>
          <div className={st.bar}></div>
        </div>

        <div className={`${st.productsCaregorize} ${isMenuOpen ? st.showMenu : ''}`}>
          <div className={st.menuContent}>
            <Link href={'/products/allproducts'} onClick={closeMenu}>
              Tất Cả Sản Phẩm
            </Link>
            <hr />
            <Link href={'/products/huongtuhuthuong'} onClick={closeMenu}>
              Hương Tu Hú
            </Link>
            <hr />
            <Link href={'/products/huongtuhu'} onClick={closeMenu}>
              Hương Bài Quảng
            </Link>
            <hr />
            <Link href={'/products/huongtram'} onClick={closeMenu}>
              Hương Trầm
            </Link>
            <hr />
            <Link href={'/products/huongque'} onClick={closeMenu}>
              Hương Quế
            </Link>
            <hr />
            <Link href={'/products/huongboket'} onClick={closeMenu}>
              Hương Bồ Kết
            </Link>
            <hr />
            <Link href={'/products/huongcaphe'} onClick={closeMenu}>
              Hương Cà Phê
            </Link>
            <hr />
            <Link href={'/products/huongngaicuu'} onClick={closeMenu}>
              Hương Ngải Cứu
            </Link>
            <hr />
            <Link href={'/products/huongsa'} onClick={closeMenu}>
              Hương Sả
            </Link>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
