import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Hero.scss";
const Hero = ({ heroInfo }) => {
  const history = useHistory();

  return (
    <Fragment>
      <div id="homeHero">
        <Carousel
          id="hero--carousel"
          fade
          indicators={false}
          prevLabel=""
          nextLabel=""
          variant="dark"
          className="h-md-100"
        >
          {heroInfo &&
            heroInfo.length > 0 &&
            heroInfo.map((item, index) => {
              return (
                item && (
                  <Carousel.Item key={item.id || index} interval={5000}>
                        <img
                        loading="lazy"
                        className="d-block w-100"
                        src={require(`../../../../Assets/Images/${item.img}.webp`)?.default}
                        alt={item.title}
                        />
                        
                    <Carousel.Caption
                    style={{left: index === 0 ? "30%" : "50%"}}
                    >
                      <span className="hero--occasion">{item.occasion}</span>
                        <h1 className="hero--title animate__animated animate__tada animate__delay-0.8s animate__slow">{item.title}</h1>
                      <p className="hero--description">{item.description}</p>
                      <button onClick={() => history.push("/category/men")} className="hero--invit--btn animate__animated animate__bounce animate__delay-0.8s">Shop now</button>
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
    heroInfo: state.main?.staticData?.heroInfo,
  };
};
export default connect(mapStateToProps)(Hero);
