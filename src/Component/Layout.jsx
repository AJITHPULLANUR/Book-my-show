import React from "react";
import logos from "./Logo/PngItem_5784441.png";

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="fulldiv">
      <nav >
        <div className="firstbar">
          <div className="firstpart">
            <Link to="/">
              <img width="100px" src={logos} alt="" />
            </Link>

            <input
              className="inputfield"
              type="text"
              placeholder="Search for Movies,Events,Sports,Plays & Activities"
            />
          </div>

          <div className="lastbar">
            <select className="citys" name="" id="">
              <option value="">Manjeri</option>
              <option value="">Nilambur</option>
              <option value="">Calicut</option>
              <option value="">Malappuram</option>
              <option value="">Banglore</option>
              <option value="">Ladak</option>
              <option value="">Goa</option>
            </select>

            <input className="sign" type="button" value="Sign In" />
          </div>
        </div>

        <div className="firstmain">
          <div className="firstdiv">
            <Link to="/"></Link>
            <Link className="options" to="Movies">
              Movies
            </Link>
            <Link className="options" to="Stream">
              Stream
            </Link>
            <Link className="options" to="Events">
              Events
            </Link>
            <Link className="options" to="Plays">
              Plays
            </Link>
            <Link className="options" to="Sports">
              Sports
            </Link>
            <Link className="options" to="Activities">
              Activities
            </Link>
            <Link className="options" to="Buzz">
              Buzz
            </Link>
          </div>

          <div className="listdiv">
            <Link className="options" to="Listyourshow">
              ListYourshow
            </Link>
            <Link className="options" to="Corporates">
              Corporates
            </Link>
            <Link className="options" to="Offers">
              Offers
            </Link>
            <Link className="options" to="Gifts">
              Gifts Cards
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
