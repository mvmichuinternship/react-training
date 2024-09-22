import React from "react";
import IconButton from "./basic-components/IconButton";

function Footer() {
  return (
    <div className="w-[80%] grid grid-cols-4 px-10 py-10">
      <div className="flex flex-col gap-y-2 justify-start items-start">
        <span className="text-2xl font-black">Farmiest!</span>
        <div className="flex flex-col gap-y-8">
          <span className="text-xs text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Quam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Quam. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Quam.
          </span>
          <span className="flex gap-x-2">
            <IconButton
              className={"w-fit px-3 py-3 bg-emerald-400 rounded-sm"}
              isIcon={true}
              icon={"icons/facebook.png"}
            />
            <IconButton
              className={"w-fit px-3 py-3 bg-emerald-400 rounded-sm"}
              isIcon={true}
              icon={"icons/twitter.png"}
            />
            <IconButton
              className={"w-fit px-3 py-3 bg-emerald-400 rounded-sm"}
              isIcon={true}
              icon={"icons/insta.png"}
            />
            <IconButton
              className={"w-fit px-3 py-3 bg-emerald-400 rounded-sm"}
              isIcon={true}
              icon={"icons/linkedin.png"}
            />
          </span>
        </div>
      </div>
      <div>
        <ul className="text-start text-sm font-extralight space-y-2">
          <li className="text-lg text-black">Link</li>
          <li>&gt;  My Account</li>
          <li>&gt;  Checkout</li>
          <li> &gt;  Wishlist</li>
          <li>&gt;  Shopping Cart</li>
        </ul>
      </div>
      <div>
        <ul className="text-start text-sm font-extralight space-y-2">
          <li className="text-lg  text-black">Information</li>
          <li>&gt;  About Us</li>
          <li>&gt;  Our Team</li>
          <li>  &gt; Contact Us</li>
          <li>&gt;  Blog</li>
        </ul>
      </div>
      <div>
        <ul className="text-start text-sm font-extralight space-y-2">
          <li className="text-lg text-black">Contact</li>
          <li>&gt; 1234 North Avenue , South West, IN 360001</li>
          <li>&gt;  johndoe@farmiest.com</li>
          <li> &gt;  +0123456789</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
