'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalProduct from '@/components/modals/modalDetailProduct/page';

import st from '@/components/arraysData/productItems/products_item.module.css';
import st2 from '@/components/arraysData/productItems/modalDetail.module.css';
import Script from 'next/script';

interface ProductProps {
  imgSrc: string;
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
  imgSrc4 : string;
  title: string;
  price: string;
  huonglieu: string;
  muithom: string;
  kichthuoc: string;
  theloai: string;
  priceSi: string;
  priceLe: string;
  chatLuongSP: string;
  chinhSachDoiTra: string;
  ThoiGianGiaoHang: string;
}

const ProductItem: React.FC<ProductProps> = ({
  imgSrc,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  title,
  price,
  huonglieu,
  muithom,
  kichthuoc,
  theloai,
  priceSi,
  priceLe,
  chatLuongSP,
  chinhSachDoiTra,
  ThoiGianGiaoHang,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ảnh chuyển động */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      ></link>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />
      {/* ảnh chuyển động */}

      <div className={st.coverItem}>
        <div className={st.imgProduct}>
          <Image className={st.img} src={imgSrc} alt={title} width={250} height={250} />
        </div>
        <div className={st.titleProduct}>
          <p>{title}</p>
        </div>
        <div className={st.priceProduct}>
          <Link style={{ color: 'red', textDecoration: 'none' }} href={'/contact'}>
            {price}
          </Link>
        </div>

        <div className={st.desProductContainer}>
          <div className={st.desProduct}>
            <strong>Mô tả: </strong>
            {muithom}
          </div>
        </div>
        <div>
          <button className={st.detailProduct} onClick={() => setShowModal(true)}>
            Tìm Hiểu
          </button>
          {showModal && (
            // hiển thị modal chi tiết sản phẩm
            <ModalProduct onClose={() => setShowModal(false)}>
              {/* cục 1 - title và images */}
              <div className={st2.overcontent1}>
                <div className={st2.titleProduct}>{title}</div>
                <div className={st2.imgProduct}>
                  {/* image slide show */}
                  <div
                    id="myCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                    // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
                  >
                    {/* Indicators */}
                    <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                      <li data-target="#myCarousel" data-slide-to={0} className="active" />
                      <li data-target="#myCarousel" data-slide-to={1} />
                      <li data-target="#myCarousel" data-slide-to={2} />
                      <li data-target="#myCarousel" data-slide-to={3} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div
                      className="carousel-inner"
                      style={{ boxShadow: '5px 5px 50px white', borderRadius: '10%' }}
                    >
                      <div className={`item active ${st.customItem}`}>
                        <Image
                          className={st.imageGT1}
                          src={imgSrc}
                          alt="Landscape picture"
                          width={250}
                          height={300}
                        />
                        <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                          <h5 className={st.captionImage}>{/* ghi thêm vào ảnh */}</h5>
                        </div>
                      </div>
                      <div className="item">
                        <Image
                          className={st.imageGT1}
                          src={imgSrc1}
                          alt="Ảnh Khác Bồ Kết Hương"
                          width={250}
                          height={300}
                        />
                        <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                          {/* <h5 className={st.captionImage}>Đóng gói</h5> */}
                        </div>
                      </div>
                      <div className="item">
                        <Image
                          className={st.imageGT1}
                          src={imgSrc2}
                          alt="Ảnh Khác Bồ Kết Hương"
                          width={250}
                          height={300}
                        />
                        <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                          {/* <h5 className={st.captionImage}>Trộn bột</h5> */}
                        </div>
                      </div>
                      <div className="item">
                        <Image
                          className={st.imageGT1}
                          src={imgSrc3}
                          alt="Ảnh Khác Bồ Kết Hương"
                          width={250}
                          height={300}
                        />
                        <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                          {/* <h5 className={st.captionImage}>Đóng gói</h5> */}
                        </div>
                      </div>
                      <div className="item">
                        <Image
                          className={st.imageGT1}
                          src={imgSrc4}
                          alt="Ảnh Khác Bồ Kết Hương"
                          width={250}
                          height={300}
                        />
                        <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                          {/* <h5 className={st.captionImage}>Đóng gói</h5> */}
                        </div>
                      </div>
                      {/*  */}
                    </div>
                    {/* Left and right controls */}
                    <a
                      className="left carousel-control"
                      href="#myCarousel"
                      data-slide="prev"
                      style={{ backgroundImage: 'none' }}
                    >
                      <span className="glyphicon glyphicon-chevron-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#myCarousel"
                      data-slide="next"
                      style={{ backgroundImage: 'none' }}
                    >
                      <span className="glyphicon glyphicon-chevron-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Cục 2 - Liên hệ và description */}
              <div className={st2.overcontent2}>
                <div
                  className={st.priceProduct}
                  style={{ paddingTop: '20px', textAlign: 'center' }}
                >
                  <Link style={{ color: 'red', textDecoration: 'none' }} href={'/contact'}>
                    {price}
                  </Link>
                </div>
                <div className={st2.desProduct}>
                  {' '}
                  <div className={st2.descriptionScroll}>
                    <u>
                      <b style={{ color: '#fff900de' }}>Mô Tả Sản phẩm</b>
                    </u>
                    :
                    <ul>
                      <li>Hương Liệu : {huonglieu}</li>
                      <li>Mùi Thơm: {muithom}</li>
                      <li>Kích Thước: {kichthuoc}</li>
                      <li>Thể Loại (Nụ/ Cây): {theloai}</li>
                    </ul>
                    <u>
                      <b style={{ color: '#fff900de' }}>Đơn Giá</b>
                    </u>
                    :
                    <ul>
                      <li>
                        Giá bán sỉ :{/* &nbsp;  : ni là tag khoảng cách */}
                        <Link style={{ color: 'yellow', textDecoration: 'none' }} href={'/contact'}>
                          &nbsp;{priceSi}
                        </Link>
                      </li>
                      <li>
                        Giá bán lẻ :
                        <Link style={{ color: 'yellow', textDecoration: 'none' }} href={'/contact'}>
                          &nbsp;{priceLe}
                        </Link>
                      </li>
                    </ul>
                    <u>
                      <b style={{ color: '#fff900de' }}>Chất Lượng Sản Phẩm</b>
                    </u>
                    : <br /> {chatLuongSP}
                    <br />
                    <br />
                    <u>
                      <b style={{ color: '#fff900de' }}>Chính Sách Đổi Trả</b>
                    </u>
                    : <br />
                    {chinhSachDoiTra}
                    <br />
                    <br />
                    <u>
                      <b style={{ color: '#fff900de' }}>Thời Gian Giao Hàng</b>
                    </u>
                    : <br />
                    {ThoiGianGiaoHang}
                  </div>
                </div>
              </div>
            </ModalProduct>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
