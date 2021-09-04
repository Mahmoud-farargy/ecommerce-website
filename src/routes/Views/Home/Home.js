import React, { Fragment, useEffect } from "react";
import Hero from "./Hero/Hero";
import FasionPreview from "./FasionPreview/FasionRreview";
import WeekTrending from "./WeekTrending/WeekTrending";
import Testimonials from "./Testimonials/Testimonials";
import SimilarProductions from "./SimilarProducts/SimilarProducts";
import LatestNews from "./LatestNews/LatestNews";
import Features from "./Features/Features";
import { connect } from "react-redux";
import "./Home.scss";


const Home = ({changePageTitle}) => {
    useEffect(() => {
        changePageTitle("Home");
    }, [changePageTitle]);
    return (
        <Fragment>
            <div id="home">
                 <Hero />
                 <FasionPreview />
                 <WeekTrending />
                 <Testimonials />
                 <SimilarProductions />
                 <LatestNews />
                 <Features />
            </div>
        </Fragment>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        changePageTitle: (title) => dispatch({type: "changePageTitle", title}),
    }
}
export default connect(null, mapDispatchToProps)(Home);