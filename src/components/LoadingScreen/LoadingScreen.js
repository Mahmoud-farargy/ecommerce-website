import React, { Fragment } from "react";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
    return (
        <Fragment>
            <div id="loadingScreen" className="page--loading fadeEffect flex-column">
                <span></span>
            </div>
        </Fragment>
    )
}

export default LoadingScreen;