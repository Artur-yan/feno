import React, {useState} from "react";
import searchSvg from '../../assets/icons/search.svg';
import duplicateSvg from '../../assets/icons/duplicate.svg';
import fireSvg from '../../assets/icons/fire.svg';
import dotesSvg from '../../assets/icons/dotes.svg';
import {ButtonBase} from "../../components/Form/Button";
import './style.scss';
import {Input} from "../../components/Form/Input";
import EmptyCart from "../../components/emptyCart";
import {Products} from "../../static";
import IconBox from "../../components/iconBox";
import {ProductCartSm} from "../../components/carts";
import {Link} from "react-router-dom";
import Paths from "../../routes/paths";

export const Orders = function ({className}) {

  const [activeTab, setActiveTab] = useState(0)
  const [tabs] = useState([
    {
      name: 'Recent Orders',
      key: 'recent'
    },
    {
      name: 'Past Orders',
      key: 'past'
    }
  ])

  return (
    <div className={`${className} orders`}>
      <h2>Hello, this is your
        In Transit Order</h2>
      <Input placeholder='Search Mockups, Logos ...' icon={searchSvg} isSearch={true}/>
      <div className="orderStatusTab">
        {tabs.map((item, index) => {
          return <div key={index} onClick={() => setActiveTab(index)} className={`tabItem ${index === activeTab ? 'active' : ''}`}>
            {item.name}
          </div>
        })}
      </div>
      {tabs[activeTab].key === 'recent' &&
        <div className="orderSection">
          {Products.map((product, index) => {
            return product.type === 'recent' && (
              <EmptyCart>
                <>
                  <div className='ordersOrder'>
                    <ProductCartSm {...product}/>
                    <div className="G-ml-auto">
                      <IconBox icon={dotesSvg} borderRadius={50} backgroundColor={'#374151'} size={28}/>
                    </div>
                  </div>
                  <div className="orderAction">
                    <ButtonBase classes='P-btn-primary sm G-with-100' showArrow={true}>
                      Track this delivery
                    </ButtonBase>
                    <ButtonBase classes='P-btn-link sm G-with-100'>
                      <Link to={Paths.TRANSACTIONS}>
                        View Transaction Details
                      </Link>
                    </ButtonBase>
                  </div>
                </>
              </EmptyCart>
            )
          })}
      </div>
      }
      {tabs[activeTab].key === 'past' &&
	    <div className="orderSection">
        {Products.map((product, index) => {
          return product.type === 'past' && (
            <EmptyCart>
              <>
                <div className='ordersOrder'>
                  <ProductCartSm {...product}/>
                  <div className="G-ml-auto">
                    <IconBox icon={dotesSvg} borderRadius={50} backgroundColor={'#374151'} size={28}/>
                  </div>
                </div>
                <div className="orderAction">
                  <ButtonBase classes='P-btn-primary sm G-with-100' showArrow={true}>
                    Track this delivery
                  </ButtonBase>
                  <ButtonBase classes='P-btn-link sm G-with-100'>
                    <Link to={Paths.TRANSACTIONS}>
                      View Transaction Details
                    </Link>
                  </ButtonBase>
                </div>
              </>
            </EmptyCart>
          )
        })}
	    </div>
      }
    </div>
  )
};