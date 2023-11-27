'use client';
import LayoutContent from '@/components/layouts/layout_content_home/page';

import Image from 'next/image';

import st from '@/styles/contact.module.css';
import Link from 'next/link';

import React, { useEffect } from 'react';

import 'leaflet/dist/leaflet.css';

// Contact page
const Contact: React.FC = () => {
  return (
    <LayoutContent>
      <div className={st.coverContact}>
        <div className={st.noteContact}>
          <h5>
            <div className={st.CongNgheHoa}>
              TRONG THỜI ĐẠI CÔNG NGHỆ HÓA, SẢN PHẨM TRÊN THỊ TRƯỜNG VÔ CÙNG ĐA DẠNG,
              <br />
              TÔI MONG BẠN HÃY TÌM HIỂU RÕ NGUỒN GỐC CỦA SẢN PHẨM TRƯỚC KHI QUYẾT ĐỊNH CLICK MUA NÓ
              !
            </div>

            <div className={st.LoiChao}>
              Xin Chào các bạn, Mình tên là Hiếu, con trai giữa trong gia đình. <br />
              Bởi thấy rằng sản phẩm của gia đình thực sự là tốt và được ưa chuộng nên mình đã quyết
              tâm mở rộng thị trường bán hương thảo mộc, sạch và an toàn này. Mong rằng các bạn có
              thể lựa chọn và tin dùng sản phẩm bên nhà mình !
            </div>
          </h5>
        </div>
        <hr
          style={{
            border: 'solid 5px black',
            width: '60%',
            textAlign: 'center',
            marginLeft: '20%',
          }}
        />
        <div className={st.Intro}>
          <div>
            <div style={{ textAlign: 'center' }}>
              {' '}
              <b>
                <h3>MỘT CHÚT TÂM SỰ</h3>
              </b>{' '}
            </div>
            <ul>
              <li>
                Gia đình tôi bắt đầu sản xuất hương (nhang) từ năm 2010, cho đến ngày hôm nay tôi
                làm website này là 22/09/2023. Đã qua 13 năm nghiên cứu và đã sản xuất ra những mùi
                hương thơm từ nguyên liệu tự nhiên. Sản phẩm được ưa chuộng nhất hiện tại có tên gọi
                là <b>Hương Bài Quảng</b>, có nguyên liệu chính từ rễ găng núi.
              </li>
              <li>
                Sau 13 năm hình thành và phát triển, cho đến hiện tại gia đình đã tự tin vào các mùi
                hương như:{' '}
                <u style={{ color: '#264653' }}>
                  Hương Tu Hú, Hương Bài Quảng, Hương Trầm, Hương Quế
                </u>
                . Ngoài ra các loại hương vừa thành công trong năm 2023 nhưng chưa có thị trường
                mạnh như:{' '}
                <u style={{ color: '#264653' }}>
                  Hương Ngải Cứu, Hương Bồ Kết, Hương Sả và Hương Cà Phê.
                </u>
              </li>
              <li>
                Hương (nhang) không chỉ là dùng cho thờ cúng. Mà mùi hương dễ chịu sẽ giúp cho bạn
                cảm thấy thoải mái khi về nhà, giúp tâm thanh tịnh và hóa giải tà khí.
              </li>
              <li>
                Sau 13 năm kinh nghiệm trong nghề, ngày hôm nay gia đình tôi muốn mở rộng thị trường
                nhang sạch tự nhiên này hơn.{' '}
              </li>
              <ul>
                <li>
                  <b>Bước đầu:</b> tôi muốn tìm thêm Đại Lí để sản phẩm được đến tay mọi người nhiều
                  hơn.{' '}
                </li>
                <li>
                  <b>Bước hai:</b> Có thể là sau 2-3 năm, khách hàng ổn định, tôi sẽ triển khai
                  trang web để bán lẻ, bán sỉ. Trang web sẽ thể hiện rõ quy trình sản xuất, với ý
                  tưởng khách hàng có thể xem được quá trình sản xuất từ A đến Z. Bởi tôi hiểu rằng,
                  càng làm lớn thì càng phải chắc chắn và tỉ mỉ thì hiệu quả đem lại mới lâu dài và
                  bền vững.{' '}
                </li>
              </ul>
              Vậy nên, nếu bạn là Đại Lí Sản Phẩm Sạch hay yêu thích sản phẩm an toàn, mùi hương tự
              nhiên, dễ chịu. Hãy liên hệ với gia đình mình ngay nhé !
            </ul>
          </div>
        </div>

        <hr
          style={{
            border: 'solid 5px black',
            width: '60%',
            textAlign: 'center',
            marginLeft: '20%',
          }}
        />
        <div className={st.fbLink}>
          <strong>
            <h5>Liên Hệ qua Fanpage ở Facebook :</h5>
          </strong>
          <Link href={'https://www.facebook.com/huongthaomocThuThao'}>
            Click tại đây để truy cập Fanpage !
          </Link>
        </div>
        <hr
          style={{
            border: 'solid 5px black',
            width: '60%',
            textAlign: 'center',
            marginLeft: '20%',
          }}
        />
        <div className={st.qrZalo}>
          <strong>
            <h5>Liên Hệ Qua Zalo:</h5>
          </strong>
          <div className={st.imgQRzalo}>
            <Image src={'/qrZalo.jpg'} alt={'QR Zalo'} width={200} height={200}></Image>
            <p>070 796 0071 - Quang Hiếu</p>
          </div>
        </div>
        <hr
          style={{
            border: 'solid 5px black',
            width: '60%',
            textAlign: 'center',
            marginLeft: '20%',
          }}
        />
        <div className={st.fbLink}>
          <strong>
            <h5>Liên Hệ Qua Email :</h5>
          </strong>
          <Link href={'mailto:hieunguyen.13092000@gmail.com'}>
            Click tại đây để liên lạc Email !
          </Link>
        </div>
        <hr
          style={{
            border: 'solid 5px black',
            width: '60%',
            textAlign: 'center',
            marginLeft: '20%',
          }}
        />
        <div className={st.phoneNumber}>
          <strong>
            <h5>Liên Hệ Qua Số Điện Thoại:</h5>
          </strong>
          <span>
            <a href="tel:0915858859">0915 858 859</a> | <a href="tel:0785494476">078 549 4476</a> |{' '}
            <a href="tel:0707960071">070 796 0071</a>
          </span>
        </div>
        <hr
          style={{
            border: 'solid 5px black',
            width: '60%',
            textAlign: 'center',
            marginLeft: '20%',
          }}
        />
        <div className={st.adressProduce}>
          <strong>
            <h5>Địa Chỉ Cơ Sở Sản Xuất: </h5>
          </strong>
          <p>Tổ 3, thôn Trà Kiệu Tây, xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam</p>
        </div>
        <br />
        <div className={st.mapDirect}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.018652134339!2d108.2318068099999!3d15.808966182678166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314207c2dce50fbf%3A0x7253f59840c2d99e!2zSMawxqFuZyBU4buxIE5oacOqbiBUaHUgVGjhuqNv!5e1!3m2!1sen!2s!4v1691635820154!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </LayoutContent>
  );
};

export default Contact;
