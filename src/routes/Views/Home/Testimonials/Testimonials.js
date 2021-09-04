import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import "./Testimonials.scss";

const Testimonials = ({ tesiStaticData }) => {
  return (
    <Fragment>
      <div id="testimonials">
        <Carousel
          id="tesiCarousel"
          data-ride="carousel"
          indicators={false}
          prevLabel=""
          nextLabel=""
          variant="dark"
        >
          {tesiStaticData &&
            tesiStaticData.length > 0 &&
            tesiStaticData.map((item, index) => {
              return (
                item && (
                  <Carousel.Item
                    key={item.id || index}
                    interval={5000}
                    className="flex-column"
                  >
                    <Carousel.Caption>
                      <div id="testimonial--item" className="blockquote flex-column">
                        <h2 className="testi--title">{item.title}</h2>
                        <p className="testi--description">{item.description}</p>
                        <div className="flex-column">
                          <div className="testi--author--info flex-row">
                            <img
                              className="testi--author--img"
                              loading="lazy"
                              src={require(`../../../../Assets/Products/${item.img}.webp`)?.default}
                              alt={item.title}
                            />
                            <div className="testi--author--inner flex-column">
                              <span className="testi--author--name">
                                {item.author}
                              </span>
                              <p className="testi--role">{item.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              );
            })}
        </Carousel>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    tesiStaticData: state.main?.staticData?.testimonials,
  };
};
export default connect(mapStateToProps)(Testimonials);
