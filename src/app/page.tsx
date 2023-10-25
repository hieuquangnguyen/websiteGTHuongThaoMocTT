'use client';
import LayoutContent from '@/components/layouts/layout_content_home/page';
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import st from '@/styles/home.module.css';
import Link from 'next/link';
import Script from 'next/script';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
// import './xulievent.js';

const Home: React.FC = () => {
  return (
    <>
      {/* ảnh chuyển động */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      ></link>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" />
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <>
        <LayoutContent>
          <div className={st.coverIamHieu}>
            <div className={st.IamHieu}>
              Xin chào các bạn, Mình là Quang Hiếu. Thật vui khi các bạn đã ghé thăm website giới
              thiệu hương này của mình.{' '}
            </div>
          </div>
          <div className={st.gth1}>
            <div className={st.textContainer}>
              <h2>CHÚNG TÔI LÀ AI ?</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <p className={st.contentTheP}>
                <strong>Nhà Phân Phối:</strong> Nhà Phân Phối Hương Sạch T&T
                <br />
                <div className={st.contentTheP}>
                  Nếu bạn đang tìm kiếm sự thư giãn và mùi hương dễ chịu nơi làm việc hay ở nhà, thì
                  hãy tìm hiểu ngay về chúng tôi.
                  <br />
                  Chúng tôi là nhà phân phối hương sạch T&T, hiện tại công ty chúng tôi đang phân
                  phối sản phẩm cho một cơ sở sản xuất theo kiểu hộ gia đình nhỏ. Sau bao ngày
                  nghiên cứu, thử nghiệm sản phẩm và tìm hiểu về cơ sở sản xuất nhang gia đình Thu
                  Thảo, tôi đã quyết định bắt tay cùng gia đình đưa sản phẩm đi xa, đi cao hơn.
                  <br />
                  Để đem lại uy tín hơn nữa, chính xác tôi là con trai giữa của gia đình sản xuất
                  hương thảo mộc này. Bởi chất lượng mùi hương được ưa chuộng cùng với độ an toàn
                  của sản phẩm được làm từ các nguyên liệu tự nhiên. Nên tôi đã quyết tâm mở rộng
                  thị trường hơn và đứng với vai trò là một nhà phân phối để tìm các{' '}
                  <b>
                    Đại Lí Bán Sản Phẩm Sạch, Tự Nhiên, tìm các nguồn khách hàng thích mùi hương tự
                    nhiên, an toàn cho môi trường sống.
                  </b>{' '}
                  Và chính tôi tin rằng hương thảo mộc, với mùi hương riêng của từng loại thảo mộc
                  chính trong từng loại hương có thể mang đến cho bạn cảm giác ấm áp và an lành.
                  <br />
                  Chúng tôi đang nỗ lực mở rộng hơn trên mạng xã hội để các bạn, người mà đang tìm
                  kiếm sản phẩm sạch có thể cùng chia sẻ niềm yêu thích với hương thảo mộc. Bằng
                  việc này, chúng tôi cũng mong muốn mang đến cho gia đình bạn một cơ hội tốt hơn để
                  trải nghiệm những sản phẩm an toàn và sạch này.
                  <br />
                  Chúng tôi hi vọng bạn sẽ tìm thấy sản phẩm hương thảo mộc ưa chuộng tại đây.
                  <br />
                  Cảm ơn bạn vì đã ở đây và đọc bài viết này của chúng tôi !
                </div>
                <strong>Địa chỉ & vị trí: </strong> xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam.
                <br />
                <strong>Thông tin liên hệ:</strong>{' '}
                <Link href="/contact">Kích vào đây hoặc Kích trên thanh menu</Link>
              </p>
            </div>
            {/* image slide show */}
            <div className={st.imageContainer}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
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
                  <li data-target="#myCarousel" data-slide-to={4} />
                  <li data-target="#myCarousel" data-slide-to={5} />
                  <li data-target="#myCarousel" data-slide-to={6} />
                  <li data-target="#myCarousel" data-slide-to={7} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila2.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila3.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila4.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila5.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila6.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila7.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila8.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
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
          {/* end GT1 */}

          <div className={st.gth2}>
            {/* image slide show */}
            <div className={st.imageContainer}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
              <div
                id="myCarousel2"
                className="carousel slide"
                data-ride="carousel"
                // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
              >
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel2" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel2" data-slide-to={1} />
                  <li data-target="#myCarousel2" data-slide-to={2} />
                  <li data-target="#myCarousel2" data-slide-to={3} />
                  <li data-target="#myCarousel2" data-slide-to={4} />
                  <li data-target="#myCarousel2" data-slide-to={5} />
                  <li data-target="#myCarousel2" data-slide-to={6} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>{/* Có vườn trồng <br /> thảo mộc */}</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu2.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      {/* <h5 className={st.captionImage}>Đào rễ rừng</h5> */}
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu3.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      {/* <h5 className={st.captionImage}>Nhập nguyên liệu không thể trồng</h5> */}
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu4.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>{/* Thu hoạch <br /> nguyên liệu */}</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu5.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      {/* <h5 className={st.captionImage}>Xử lí nguyên liệu</h5> */}
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu6.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      {/* <h5 className={st.captionImage}>Xử lí nguyên liệu</h5> */}
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content2/lichsuvagioithieu7.png"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      {/* <h5 className={st.captionImage}>Xử lí nguyên liệu</h5> */}
                    </div>
                  </div>

                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel2"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel2"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className={st.textContainer}>
              <h2>LỊCH SỬ VÀ GIỚI THIỆU</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <div className={st.contentTheP}>
                <strong>Ngày Thành Lập:</strong>
                Gia đình chúng tôi bắt đầu với nghề vào tháng 5 năm 2010, được học nghề từ gia đình
                của sư phụ (Sư phụ dạy võ) của ba tôi. Vì sư phụ đó thấy ba hiền hành, tốt tính, nên
                đã truyền lại nghề làm Hương này.
                <br />
                <strong>Lịch Sử Phát Triển:</strong>
                <ul>
                  <li>
                    Bắt đầu từ khi thành lập, cho đến ngày hôm nay (ngày tôi viết website này là năm
                    2023). Gia đình tôi đã trải qua trất nhiều giai đoạn trong sản xuất và kinh
                    doanh hương. Ban đầu vì theo thị trường, gia đình tôi làm rất nhiều loại hương.
                    Nhưng những loại được khách hàng ưa chuộng để thắp ở nhà, ở tộc, ở nơi linh
                    thiêng thường là Trầm Hương, Tu Hú Hương (Găng Núi). Ngoài ra hương Quế cũng
                    được ưa chuộng bởi giá thành mềm hơn. Đây là ba mùi hương được truyền từ bao đời
                    nay.
                  </li>
                  <li>
                    Đầu năm 2020, khi hương tu hú và quế đã được lan rộng, có vận chuyển đi Sài Gòn,
                    Nha Trang, Đà Nẵng,.v.v.v Niềm hạnh phúc là sản phẩm nhà chúng tôi rất được ưa
                    chuộng bởi là loại nhang thơm,có mùi hương dễ chịu. Và chính điều đó là một
                    trong những nguyên nhân khiến gia đình đổi bắt đầu làm Hương Thảo Mộc, các
                    nguyên liệu từ tự nhiên.
                    <ul>
                      <ul>
                        Ngoài ra, nguyên nhân quan trọng không kém đó là những{' '}
                        <strong>đóng góp của người thân:</strong>
                      </ul>
                      <li>
                        <i>&quot;Chị nên sản xuất nhang sạch &quot;</i>
                        <br />
                      </li>
                      <li>
                        <i>
                          &quot;Em đang bán các sản phẩm sạch, nên nếu anh chị nghiên cứu nhang
                          sạch, em sẽ đem đi phân tích, đánh giá rồi sẽ nhập của anh chị về bán,
                          giúp anh chị mở rộng hơn&quot;
                        </i>
                      </li>
                      <li>
                        <i>
                          {' '}
                          &quot;Hiện đại thì nhiều cái hại xuất hiện, nên chừ mọi người đa số đều
                          tìm về sản phẩm sạch, con tìm cho cha mẹ, cha mẹ tìm cho gia đình, mọi
                          người cùng tìm sản phẩm sạch để chính gia đình họ được sử dụng sản phẩm an
                          toàn, mang lại một sức khỏe tốt. &quot;
                        </i>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    Từ đó, cả nhà đã nhen nhóm ý nghĩ, mình thử nghiên cứu thêm những mùi hương mới,
                    vì chỉ gốc rễ tu hú sẽ không đủ. Rễ tu hú từ tự nhiên, thuê đào rất khó, tương
                    lai mình làm miết sẽ hiếm. Vậy là từ đầu năm 2021, ba mẹ đã bắt đầu nghiên cứu
                    thêm các mùi hương từ cây thuốc, thảo mộc, thảo dược .v.v.v
                  </li>
                  <ul>
                    <li>Hiện tại nhà có một số loại hương từ thảo mộc như :</li>
                    <ul>
                      <li>Hương Tu Hú</li>
                      <li>Hương Bài Quảng</li>
                      <li>Hương Trầm</li>
                      <li>Hương Quế</li>
                      <li>Hương Ngải Cứu</li>
                      <li>Hương Sả</li>
                      <li>Hương Bồ Kết</li>
                      <li>Hương Cà Phê</li>
                    </ul>
                  </ul>
                </ul>
                <strong>Thông tin liên hệ:</strong>{' '}
                <Link href="/contact">Kích vào đây hoặc Kích trên thanh menu</Link>
              </div>
            </div>
          </div>
          {/* end GT2 */}
          <div className={st.gth3}>
            <div className={st.textContainer}>
              <h2>SẢN PHẨM CHÍNH</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <div className={st.contentTheP}>
                Như đã nói ở trên, hiện tại gia đình tôi đã sản xuất được các loại Hương sau:
                {/* </div> */}
                <ul>
                  <li>Hương Tu Hú</li>
                  <li>Hương Bài Quảng</li>
                  <li>Hương Trầm</li>
                  <li>Hương Quế</li>
                  <li>Hương Ngải Cứu</li>
                  <li>Hương Sả</li>
                  <li>Hương Bồ Kết</li>
                  <li>Hương Cà Phê</li>
                </ul>
                <hr style={{ border: 'solid 1px' }} />
                <i>Bấm chọn và xem kĩ các điểm nổi bật của loại hương bạn muốn nhé !</i>
                <Card style={{ fontSize: '16px' }}>
                  <Accordion defaultActiveKey={['0']} alwaysOpen>
                    {/* trầm */}
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Trầm Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongTram}>
                          <strong>HƯƠNG TRẦM</strong>{' '}
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật:</strong> Hương Trầm có mùi thơm ấm áp và đậm
                              đà.{' '}
                            </li>
                            <li>
                              <strong>Ưu điểm: </strong>
                              <ul>
                                <li>Giúp con người dễ dàng cân bằng tâm trí.</li>
                                <li>
                                  Khi đốt trầm hương, mùi hương trầm như thể len lõi vào từng tế bào
                                  thần kinh giúp cho tâm ta tĩnh, trí ta an.{' '}
                                </li>
                                <li>
                                  Đặc biệt Hương Trầm thường được sử dụng để tạo không gian yên bình
                                  và tĩnh lặng trong nghiên cứu tinh thần và thiền học.
                                </li>
                                <li>
                                  Về mặt tâm linh thì nhang Trầm còn có thể hóa giải tà khí trong
                                  nhà, mang lại nhiều may mắn cho gia chủ.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* tu hú */}
                    <Accordion.Item eventKey="1">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Tu Hú Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongTuHu}>
                          <strong>HƯƠNG TU HÚ</strong>{' '}
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật:</strong> Hương Tu Hú thường có mùi hương nhẹ
                              nhàng, nguyên thủy. Nó thường được tạo ra từ các loại cây găng núi, rễ
                              hương lâu và có màu xanh từ lá bời lời.{' '}
                            </li>
                            <li>
                              <strong>Ưu điểm: </strong>
                              <ul>
                                <li>
                                  Mùi hương được nhiều người ưa chuộng nhất bởi mùi thơm dễ chịu.
                                </li>
                                <li>
                                  Khi đốt tu hú hương, mùi hương tu hú nhẹ nhang lan tỏa khắp không
                                  gian, khiến không gian ấm áp & dễ chịu.
                                </li>
                                <li>
                                  Đặc biệt Hương Tu Hú thường được sử dụng để tạo không gian yên
                                  bình và tĩnh lặng.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* bài quảng */}
                    <Accordion.Item eventKey="2">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Bài Quảng Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongBaiQuang}>
                          <strong>HƯƠNG BÀI QUẢNG</strong>
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật: </strong>Hương Bài Quảng là một loại đặc
                              biệt hơn của Hương Tu Hú, thường có mùi hương đậm, nguyên thủy và mạnh
                              mẽ. Nó thường được tạo ra từ các loại cây găng núi, rễ hương bài và có
                              thể có màu sắc khác nhau.
                            </li>
                            <li>
                              <strong>Ưu điểm </strong>
                              <ul>
                                <li>
                                  Hương bài quảng thường được ưa chuộng vì tính tinh khiết và khả
                                  năng tạo ra mùi hương đậm đà, ngạt ngào lan tỏa.
                                </li>
                                <li>Tạo cho con người cảm giác dễ chịu, sảng khoái nhất.</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* Quế */}
                    <Accordion.Item eventKey="3">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        {' '}
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Quế Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongQue}>
                          <strong>HƯƠNG QUẾ</strong>
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật:</strong> Hương Quế có mùi thơm ấm áp và ngọt
                              ngào.{' '}
                            </li>
                            <li>
                              <strong>Ưu điểm:</strong>
                              <ul>
                                <li>
                                  Nhang quế có mùi thơm nồng dễ chịu, kích thích trí não, giúp thư
                                  giãn,… và một số công dụng cho sức khỏe.
                                </li>
                                <li>
                                  Khói nhang quế có tác dụng xua đuổi các loại côn trùng bay vào
                                  nhà, như muỗi, ong. An toàn cho sức khỏe con người{' '}
                                </li>
                                <li>Có tác dụng khử mùi hôi rất tốt.</li>
                                <li>
                                  Về mặt tâm linh thì nhang quế còn có thể hóa giải tà khí trong
                                  nhà, mang lại nhiều may mắn cho gia chủ.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* NGải Cứu */}
                    <Accordion.Item eventKey="4">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Ngải Cứu Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongNgaiCuu}>
                          <strong>HƯƠNG NGẢI CỨU</strong>
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật: </strong>Hương ngải cứu có mùi hương thảo
                              dược, thanh khiết và mát mẻ.
                            </li>
                            <li>
                              <strong>Ưu điểm </strong>
                              <ul>
                                {' '}
                                <li>Giúp thư giản tinh thần.</li>
                                <li>Giúp an thần & định tâm.</li>
                                <li>Làm sạch không gian, chống ẩm mốc và tạo cảm giác dễ chịu.</li>
                              </ul>
                            </li>
                          </ul>{' '}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* Bồ Kết */}
                    <Accordion.Item eventKey="5">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Bồ Kết Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongBoKet}>
                          <strong>HƯƠNG BỒ KẾT</strong>
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật: </strong> Hương bồ kết thường có mùi hương
                              nồng nàn, đặc trưng
                            </li>
                            <li>
                              <strong>Ưu điểm </strong>
                              <ul>
                                {' '}
                                <li>
                                  Kháng khuẩn, thanh lọc không khí, làm cho không khí sạch sẽ hơn{' '}
                                </li>{' '}
                                <li>
                                  Giúp thanh trược tẩy uế văn phòng làm việc, nhà bếp, chưng cư.
                                </li>
                                <li>
                                  Mùi hương bồ kết làm những con côn trùng như: muỗi, kiến, ruồi,
                                  gián cảm thấy khó chịu.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* Sả */}
                    <Accordion.Item eventKey="6">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Sả Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongSa}>
                          <strong>HƯƠNG SẢ</strong>
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật:</strong> Hương sả có mùi hương tươi mát, nhẹ
                              nhàng. Nó được tạo ra từ cây sả và được kết hợp với các loại thảo dược
                              khác.{' '}
                            </li>
                            <li>
                              <strong>Ưu điểm </strong>
                              <ul>
                                {' '}
                                <li>Làm sạch không gian </li>{' '}
                                <li>Tạo sự tỉnh táo và tăng sự tập trung.</li>
                                <li>
                                  Xua đuổi muỗi và kháng khuẩn. An toàn cho sức khỏe con người.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* Cà Phê*/}
                    <Accordion.Item eventKey="7">
                      <Accordion.Header
                        style={{
                          backgroundColor: 'white',
                          width: 'auto',
                          marginTop: '0',
                        }}
                      >
                        <p style={{ fontSize: '15px', alignItems: 'center', marginBottom: '0' }}>
                          Cà Phê Hương
                        </p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={st.HuongCaPhe}>
                          <strong>HƯƠNG CÀ PHÊ</strong>
                          <ul>
                            <li>
                              <strong>Đặc điểm nổi bật: </strong>toả hương thơm cho không gian
                            </li>
                            <li>
                              <strong>Ưu điểm </strong>
                              <ul>
                                {' '}
                                <li>
                                  Toả hương thơm cho không gian coffee hay người yêu thích cà phê{' '}
                                </li>{' '}
                                <li>Giúp tinh thần thoải mái</li>
                                <li>Giúp đuổi muỗi, ... </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
                {/* <div className={st.dacdiemnoibatGT3}>
                  <p>
                    <strong>Đặc điểm nổi bật & Ưu điểm:</strong>{' '}
                  </p>
                  <div className={st.HuongTuHu}>
                    <strong>HƯƠNG TU HÚ</strong>{' '}
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật:</strong> Hương Tu Hú thường có mùi hương nhẹ
                        nhàng, nguyên thủy. Nó thường được tạo ra từ các loại cây găng núi, rễ hương
                        lâu và có màu xanh từ lá bời lời.{' '}
                      </li>
                      <li>
                        <strong>Ưu điểm: </strong>
                        <ul>
                          <li>Mùi hương được nhiều người ưa chuộng nhất bởi mùi thơm dễ chịu.</li>
                          <li>
                            Khi đốt tu hú hương, mùi hương tu hú nhẹ nhang lan tỏa khắp không gian,
                            khiến không gian ấm áp & dễ chịu.
                          </li>
                          <li>
                            Đặc biệt Hương Tu Hú thường được sử dụng để tạo không gian yên bình và
                            tĩnh lặng.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongBaiQuang}>
                    <strong>HƯƠNG BÀI QUẢNG</strong>
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật: </strong>Hương Bài Quảng là một loại đặc biệt hơn
                        của Hương Tu Hú, thường có mùi hương đậm, nguyên thủy và mạnh mẽ. Nó thường
                        được tạo ra từ các loại cây găng núi, rễ hương bài và có thể có màu sắc khác
                        nhau.
                      </li>
                      <li>
                        <strong>Ưu điểm </strong>
                        <ul>
                          <li>
                            Hương bài quảng thường được ưa chuộng vì tính tinh khiết và khả năng tạo
                            ra mùi hương đậm đà, ngạt ngào lan tỏa.
                          </li>
                          <li>Tạo cho con người cảm giác dễ chịu, sảng khoái nhất.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongTram}>
                    <strong>HƯƠNG TRẦM</strong>{' '}
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật:</strong> Hương Trầm có mùi thơm ấm áp và đậm đà.{' '}
                      </li>
                      <li>
                        <strong>Ưu điểm: </strong>
                        <ul>
                          <li>Giúp con người dễ dàng cân bằng tâm trí.</li>
                          <li>
                            Khi đốt trầm hương, mùi hương trầm như thể len lõi vào từng tế bào thần
                            kinh giúp cho tâm ta tĩnh, trí ta an.{' '}
                          </li>
                          <li>
                            Đặc biệt Hương Trầm thường được sử dụng để tạo không gian yên bình và
                            tĩnh lặng trong nghiên cứu tinh thần và thiền học.
                          </li>
                          <li>
                            Về mặt tâm linh thì nhang Trầm còn có thể hóa giải tà khí trong nhà,
                            mang lại nhiều may mắn cho gia chủ.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongQue}>
                    <strong>HƯƠNG QUẾ</strong>
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật:</strong> Hương Quế có mùi thơm ấm áp và ngọt ngào.{' '}
                      </li>
                      <li>
                        <strong>Ưu điểm:</strong>
                        <ul>
                          <li>
                            Nhang quế có mùi thơm nồng dễ chịu, kích thích trí não, giúp thư giãn,…
                            và một số công dụng cho sức khỏe.
                          </li>
                          <li>
                            Khói nhang quế có tác dụng xua đuổi các loại côn trùng bay vào nhà, như
                            muỗi, ong. An toàn cho sức khỏe con người{' '}
                          </li>
                          <li>Có tác dụng khử mùi hôi rất tốt.</li>
                          <li>
                            Về mặt tâm linh thì nhang quế còn có thể hóa giải tà khí trong nhà, mang
                            lại nhiều may mắn cho gia chủ.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongNgaiCuu}>
                    <strong>HƯƠNG NGẢI CỨU</strong>
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật: </strong>Hương ngải cứu có mùi hương thảo dược,
                        thanh khiết và mát mẻ.
                      </li>
                      <li>
                        <strong>Ưu điểm </strong>
                        <ul>
                          {' '}
                          <li>Giúp thư giản tinh thần.</li>
                          <li>Giúp an thần & định tâm.</li>
                          <li>Làm sạch không gian, chống ẩm mốc và tạo cảm giác dễ chịu.</li>
                        </ul>
                      </li>
                    </ul>{' '}
                  </div>
                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongSa}>
                    <strong>HƯƠNG SẢ</strong>
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật:</strong> Hương sả có mùi hương tươi mát, nhẹ
                        nhàng. Nó được tạo ra từ cây sả và được kết hợp với các loại thảo dược khác.{' '}
                      </li>
                      <li>
                        <strong>Ưu điểm </strong>
                        <ul>
                          {' '}
                          <li>Làm sạch không gian </li>{' '}
                          <li>Tạo sự tỉnh táo và tăng sự tập trung.</li>
                          <li>Xua đuổi muỗi và kháng khuẩn. An toàn cho sức khỏe con người.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongBoKet}>
                    <strong>HƯƠNG BỒ KẾT</strong>
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật: </strong> Hương bồ kết thường có mùi hương nồng
                        nàn, đặc trưng
                      </li>
                      <li>
                        <strong>Ưu điểm </strong>
                        <ul>
                          {' '}
                          <li>
                            Kháng khuẩn, thanh lọc không khí, làm cho không khí sạch sẽ hơn{' '}
                          </li>{' '}
                          <li>Giúp thanh trược tẩy uế văn phòng làm việc, nhà bếp, chưng cư.</li>
                          <li>
                            Mùi hương bồ kết làm những con côn trùng như: muỗi, kiến, ruồi, gián cảm
                            thấy khó chịu.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr style={{ border: 'solid 1px' }} />
                  <div className={st.HuongCaPhe}>
                    <strong>HƯƠNG CÀ PHÊ</strong>
                    <ul>
                      <li>
                        <strong>Đặc điểm nổi bật: </strong>toả hương thơm cho không gian
                      </li>
                      <li>
                        <strong>Ưu điểm </strong>
                        <ul>
                          {' '}
                          <li>
                            Toả hương thơm cho không gian coffee hay người yêu thích cà phê{' '}
                          </li>{' '}
                          <li>Giúp tinh thần thoải mái</li>
                          <li>Giúp đuổi muỗi, ... </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <hr style={{ border: 'solid 1px' }} />

                  <p>
                    Để rõ hơn, cùng chúng tôi tìm hiểu quy trình sản xuất hương (nhang) ở phần tiếp
                    theo nhé !
                  </p>
                </div> */}
              </div>
            </div>
            <div className={st.imageContainer} style={{marginTop:'10px'}}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
              <div id="myCarousel3" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel3" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel3" data-slide-to={1} />
                  <li data-target="#myCarousel3" data-slide-to={2} />
                  <li data-target="#myCarousel3" data-slide-to={3} />
                  <li data-target="#myCarousel3" data-slide-to={4} />
                  <li data-target="#myCarousel3" data-slide-to={5} />
                  <li data-target="#myCarousel3" data-slide-to={6} />
                  <li data-target="#myCarousel3" data-slide-to={7} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_8.jpg"
                      alt="Hương Tu Hú"
                      width={300}
                      height={800}
                    />
                  </div>
                  <div className={`item`}>
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_1.jpg"
                      alt="Hương Bài Quảng"
                      width={300}
                      height={800}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_2.jpg"
                      alt="Hương"
                      width={300}
                      height={800}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_3.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={800}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_4.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={800}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_55.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={800}
                    />
                  </div>

                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_6.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={800}
                    />
                  </div>

                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content3/gth3_7.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={800}
                    />
                  </div>

                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel3"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel3"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          {/* end GT3 */}

          <div className={st.gth4}>
            {/* image slide show */}
            <div className={st.imageContainer}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
              <div
                id="myCarousel4"
                className="carousel slide"
                data-ride="carousel"
                // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
              >
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel4" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel4" data-slide-to={1} />
                  <li data-target="#myCarousel4" data-slide-to={2} />
                  <li data-target="#myCarousel4" data-slide-to={3} />
                  <li data-target="#myCarousel4" data-slide-to={4} />
                  <li data-target="#myCarousel4" data-slide-to={5} />
                  <li data-target="#myCarousel4" data-slide-to={6} />
                  <li data-target="#myCarousel4" data-slide-to={7} />
                  <li data-target="#myCarousel4" data-slide-to={8} />
                  <li data-target="#myCarousel4" data-slide-to={9} />
                  <li data-target="#myCarousel4" data-slide-to={10} />
                  <li data-target="#myCarousel4" data-slide-to={11} />
                  <li data-target="#myCarousel4" data-slide-to={12} />
                  <li data-target="#myCarousel4" data-slide-to={13} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/TrongNguyenLieu.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>
                        Có vườn trồng <br /> thảo mộc
                      </h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/DaoReRung.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Đào rễ rừng</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/NhapNguyenLieu.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Nhập nguyên liệu không thể trồng</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/ThuHoachNguyenLieu1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>
                        Thu hoạch <br /> nguyên liệu
                      </h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/XuLiNguyenLieu.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Xử lí nguyên liệu</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/PhoiKho.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>
                        Phơi khô <br /> nguyên liệu
                      </h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/botmin.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Máy bột mịn</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/TronBot.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Trộn bột</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/congnghehiendai.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Sản xuất hiện đại</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/SanPhamMinDep.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>
                        Thành phẩm <br /> mịn, đẹp
                      </h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/phoinhang1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>
                        Phơi nhang <br /> ngoài trời
                      </h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/PhoiNhang2.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>
                        Phơi nhang <br /> ngoài trời
                      </h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/KiemTraChatLuong1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Kiểm tra chất lượng</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content4/DongGoi.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Đóng gói</h5>
                    </div>
                  </div>
                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel4"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel4"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className={st.textContainer}>
              <h2>QUY TRÌNH SẢN XUẤT</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <div className={st.contentTheP}>
                <ul>
                  Đối với mỗi loại nhang, thì nguyên liệu đầu vào sẽ khác nhau, có loại chúng tôi
                  phải nhập tinh bột về, còn có loại thì thuê người đào gốc, rễ rồi sau đó cắt nhỏ,
                  máy bột, phơi khô cho đến khi bột mềm mịn có thể trộn với các nguyên liệu khác
                  được.
                  <li>Quy Trình sản xuất như sau:</li>
                  <ul>
                    <li>
                      {' '}
                      <strong>Bước 1:</strong> Với tỉ lệ các nguyên liệu đã được nghiên cứu, sẽ được
                      cho vào máy trộn, đúng với lượng nước nhất định.
                    </li>
                    <li>
                      {' '}
                      <strong>Bước 2:</strong> Sau khi bột được trộn đều khoản 15 phút, chúng ta sẽ
                      cho bột ra và đem đi sản xuất Nhang
                    </li>
                    <li>
                      {' '}
                      <strong>Bước 3:</strong> Với công nghệ hiện đại, để sản xuất cây nhang ngày
                      nay đã có máy móc hiện đại, hỗ trợ việc sản xuất cây nhang thẳng, đều, và rất
                      đẹp
                    </li>
                    <li>
                      {' '}
                      <strong> Bước 4:</strong> Cho bột vào máy, chuẩn bị tăm nhang sau đó máy sẽ
                      thực hiện.
                    </li>
                    <li>
                      {' '}
                      <strong>Bước 5:</strong> Vì tăm nhang là 100% nhập về, mà chúng tôi là hộ kinh
                      doanh nhỏ, hàng tăm nhập về đến tay thì khá là hên xui, lúc tăm tốt, lúc tăm
                      xấu. Nếu tăm xấu thì làm rất cực, vì máy sẽ đứng khi gặp tăm lỗi, cũng như
                      chúng tôi phải bỏ những cây tăm hư, rất tốn thời gian và chi phí cho phần tăm.
                      Chúng tôi rất kĩ phần này vì không muốn cây nhang đi đến tay khách hàng có vấn
                      đề !{' '}
                    </li>
                    <li>
                      <strong>Bước 6:</strong> Sau khi máy đã sản xuất ra, thì chúng tôi sẽ xếp lên
                      vĩ phơi nhang, rồi phơi ở ánh nắng mặt trời (quá trình phơi nhang cũng là một
                      điều khó khăn, lúc nắng quá gắt nhang sẽ bị cong, lúc trời mưa thì nhang sẽ bị
                      mốc nếu không được phơi). Nhưng chúng tôi đã có nhiều kinh nghiệm, nắng gắt
                      thì cố gắng trở nhang và dồn lại, trời mưa thì có lò sấy nhang. Chúng tôi cố
                      gắng nhất có thể để sản xuất ra cây nhang chất lượng và đem đến cho &quot; cả
                      nhà Sạch &quot; những sản phẩm đạt hiểu quả an toàn cao nhất.{' '}
                    </li>
                    <li>
                      <strong>Bước 7: </strong> Tùy vào yêu cầu của khách hàng mà chúng tôi sẽ đóng
                      gói khác nhau, và đối với những loại nhang hút ẩm, chúng tôi sẽ có thêm gói
                      hút ẩm, để có thể bảo quản nhang tốt nhất.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          {/* end GT4 */}

          <div className={st.gth5}>
            <div className={st.textContainer}>
              <h2>CHẤT LƯỢNG VÀ ĐỘ TIN CẬY</h2>
              <i>
                <h5>
                  Hiện tại cơ sở sản xuất chỉ mới nhỏ lẻ, chưa đăng kí kinh doanh phức tạp và đem
                  sản phẩm đi kiểm định chất lượng, chất trong khói tạo ra để đảm bảo. Nhưng trong
                  tương lai phát triển thì bên nhà phân phối sẽ cung cấp đẩy đủ các thẩm định hương
                  rõ ràng. Ngoài ra, nếu có đơn vị Đại Lí nào muốn làm Đại Lí của cơ sở thì bên cơ
                  sở sản xuất Hương Thu Thảo sẵn sàng hỗ trợ tiền kiểm định sản phẩm.
                </h5>
              </i>
              <br />
              {/* <div className={st.overCacGiayChungNhan}>
                <div className={st.giaychungnhan}>
                  <p>Giấy chứng nhận Hương ...</p>
                  <div className={st.imageContainer}>
                    <Image
                      src="/home/avtProduct.png"
                      alt="Landscape picture"
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
                <div className={st.giaychungnhan}>
                  <p>Giấy chứng nhận Hương ...</p>
                  <div className={st.imageContainer}>
                    <Image
                      src="/home/avtProduct.png"
                      alt="Landscape picture"
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
                <div className={st.giaychungnhan}>
                  <p>Giấy chứng nhận Hương ...</p>
                  <div className={st.imageContainer}>
                    <Image
                      src="/home/avtProduct.png"
                      alt="Landscape picture"
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
                <div className={st.giaychungnhan}>
                  <p>Giấy chứng nhận Hương ...</p>
                  <div className={st.imageContainer}>
                    <Image
                      src="/home/avtProduct.png"
                      alt="Landscape picture"
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
                <div className={st.giaychungnhan}>
                  <p>Giấy chứng nhận Hương ...</p>
                  <div className={st.imageContainer}>
                    <Image
                      src="/home/avtProduct.png"
                      alt="Landscape picture"
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
                <div className={st.giaychungnhan}>
                  <p>Giấy chứng nhận Hương ...</p>
                  <div className={st.imageContainer}>
                    <Image
                      src="/home/avtProduct.png"
                      alt="Landscape picture"
                      width={250}
                      height={300}
                    />
                  </div>
                </div>
              </div> */}
              <div className={st.danhgiatukhachhang}>
                <i>
                  <h4 style={{ paddingLeft: '25px' }}>
                    Video tóm gọn các đánh giá của khách hàng từ cơ sở sản xuất.
                    <h6>
                      Mình sẽ cập nhật thêm video, bởi không thể up video quá lớn được hic hic
                    </h6>
                  </h4>
                </i>
                {/* <div className={st.videoRate}>
                  <video className={st.video} width="300px" height="350px" controls>
                    <source src="" type="video/mp4"></source>
                  </video>
                </div> */}
                {/* image slide show */}
                <div className={st.videoRate}>
                  {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
                  <div
                    id="myCarousel5"
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval="0"
                    // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
                  >
                    {/* Indicators */}
                    <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                      <li data-target="#myCarousel5" data-slide-to={0} className="active" />
                      <li data-target="#myCarousel5" data-slide-to={1} />
                      <li data-target="#myCarousel5" data-slide-to={1} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                      <div className={`item active  `}>
                        <video
                          src="/video/danhgia1.mp4"
                          className={st.video}
                          width="350px"
                          height="400px"
                          controls
                        ></video>
                      </div>
                      <div className="item">
                        <video
                          src="/video/danhgia2.mp4"
                          className={st.video}
                          width="300px"
                          height="350px"
                          controls
                        ></video>
                      </div>
                      <div className="item">
                        <video
                          src="/video/danhgia3.mp4"
                          className={st.video}
                          width="300px"
                          height="350px"
                          controls
                        ></video>
                      </div>

                      {/*  */}
                    </div>
                    {/* Left and right controls */}
                    <a
                      className="left carousel-control"
                      href="#myCarousel5"
                      data-slide="prev"
                      style={{ backgroundImage: 'none', color: '#ffb703' }}
                    >
                      <span className="glyphicon glyphicon-chevron-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#myCarousel5"
                      data-slide="next"
                      style={{ backgroundImage: 'none', color: '#ffb703' }}
                    >
                      <span className="glyphicon glyphicon-chevron-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* div over phần 5 */}
            </div>
          </div>
          {/* end GT5 đánh giá khách hàng */}

          <div className={st.gth6}>
            <div className={st.imageContainer}>
              {/* <video className={st.video} width="300px" height="350px" controls>
                <source src="" type="video/mp4"></source>
              </video> */}
              <div
                id="myCarousel6"
                className="carousel slide"
                data-ride="carousel"
                // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
              >
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel6" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel6" data-slide-to={1} />
                  <li data-target="#myCarousel6" data-slide-to={2} />
                  <li data-target="#myCarousel6" data-slide-to={3} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content6/nghiencuust0.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    {/* <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div> */}
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content6/nghiencuust1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    {/* <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div> */}
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content6/nghiencuust2.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    {/* <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div> */}
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content6/nghiencuust4.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    {/* <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div> */}
                  </div>

                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel6"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel6"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className={st.textContainer}>
              <h2>SÁNG TẠO VÀ NGHIÊN CỨU PHÁT TRIỂN</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <div className={st.contentTheP}>
                <ul>
                  {/* Như đã nói, chúng tôi chỉ là kinh doanh theo hộ gia đình nhỏ, mô hình đầy đủ nhưng
                  chưa lớn. */}
                  <ul>
                    <strong>
                      <i> Đầu tiên chúng ta cùng tìm hiểu như thế nào là đầy đủ ?</i>
                    </strong>
                    <li>
                      Chúng tôi tự trồng một số loại cây có thể trồng trọt. ví dụ: cây bời lời, cây
                      hương lau, cây ngải cứu. v.v.v{' '}
                    </li>
                    <li>Chúng tôi thuê người đào rễ găng núi trong rừng về.</li>
                    <li>Chúng tôi tự mình cắt, phơi và máy chúng thành tinh bột.</li>
                    <li>
                      Chúng tôi tự mình nghiên cứu, trộn lẫn các loại bột để tạo ra một cây hương
                      chất lượng cao.
                    </li>
                    <li>Chúng tôi theo câu nói chất lượng tạo nên thương hiệu.</li>
                    <li>
                      Cuối cùng, chúng tôi lần lượt có những chứng nhận an toàn. (việc này khá tốn
                      tiền nên chúng tôi làm từng cái theo thời gian, mong các bạn có thể thông
                      cảm).
                    </li>
                  </ul>
                </ul>
                <>
                  Chúng tôi có quy trình, chúng tôi sản xuất để chính chúng tôi dùng, vậy nên trên
                  hết chúng tôi bảo đảm 2 chữ &quot;An Toàn&quot;.
                </>
              </div>
            </div>
          </div>
          {/* end GT6, sáng tạo và nghiên cứu phát triển */}

          <div className={st.gth7}>
            <div className={st.textContainer}>
              <h2>TIÊU CHUẨN AN TOÀN</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <div className={st.contentTheP}>
                <i>
                  <strong>Đầu tiên,chúng ta hãy tìm hiểu Hương như nào là không an toàn.</strong>
                </i>
                <ul>
                  <li>Khói hương gây hại thế nào cho đường hô hấp</li>
                  <ul>
                    <li>
                      Trên thị trường có nhiều loại hương, bao gồm hương nén, hương vòng, hương nụ…
                      Hương càng có mùi thơm, nguy cơ tẩm hóa chất độc hại càng cao.
                    </li>
                    <li>
                      “Giống như khói thuốc lá, khói từ hương tẩm hóa chất chứa các hoạt chất độc
                      hại như benzen, toluen, xylene… có nguy cơ gây hại đường hô hấp, có thể dẫn
                      đến ung thư”, bác sĩ Ngân cho biết.
                    </li>
                    <Link
                      href={
                        'https://vtc.vn/khoi-huong-gay-hai-the-nao-cho-duong-ho-hap-ar737851.html#:~:text=Tr%C3%AAn%20th%E1%BB%8B%20tr%C6%B0%E1%BB%9Dng%20c%C3%B3%20nhi%E1%BB%81u%20lo%E1%BA%A1i%20h%C6%B0%C6%A1ng%2C%20bao,ung%20th%C6%B0%20%E2%80%9D%2C%20b%C3%A1c%20s%C4%A9%20Ng%C3%A2n%20cho%20bi%E1%BA%BFt.'
                      }
                    >
                      Link tham khảo
                    </Link>
                  </ul>
                </ul>
                <i>
                  <strong>Một số tác động của khói hương đến sức khỏe:</strong>
                </i>
                <ul>
                  <li>Tăng triệu chứng hen, bệnh phổi tắc nghẽn mạn tính</li>
                  <li>Ảnh hưởng sức khỏe đường hô hấp</li>
                </ul>

                <i>
                  <strong>Vậy tiêu chuẩn an toàn mà chúng tôi có là gì ?</strong>
                </i>
                <ul>
                  <li>
                    Chúng tôi đảm bảo rằng hương chúng tôi <strong>BÁN</strong> cũng là hương chúng
                    tôi <strong>SỬ DỤNG</strong>.
                  </li>
                  <li>
                    Nguyên Liệu sẽ có những gì trong bột, chúng tôi sẽ không để rõ bao nhiêu bao
                    nhiêu, nhưng đảm bảo rằng thể hiện đầy đủ tất cả các nguyên liệu mà chúng tôi
                    trộn vào bột.
                  </li>
                  <li>
                    Chúng tôi sẽ dần dần mang hương của mình đi thử nghiệm và xin giấy chứng nhận an
                    toàn & bạn sẽ được thấy các giấy tờ đó ở phần trên kia.{' '}
                  </li>
                </ul>
              </div>
            </div>
            <div className={st.imageContainer}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
              <div
                id="myCarousel7"
                className="carousel slide"
                data-ride="carousel"
                // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
              >
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel7" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel7" data-slide-to={1} />
                  <li data-target="#myCarousel7" data-slide-to={2} />
                  <li data-target="#myCarousel7" data-slide-to={3} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content7/CNBaiQuangMandala1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content7/CNBaiQuangMandala2.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content7/CNBaiQuangMandala3.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom}`}
                      src="/home/content7/CNBaiQuangMandala4.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Chứng nhận từ 1 đại lí của chúng tôi.</h5>
                    </div>
                  </div>

                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel7"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel7"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          {/* end GT7 */}

          <div className={st.gth8}>
            <div className={st.imageContainer}>
              <Image
                className={`${st.imageGT8} ${st.zoom}`}
                src="/home/content8/HinhAnhHoTro.jpg"
                alt="Hình Ảnh Minh Họa"
                width={300}
                height={350}
              />
            </div>
            <div className={st.textContainer}>
              <h2>DỊCH VỤ KHÁCH HÀNG VÀ HỖ TRỢ</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <div className={st.contentTheP}>
                <div className={st.MuaTanNoi}>
                  <ul>
                    <p style={{ color: 'red' }}>
                      <strong>CÁC LỢI ÍCH KHI MUA TẠI CƠ SỞ SẢN XUẤT:</strong>
                    </p>
                    <ul>
                      <li>
                        Giá sản phẩm tại Xưởng sản xuất đương nhiên sẽ hấp dẫn hơn một phần nào đó
                        so với khi đã vận chuyển đi xa.
                      </li>
                      <li>
                        Sản phẩm chất lượng bởi chúng tôi biết cách bảo quản hương sau khi sản xuất.
                      </li>
                      <li>Lựa chọn đa dạng bởi tại cơ sở sẽ có rất nhiều loại và mùi nhang.</li>
                      <li>
                        Có thể khám phá nơi sản xuất để có trải nghiệm và hiểu rõ hơn về quy trình
                        sản xuất
                      </li>
                      <li>
                        Có chương trình tích điểm để được giảm giá hoặc nhận các ưu đãi từ cơ sở sản
                        xuất chúng tôi.
                      </li>

                      <li>
                        Khi mua số lượng lớn có thể được có ưu đãi đặc biệt hay có thể thương lượng
                        giá cả.
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className={st.VanChuyen}>
                  <ul>
                    <p style={{ color: 'red' }}>
                      <strong>CÁC LỢI ÍCH KHI MUA ONLINE HOẶC ĐẠI LÍ:</strong>
                    </p>
                    <ul>
                      <p style={{ color: '#0077b6' }}>
                        <u>
                          <strong>
                            Đặt hàng online tại cơ sản sản xuất (dịch vụ chuyển phát):{' '}
                          </strong>
                        </u>
                      </p>
                      <li>
                        <b>Tiện lợi:</b> Mua qua dịch vụ giao hàng (ship) cho phép bạn mua sản phẩm
                        từ xa mà không cần phải đến nơi sản xuất. Điều này rất tiện lợi, đặc biệt
                        nếu bạn ở xa hoặc không có thời gian để đi mua hàng trực tiếp.
                      </li>
                      <li>
                        <b>Đa dạng lựa chọn:</b> Bạn có thể mua sản phẩm từ nhiều nơi khác nhau trên
                        toàn quốc hoặc trên toàn thế giới thông qua các dịch vụ giao hàng. Điều này
                        mở rộng phạm vi lựa chọn của bạn.
                      </li>
                      <li>
                        <b>Sự thoải mái:</b> Bạn có thể thoải mái so sánh giá và chất lượng sản phẩm
                        từ nhiều nguồn khác nhau trước khi quyết định mua.
                      </li>
                    </ul>
                    <ul>
                      <p style={{ color: '#0077b6' }}>
                        <u>
                          <strong>Mua hay đặt tại cửa hàng đại lí của chúng tôi</strong>
                        </u>
                      </p>
                      <li>
                        <b>Chăm sóc khách hàng:</b> Đại lý thường cung cấp dịch vụ chăm sóc khách
                        hàng tốt hơn, bao gồm hỗ trợ, tư vấn và dịch vụ sau bán hàng. Bạn có thể
                        nhận được sự hỗ trợ tận tâm từ đại lý khi có vấn đề về sản phẩm hoặc dịch
                        vụ.
                      </li>
                      <li>
                        <b>Tính đáng tin cậy:</b> Đại lý thường được tín nhiệm và kiểm tra chất
                        lượng của sản phẩm trước khi bán. Điều này có thể giúp đảm bảo bạn mua sản
                        phẩm chất lượng và tránh những rủi ro không cần thiết.
                      </li>
                      <li>
                        <b>Thời gian giao hàng: </b>Đại lý thường có sẵn sản phẩm trong kho, do đó
                        thời gian giao hàng thường nhanh hơn so với việc mua từ xa nơi sản xuất và
                        sử dụng dịch vụ giao hàng.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end GT8 */}

          <div className={st.gth9}>
            <div className={st.textContainer}>
              <h2>HÌNH ẢNH VÀ PHƯƠNG TIỆN TRỰC QUAN</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <br />
              <div className={st.contentTheP}>
                <p>
                  <strong>Tên cơ sở sản xuất:</strong> Cơ Sở Sản Xuất Nhang Thu Thảo - Là cơ sở sản
                  xuất nhỏ theo kiểu hộ gia đình. Chúng tôi đang hướng đến phát triển và mở rộng lên
                  mạng xã hội để nhiều người được biết về hương thảo mộc, cũng như muốn tăng doanh
                  số bán hàng của gia đình lên. Mong có thể mang đến cho khách hàng một loại sản
                  phẩm Hương thảo mộc ưa chuộng.
                  <br />
                  <strong>Địa chỉ & vị trí: </strong> xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam
                  <br />
                  <strong>Thông tin liên hệ:</strong>{' '}
                  <Link href="/contact">Kích vào đây hoặc Kích trên thanh menu</Link>
                </p>
              </div>
            </div>
            {/* image slide show */}
            <div className={st.imageContainer}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
              <div
                id="myCarousel9"
                className="carousel slide"
                data-ride="carousel"
                // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
              >
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel9" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel9" data-slide-to={1} />
                  <li data-target="#myCarousel9" data-slide-to={2} />
                  <li data-target="#myCarousel9" data-slide-to={3} />
                  <li data-target="#myCarousel9" data-slide-to={4} />
                  <li data-target="#myCarousel9" data-slide-to={5} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila1.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila2.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila3.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila4.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila5.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="item">
                    <Image
                      className={st.imageGT1}
                      src="/home/content1/chungtoila6.jpg"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                  </div>

                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel9"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel9"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          {/* end GT9 */}

          <div className={st.gth10}>
            {/* image slide show */}
            <div className={st.imageContainer}>
              {/* <Image src="/home/avtProduct.png" alt="Landscape picture" width={250} height={300} /> */}
              <div
                id="myCarousel10"
                className="carousel slide"
                data-ride="carousel"
                // style={{ backgroundColor: '#faedcd', borderRadius: '100px' }}
              >
                {/* Indicators */}
                <ol className="carousel-indicators" style={{ bottom: '0px' }}>
                  <li data-target="#myCarousel10" data-slide-to={0} className="active" />
                  <li data-target="#myCarousel10" data-slide-to={1} />
                  <li data-target="#myCarousel10" data-slide-to={2} />
                  <li data-target="#myCarousel10" data-slide-to={3} />
                  <li data-target="#myCarousel10" data-slide-to={3} />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" style={{ boxShadow: '0px 10px 5px 5px grey' }}>
                  <div className={`item active  `}>
                    <Image
                      className={`${st.imageGT7} ${st.zoom10}`}
                      src="/home/content10/website.png"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Website giới thiệu sản phẩm.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom10}`}
                      src="/home/content10/Fanpage.png"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Fanpage facebook về nơi sản xuất.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom10}`}
                      src="/home/content10/Instagram.png"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Instagram để liên lạc.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom10}`}
                      src="/home/content10/Zalo.png"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Zalo để liên lạc.</h5>
                    </div>
                  </div>
                  <div className="item">
                    <Image
                      className={`${st.imageGT7} ${st.zoom10}`}
                      src="/home/content10/Whatsapp.png"
                      alt="Landscape picture"
                      width={300}
                      height={350}
                    />
                    <div className="carousel-caption" style={{ paddingBottom: '5px' }}>
                      <h5 className={st.captionImage}>Whatsapp để liên lạc.</h5>
                    </div>
                  </div>

                  {/*  */}
                </div>
                {/* Left and right controls */}
                <a
                  className="left carousel-control"
                  href="#myCarousel10"
                  data-slide="prev"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel10"
                  data-slide="next"
                  style={{ backgroundImage: 'none' }}
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className={st.textContainer}>
              <h2>LIÊN KẾT VÀ TƯƠNG TÁC</h2>
              <i>
                <h5>Cùng chúng tôi tìm hiểu nhé !</h5>
              </i>
              <p className={st.contentTheP}>
                <strong>Tên công ty:</strong> Cơ Sở Sản Xuất Nhang Thu Thảo - Là doanh nghiệp sản
                xuất tại gia đình nhỏ. Chúng tôi đang hướng đến phát triển và mở rộng lên mạng xã
                hội để nhiều người được biết về hương thảo mộc, cũng như muốn tăng doanh số bán hàng
                của gia đình lên. Mong có thể mang đến cho khách hàng một loại sản phẩm Hương thảo
                mộc ưa chuộng.
                <br />
                <strong>Địa chỉ & vị trí: </strong> xã Duy Sơn, huyện Duy Xuyên, tỉnh Quảng Nam
                <br />
                <strong>Thông tin liên hệ:</strong>{' '}
                <Link href="/contact">Kích vào đây hoặc Kích trên thanh menu</Link>
              </p>
            </div>
          </div>
          {/* end GT10 */}
        </LayoutContent>
      </>
    </>
  );
};

export default Home;
