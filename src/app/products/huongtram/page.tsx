'use client';
import React from 'react';
import LayoutProductList from '@/components/layouts/layout_products_list/page';
import ProductItem from '@/components/arraysData/productItems/page';
import LayoutContent from '@/components/layouts/layout_content_home/page';
import LayoutProductPage from '@/components/layouts/layout_cover_products_page/page';

import st from '@/app/products/huongboket/huongboket.module.css';

const HuongTram: React.FC = () => {
  return (
    <>
      <LayoutContent>
        <LayoutProductPage>
          <div className={st.overTitleProduct}>
            <p className={st.titleProduct}>SẢN PHẨM VỚI THÀNH PHẦN CHÍNH LÀ BỘT TRẦM</p>
          </div>
          <LayoutProductList>
            <ProductItem
              imgSrc="/products/tram/NuTram1.jpg"
              imgSrc1="/products/tram/NuTram2.jpg"
              imgSrc2="/products/tram/NuTram3.jpg"
              imgSrc3="/products/tram/NuTram4.jpg"
              imgSrc4="/products/tram/NuTram5.jpg"
              title="Hương Nụ"
              price="LIÊN HỆ"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như bột trầm và keo bời lời."
              muithom="Hương Trầm có mùi thơm ấm áp và đậm đà. Khi đốt trầm hương, mùi hương trầm như thể len lõi vào từng tế bào thần kinh giúp cho tâm ta tĩnh, trí ta an. "
              kichthuoc="Nụ cao 4.3 cm, cháy trong 20p"
              theloai="Nhang nụ, có lỗ nhỏ dưới đáy nụ để cắm chu tăm. Thích hợp để trên những chân thắp nụ, tỏa khói đẹp."
              priceSi="LIÊN HỆ"
              priceLe="LIÊN HỆ"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />
            <ProductItem
              imgSrc="/products/tram/TamDoT40_1.jpg"
              imgSrc1="/products/tram/TamDoT40_2.jpg"
              imgSrc2="/products/tram/TamDoT40_3.jpg"
              imgSrc3="/products/tram/TamDoT40_4.jpg"
              imgSrc4="/products/tram/TamDoT40_5.jpg"
              title="Hương Cây | Tăm Đỏ"
              price="LIÊN HỆ"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như bột trầm và keo bời lời."
              muithom="Hương Trầm có mùi thơm ấm áp và đậm đà. Khi đốt trầm hương, mùi hương trầm như thể len lõi vào từng tế bào thần kinh giúp cho tâm ta tĩnh, trí ta an. "
              kichthuoc="Có loại 35,40, 60 cm. Tùy vào nhu cầu của bạn mà đặt kích cỡ thích hợp."
              theloai="Nhang cây với chu tăm đỏ theo truyền thống, phù hợp cho thờ cúng, tôn nghiêm."
              priceSi="LIÊN HỆ"
              priceLe="LIÊN HỆ"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />

            <ProductItem
              imgSrc="/products/tram/TamTrangT35_1.jpg"
              imgSrc1="/products/tram/TamTrangT35_2.jpg"
              imgSrc2="/products/tram/TamTrangT35_3.jpg"
              imgSrc3="/products/tram/TamTrangT35_4.jpg"
              imgSrc4="/products/tram/TamTrangT35_5.jpg"
              title="Hương Cây | Tăm Trắng"
              price="LIÊN HỆ"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như bột trầm và keo bời lời. "
              muithom="Hương Trầm có mùi thơm ấm áp và đậm đà. Khi đốt trầm hương, mùi hương trầm như thể len lõi vào từng tế bào thần kinh giúp cho tâm ta tĩnh, trí ta an. "
              kichthuoc="Có loại 35,40, 60 cm. Tùy vào nhu cầu của bạn mà đặt kích cỡ thích hợp."
              theloai="Nhang cây với chu tăm trắng phù hợp với những bạn theo đuổi sự nhẹ nhàng từ tự nhiên, tìm về sự thư giản, cảm giác thoải mái."
              priceSi="LIÊN HỆ"
              priceLe="LIÊN HỆ"
              chatLuongSP="Hương chúng tôi bán cũng là hương chúng tôi sử dụng. Dần dần chúng tôi sẽ làm kiểm định các loại nhang mà chúng tôi đã sản xuất để cả nhà yên tâm hơn."
              chinhSachDoiTra="TH1: Nếu trong quá trình vận chuyển, hương bị nứt mẻ thì hãy chụp và gửi lại chúng tôi, chúng tôi sẽ gửi lại cho bạn sản phẩm mới. TH2: Mọi sai xót mà cả nhà gặp phải khi sử dụng mà không hài lòng thì xin hãy nhắn ngay với chúng tôi, chúng tôi luôn sẵn sàng lắng nghe và cải thiện những sai xót của mình."
              ThoiGianGiaoHang="TH1: Nếu nhang có sẵn thì 3-4 ngày sẽ có hàng, và chúng ta trao đổi tiền ship. TH2: Nếu nhang không có sẵn thì 7 ngày sẽ có hàng. TH3: Nếu bạn sống gần đại lí của chúng tôi, thì thời gian giao sẽ nhanh và phí ship rẻ hơn."
            />
            <ProductItem
              imgSrc="/products/tram/CayToT80_1.jpg"
              imgSrc1="/products/tram/CayToT80_2.jpg"
              imgSrc2="/products/tram/CayToT80_3.jpg"
              imgSrc3="/products/tram/CayToT80_4.jpg"
              imgSrc4="/products/tram/CayToT80_5.jpg"
              title="Hương Cây To | 80cm"
              price="LIÊN HỆ"
              huonglieu="là sự kết hợp của các nguyên liệu từ tự nhiên như bột trầm và keo bời lời. "
              muithom="Hương Trầm có mùi thơm ấm áp và đậm đà. Khi đốt trầm hương, mùi hương trầm như thể len lõi vào từng tế bào thần kinh giúp cho tâm ta tĩnh, trí ta an. "
              kichthuoc="Có 80 cm, thời gian cháy gần 4 giờ. Tùy vào nhu cầu của bạn mà đặt kích cỡ thích hợp."
              theloai="Nhang cây to với kích thước 80cm, phù hợp để thắp các dịp lễ lớn, các đám ở tộc, hay đám tiệc cần thời gian nhang lâu."
              priceSi="LIÊN HỆ"
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

export default HuongTram;
