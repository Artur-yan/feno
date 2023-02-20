import React, {useState} from "react";
import searchSvg from '../../assets/icons/search.svg';
import duplicateSvg from '../../assets/icons/duplicate.svg';
import fireSvg from '../../assets/icons/fire.svg';
import messageSvg from '../../assets/icons/message.svg';
import {ButtonBase} from "../../components/Form/Button";
import './style.scss';
import {Input} from "../../components/Form/Input";
import EmptyCart from "../../components/emptyCart";
import ProductSlider from "../../components/productSlider";
import {Products} from "../../static";
import IconBox from "../../components/iconBox";
import Paths from "../../routes/paths";

export const Profile = function ({className}) {
  return (
    <div className={`${className} profile`}>
      <h2>Hello, Samuel
        Welcome Back</h2>
      <p>Get the brush that’s working to give you a better smile and a longer life. </p>

      <Input placeholder='Search Mockups, Logos ...' icon={searchSvg} isSearch={true}/>
      <EmptyCart useBorders={true}>
        <div className='accountDashboard'>
          <p className="G-fs-15">This is your account dashboard.</p>
          <p className="G-fs-14">You can view your recent orders, edit your shipping and billing addresses, add or delete payment methods, and edit your password.</p>
          <ButtonBase classes='P-btn-primary sm' onClick={() => {}} loading={false}>
            Ok, I understand
          </ButtonBase>
        </div>
      </EmptyCart>
      <ProductSlider products={Products} viewAllLink={Paths.ORDERS}/>
      <div className="optionsSection">
        <EmptyCart>
          <div className='G-with-100'>
            <div className="iconWithDesc">
              <IconBox icon={duplicateSvg} borderRadius={8} backgroundColor={'#374151'} size={32}/>
              <div className="iconWithDescDesc">
                <span className="G-fs-16">Shipping & Billing Address</span>
                <span className="G-fs-14 G-gray-400">Work designers are riffing on</span>
              </div>
            </div>
            <div className="iconWithDesc">
              <IconBox icon={fireSvg} borderRadius={8} backgroundColor={'#374151'} size={32}/>
              <div className="iconWithDescDesc">
                <span className="G-fs-16">Payment Methods</span>
                <span className="G-fs-14 G-gray-400">Up-and-coming designers</span>
              </div>
            </div>
            <div className="iconWithDesc">
              <IconBox icon={fireSvg} borderRadius={8} backgroundColor={'#374151'} size={32}/>
              <div className="iconWithDescDesc">
                <span className="G-fs-16">Edit your password</span>
                <span className="G-fs-14 G-gray-400">Up-and-coming designers</span>
              </div>
            </div>
            <div className="G-line G-mb-24 G-mt-24"/>
            <div className="iconWithDesc">
              <IconBox icon={messageSvg} borderRadius={8} backgroundColor={'#374151'} size={32}/>
              <div className="iconWithDescDesc">
                <span className="G-fs-16">Payment Methods</span>
                <span className="G-fs-14 G-gray-400">Up-and-coming designers</span>
              </div>
            </div>
            <div className="iconWithDesc">
              <IconBox icon={messageSvg} borderRadius={8} backgroundColor={'#374151'} size={32}/>
              <div className="iconWithDescDesc">
                <span className="G-fs-16">Edit your password</span>
                <span className="G-fs-14 G-gray-400">Up-and-coming designers</span>
              </div>
            </div>
          </div>
        </EmptyCart>
      </div>
    </div>
  )
};