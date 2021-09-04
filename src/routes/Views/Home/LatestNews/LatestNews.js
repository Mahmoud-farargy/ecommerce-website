import React, { Fragment } from "react";
import "./LatestNews.scss";
import { connect } from "react-redux";
import LatestNewsItem from "./LatestNewsItem/LatestNewsItem";

const LatestNews = (props) => {
    const {staticData} = props;
    const latestNews = staticData.latestNews;
    return (
        <Fragment>
            <div id="latestNews">
                    <div className="c--container">
                     <h2 className="section--title">Latest News</h2>
                    {/* news */}
                    <div className="news--list row">
                        {
                            latestNews && latestNews.length > 0 &&
                            latestNews.map((item, index) => item && <LatestNewsItem key={item.id || index } item={item} />)
                        }   
                    </div>

                    </div>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        staticData: state.main.staticData
    }
}
export default connect(mapStateToProps)(LatestNews);