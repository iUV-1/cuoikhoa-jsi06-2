import React from "react";
import ReactDOM from "react-dom/client";

import { Link as NextUILink, Container } from "@nextui-org/react";

import "./style/Test.css";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { TbBrandReddit } from "react-icons/tb";
import { CgMail } from "react-icons/cg";

const Test = () => {
  return (
    <Container className="TestContainer">
      <div className="TextColumn">
        <div className="TextColum">
          <div className="TextCardBody">
            <div className="TextTest">Stay in the loop</div>
            <div className="TextContainer">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </div>
          </div>
          <div className="TextBox">
            <div className="TextFull">
              <div className="TextInput">
                <input placeholder="Your email address" />
              </div>
            </div>
            <button className="Button TextButton" type="button">
              Sign up
            </button>
          </div>
        </div>
        <div className="CardBody">
          <div className="TextTest">Join the community</div>
          <div className="TextIcons">
            <a className="TextIn" href="https://twitter.com/opensea">
              <a className="TextInner">
                <FaTwitter className="reactIcon" />
              </a>
            </a>
            <a className="TextIn" href="https://www.instagram.com/opensea/">
              <a className="TextInner">
                <FaInstagram className="reactIcon" />
              </a>
            </a>
            <a className="TextIn" href="https://discord.com/invite/opensea">
              <a className="TextInner">
                <FaDiscord className="reactIcon" />
              </a>
            </a>
            <a className="TextIn" href="https://www.reddit.com/r/opensea">
              <a className="TextInner">
                <TbBrandReddit className="reactIcon" />
              </a>
            </a>
            <a className="TextIn" href="https://www.youtube.com/c/OpenSeaTV">
              <a className="TextInner">
                <FaYoutube className="reactIcon" />
              </a>
            </a>
            <a
              className="TextIn"
              href="https://www.tiktok.com/@opensea?lang=en"
            >
              <a className="TextInner">
                <FaTiktok className="reactIcon" />
              </a>
            </a>
            <a className="TextIn" href="https://opensea.io/blog/newsletter/">
              <a className="TextInner">
                <CgMail className="reactIcon" />
              </a>
            </a>
          </div>
        </div>
      </div>

      <div className="Card">
        <div className="CardBodey">
          {/* Icons */}
          <div>
            <img alt="" src="./img/download.png" />
          </div>
          <div className="TextTest">OpenSea</div>
          <div className="TextContainer">
            The world’s first and largest<br></br>
            digital marketplace for crypto<br></br>
            collectibles and non-fungible<br></br> tokens (NFTs). Buy, sell, and
            <br></br> discover exclusive digital items.
          </div>
        </div>
        <div className="CardBodo">
          <div className="CardContainer">
            <h3>Marketplace</h3>
            <div className="ul">
              <li>All NFTs</li>
              <li>Solana NFTs</li>
              <li>Art</li>
              <li>Collectibles </li>
              <li>Domain Names </li>
              <li>Music</li>
              <li>Photography</li>
              <li>Sports</li>
              <li>Trading Cards </li>
              <li>Utility </li>
              <li>Virtual Worlds</li>
            </div>
          </div>
          <div className="CardContainer">
            <h3>My Account</h3>
            <div className="ul">
              <li>Profile</li>
              <li>Favorites</li>
              <li>Watchlist</li>
              <li>My Collections</li>
              <li>Settings</li>
            </div>
            <h3>Stats</h3>
            <div className="ul">
              <li>Rankings</li>
              <li>Activity</li>
            </div>
          </div>
          <div className="CardContainer">
            <h3>Resources</h3>
            <div className="ul">
              <li>Help Center</li>
              <li>Platform Status</li>
              <li>Partners</li>
              <li>Gas-Free Marketplace</li>
              <li>Taxes</li>
              <li>Blog</li>
              <li>Docs</li>
              <li>Newsletter</li>
            </div>
          </div>
          <div className="CardContainer">
            <h3>Company</h3>
            <div className="ul">
              <li>About</li>
              <li>Careers</li>
              <li>Ventures</li>
              <li>Grants</li>
            </div>
          </div>
        </div>
      </div>
      <div className="CardContainere">
        <div className="p">
          <p>© 2018 - 2022 Ozone Networks, Inc</p>
        </div>
        <div>
          <a className="a">Privacy Policy</a>
          <a className="b">Terms of Service</a>
        </div>
      </div>
    </Container>
  );
};

export default Test;
