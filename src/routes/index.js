import React, { PureComponent,lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import FullPage from "../components/FullPage/FullPage";

// Import Routes Lazily
const Home = lazy(() => import("../routes/Views/Home/Home"));
const Cart = lazy(() => import("../routes/Views/Cart/Cart"));
const Category = lazy(() =>  import("../routes/Views/Category/Category"));
const Contact = lazy(() => import("../routes/Views/Contact/Contact"));
const Auth = lazy(() => import("../routes/Views/Authentication/Authentication"));
const ErrorPage = lazy(() => import("../routes/Views/ErrorPage/ErrorPage"));

class AppRoutes extends PureComponent {
    render(){
        return (
                <Suspense fallback={<LoadingScreen />}>
                    <Switch>
                        {/* Home */}
                        <Route exact path="/">
                            <FullPage >
                                <Home/>
                            </FullPage>
                        </Route>
                        {/* Cart */}
                        <Route path="/cart">
                            <FullPage>
                                <Cart/>
                            </FullPage>
                        </Route>
                        {/* Categories */}
                        <Route path="/category/:type">
                            <FullPage>
                                <Category />
                            </FullPage>
                        </Route>
                        {/* Contact us */}
                        <Route path="/contact">
                            <FullPage>
                                <Contact />
                            </FullPage>
                        </Route>
                        {/* Login/Sign up */}
                        <Route path="/auth/:authType" component={Auth}></Route>
                       <Redirect from="/auth" to="/auth/login" /> {/* Redirects user from /auth to /auth/login  */}
                        {/* Error Route */}
                       <Route path="*">
                            <FullPage>
                                <ErrorPage errorType = "404"/>
                            </FullPage>
                        </Route>
                    </Switch>
                </Suspense>
        )
    }
}

export default AppRoutes;

