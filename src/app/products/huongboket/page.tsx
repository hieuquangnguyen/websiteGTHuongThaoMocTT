'use client';
import React from 'react';
import LayoutProductList from '@/components/layouts/layout_products_list/page';
import ProductItem from '@/components/arraysData/productItems/page';
import LayoutContent from '@/components/layouts/layout_content_home/page';

import LayoutProductPage from '@/components/layouts/layout_cover_products_page/page';
import st from '@/app/products/huongboket/huongboket.module.css';

const HuongBoKet: React.FC = () => {
  return (
    <>
      <LayoutContent>
        <LayoutProductPage>
          <div className={st.overTitleProduct}>
            <p className={st.titleProduct}>SẢN PHẨM VỚI THÀNH PHẦN CHÍNH LÀ BỒ KẾT</p>
          </div>
          <LayoutProductList>
            <ProductItem
              imgSrc="/products/boket/NuBoKet1.jpg"
              imgSrc1="/products/boket/NuBoKet2.jpg"
              imgSrc2="/products/boket/NuBoKet3.jpg"
              imgSrc3="/products/boket/NuBoKet4.jpg"
              imgSrc4="/products/boket/NuBoKet5.jpg"
              title="Nhang Nụ"
              price="2.000 - 3.000 VNĐ / nụ"
              huonglieu=" là sự kết hợp của các nguyên liệu từ tự nhiên như trái bồ kết, vỏ bưởi, rễ hương nhu, cây tía tô, keo bời lời và một số thảo dược khác."
              muithom="nụ nhang bồ kết với mùi thơm đặc trưng và hơi hăng của bồ kết giúp mũi được thông, dễ thở, chống suy giảm hô hấp. Khói cay của bồ kết còn khiến kiến, gián, ruồi muỗi sợ hãi."
              kichthuoc="Nụ cao 4.3 cm, cháy trong 20p"
              theloai="Nhang nụ, có lỗ nhỏ dưới đáy nụ để cắm chu tăm. Thích hợp để trên những chân thắp nụ, tỏa khói đẹp."
              priceSi="LIÊN HỆ"
              priceLe="2.000 - 3.000 VNĐ / nụ"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />
            <ProductItem
              imgSrc="/products/boket/TamDoBK40_1.jpg"
              imgSrc1="/products/boket/TamDoBK40_2.jpg"
              imgSrc2="/products/boket/TamDoBK40_3.jpg"
              imgSrc3="/products/boket/TamDoBK40_4.jpg"
              imgSrc4="/products/boket/TamDoBK40_5.jpg"
              title="Nhang Cây | Tăm Đỏ"
              price="130.000 VNĐ / 500g"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như trái bồ kết, vỏ bưởi, rễ hương nhu, cây tía tô, keo bời lời và một số thảo dược khác."
              muithom="nhang cây bồ kết với mùi thơm đặc trưng và hơi hăng của bồ kết giúp mũi được thông, dễ thở, chống suy giảm hô hấp. Khói cay của bồ kết còn khiến kiến, gián, ruồi muỗi sợ hãi. Và theo dân gian hương bồ kết có thể hóa giải tà khí."
              kichthuoc="Có loại 30, 35, 40, 50 cm. Tùy vào nhu cầu của bạn mà đặt kích cỡ thích hợp."
              theloai="Nhang cây với chu tăm đỏ theo truyền thống, phù hợp cho thờ cúng, tôn nghiêm."
              priceSi="LIÊN HỆ"
              priceLe="130.000 VNĐ / 500g"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />

            <ProductItem
              imgSrc="/products/boket/TamTrangBK35_1.jpg"
              imgSrc1="/products/boket/TamTrangBK35_2.jpg"
              imgSrc2="/products/boket/TamTrangBK35_3.jpg"
              imgSrc3="/products/boket/TamTrangBK35_1.jpg"
              imgSrc4="/products/boket/TamTrangBK35_2.jpg"
              title="Nhang Cây | Tăm Trắng"
              price="130.000 VNĐ / 500g"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như trái bồ kết, vỏ bưởi, rễ hương nhu, cây tía tô, keo bời lời và một số thảo dược khác. "
              muithom="nhang cây bồ kết với mùi thơm đặc trưng và hơi hăng của bồ kết giúp mũi được thông, dễ thở, chống suy giảm hô hấp. Khói cay của bồ kết còn khiến kiến, gián, ruồi muỗi sợ hãi. Và theo dân gian hương bồ kết có thể hóa giải tà khí."
              kichthuoc="Có loại 30, 35, 40, 50 cm. Tùy vào nhu cầu của bạn mà đặt kích cỡ thích hợp."
              theloai="Nhang cây với chu tăm trắng phù hợp với những bạn theo đuổi sự nhẹ nhàng từ tự nhiên, tìm về sự thư giản, cảm giác thoải mái. "
              priceSi="LIÊN HỆ"
              priceLe="130.000 VNĐ / 500g"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />
            <ProductItem
              imgSrc="/products/boket/CayToBK80_1.jpg"
              imgSrc1="/products/boket/CayToBK80_2.jpg"
              imgSrc2="/products/boket/CayToBK80_1.jpg"
              imgSrc3="/products/boket/CayToBK80_2.jpg"
              imgSrc4="/products/boket/CayToBK80_1.jpg"
              title="Nhang Cây To"
              price="4.000 VNĐ / cây"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như trái bồ kết, vỏ bưởi, rễ hương nhu, cây tía tô, keo bời lời và một số thảo dược khác. "
              muithom="nhang cây to bồ kết với mùi thơm đặc trưng và hơi hăng của bồ kết giúp mũi được thông, dễ thở, chống suy giảm hô hấp. Khói cay của bồ kết còn khiến kiến, gián, ruồi muỗi sợ hãi. Và theo dân gian hương bồ kết có thể hóa giải tà khí."
              kichthuoc="Có 80 cm, thời gian cháy gần 4 giờ. Tùy vào nhu cầu của bạn mà đặt kích cỡ thích hợp. "
              theloai="Nhang cây to với kích thước 80cm, phù hợp để thắp các dịp lễ lớn, các đám ở tộc, hay đám cần thời gian nhang lâu."
              priceSi="4.000 VNĐ / cây"
              priceLe="LIÊN HỆ"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />
          </LayoutProductList>
        </LayoutProductPage>
      </LayoutContent>
    </>
  );
};

export default HuongBoKet;
