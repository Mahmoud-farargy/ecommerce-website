import React, { Fragment, useEffect } from "react";
import AppRoutes from "../../routes/index";
import { connect } from "react-redux";
import { Toaster } from 'react-hot-toast';


const App  = ({currentPageTitle, appConfig}) => {
    useEffect(() => { //You can also use Helmet to change tab title & meta description but fuck it, I used this instead.
        document.title = `${currentPageTitle && (currentPageTitle + " |")}  ${appConfig.title}`;
    }, [currentPageTitle, appConfig.title]);
    
    return (
        <Fragment>
            {/* Modals */}

            {/* Toast notifications */}
             <Toaster />
            {/* Routes */}
            <AppRoutes/>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        currentPageTitle: state.main.currentPage,
        appConfig: state.main.appConfig
    }
}
export default connect(mapStateToProps)(App);