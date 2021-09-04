import React, { Fragment, useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { NavLink, useHistory } from "react-router-dom";
import CartIcon from "../../Generic/CartIcon/CartIcon";
import ScrollToTopBtn from "../../../components/Generic/ScrollToTopBtn/ScrollToTopBtn";
import Logo from "../../../design/Logo/Logo";

const HeaderMiddle = () => {
    const history = useHistory();
    const [expandMobileMenu, setMobileMenu] = useState(false);
    const [isAwayFromHero, setScollPosition] = useState(false);
    const [showSearchbar, setSearchbar] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const _mounted = useRef(true);
    const closeMenu = (e) => {
        e.persist();
        if(e.target.tagName === "A"){
            setMobileMenu(false);
        }
    }
    const menuList = (
        <nav className="flex-row" onClick={(e) => closeMenu(e)}>
            <ul className="flex-row">
                <NavLink activeClassName="active--route" exact tag="li" to="/">Home</NavLink>
                <NavLink activeClassName="active--route" exact tag="li" to="/category/men">Men</NavLink>
                <NavLink activeClassName="active--route" exact tag="li" to="/category/women">Women</NavLink>
                <NavLink activeClassName="active--route" exact tag="li" to="/category/baby">Baby collection</NavLink>
                <NavLink activeClassName="active--route" exact tag="li" to="/contact">Contact</NavLink>
            </ul>
        </nav>
    )
    useEffect(() => {
        if(_mounted.current){
            window.addEventListener("scroll", () => {
                const topLimit = 150;
                // window.scrollY < 200 && setScollPosition( window.scrollY > topLimit || document.body.scrollTop > topLimit || document.documentElement > topLimit );
                setScollPosition( window.scrollY > topLimit || document.body.scrollTop > topLimit || document.documentElement > topLimit );
            })
        }
        return () => {
            window.removeEventListener("scroll", ()=> {});
            _mounted.current = false;
        };
    }, [])
    const openSearchbar = () => {
        setSearchbar(true);
        expandMobileMenu && setMobileMenu(false);
    }
    return (
        <Fragment>
            {/* Move to top button */}
            {isAwayFromHero && <ScrollToTopBtn />}
            {/* Middle header */}
            <div className="header--middle--outer">
                <div id="headerMiddle" className={isAwayFromHero ? "fixedHeader" : ""}>
                    <div className="d--container" style={{boxShadow: isAwayFromHero && `0 10px 15px rgb(25 25 25 / 10%)`}}>
                        <div className="header--middle--inner flex-row">
                            <span onClick={() => history.push("/")} >
                                <Logo />
                            </span>
                            
                                <div className="nav--links desktop-only">
                                        {menuList}
                                </div>
                                <div className="menu flex-row">
                                    <ul className="flex-row">
                                    <span onClick={() => openSearchbar()}>
                                        <FiSearch />
                                    </span>
                                    <NavLink to="/auth/login">
                                        <RiUserLine />
                                    </NavLink>
                                    <CartIcon />
                                    </ul>
                                </div>
                        </div>
                    </div>

                    <div className="mobile--header mobile-only">
                        <div className="mobile--header--menu flex-column">

                            <button onClick={() => setMobileMenu(!expandMobileMenu)} className="flex-row">
                                <span>Menu</span>
                                <IoMdMenu />
                            </button>
                        {
                            expandMobileMenu &&
                            <div className="mobile--nav--links">
                                {menuList}
                            </div>   
                        } 
                        </div>
                    </div>

                </div>

            </div>
              {
                  showSearchbar &&
                <div id="mainSeachbar">
                    <div className="main--searchbar flex-row">
                        <div className="searchbar--inner">
                            <input autoFocus={true} type="text" placeholder="Search Here.." value={searchVal} onChange={(q) => setSearchVal(q.target.value)} />
                            <span onClick={() => setSearchbar(false)} className="seachbar--close--icon">&times;</span>
                        </div>
                    </div>
                    <div className="transparent--backdrop" onClick={() => setSearchbar(false)}></div>
                </div>
              }  
        </Fragment>
    )
}
export default HeaderMiddle;