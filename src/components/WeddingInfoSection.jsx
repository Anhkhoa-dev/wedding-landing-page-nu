import title_image from "../assets/images/title.png";
import gallery01 from "../assets/images/image07.jpg";
import gallery02 from "../assets/images/image08.jpg";
import gallery03 from "../assets/images/image10.jpg";

const WeddingInfoSection = () => {
  return (
    <section id="wedding-info">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-title" data-aos="flip-left" data-aos-once="false">
              <img src={title_image} alt="" />
              <p>Trân Trọng Kính Mời</p>
            </div>
            <div className="image-gallery">
              <img src={gallery01} alt="image gallery 1" data-aos="zoom-in"
            data-aos-once="false" />
              <img src={gallery02} alt="image gallery 2" data-aos="zoom-in-up"
            data-aos-once="false"/>
              <img src={gallery03} alt="image gallery 3" data-aos="zoom-in-down"
            data-aos-once="false" />
            </div>
                <div className="wedding-details">
                  <div className="title-body" data-aos="flip-right" data-aos-once="false">
                    <h4 className="text-01">THAM DỰ TIỆC MỪNG LỄ VU QUY</h4>
                    <h5 className="text-02">Vào Lúc</h5>
                  </div>
                  <div className="wedding-time">
                    <div className="hour" data-aos="fade-right" data-aos-once="false">
                      <p>Đón khách 17:00</p>
                      <p>Khai tiệc 18:00</p>
                    </div>
                    <div className="month" data-aos="fade-up" data-aos-once="false">
                      <div className="day">Thứ 6</div>
                      <div className="day-second">26</div>
                      <div className="month1">Tháng 12</div>
                    </div>
                    <div className="year" data-aos="fade-left" data-aos-once="false">Năm 2025</div>
                  </div>
                  <div className="lunar-calendar" data-aos="fade-up-right" data-aos-once="false">
                    <p>( Tức Ngày 07 Tháng 11 Năm Ất Tỵ )</p>
                  </div>
                  <div className="title-footer" data-aos="fade-up-left" data-aos-once="false">
                    <p>BUỔI TIỆC ĐƯỢC TỔ CHỨC TẠI</p>
                  </div>
                  <div className="wedding-location" data-aos="zoom-in" data-aos-once="false">
                    <h3>NHÀ HÀNG HICHI</h3>
                    <p>Số 431, Phan Đình Phùng, Lộc Tiền, Bảo Lộc, Lâm Đồng</p>
                    <a className="btn-chiduong" href="https://www.google.com/maps?q=11.5493981,107.7734332" target="_blank">Xem Bản đồ</a>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfoSection;
