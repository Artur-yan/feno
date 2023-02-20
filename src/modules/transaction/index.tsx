import React from "react";
import {ButtonBase} from "../../components/Form/Button";
import EmptyCart from "../../components/emptyCart";
import {Badge} from "../../components/badge";
import {ProductCartSm} from "../../components/carts";
import payPalSvg from "../../assets/icons/payPal.svg";
import {Products} from "../../static";
import './style.scss';

export const Transaction = function ({className}) {
  return (
    <div className={`${className} transaction`}>
      <h2>Transaction Details</h2>
      <EmptyCart title='Order Details'>
        <div className='transactionDashboard'>
          <div className="item">
            <p>Status</p>
            <Badge type={'arrived'} text={'Arrived'}/>
          </div>
          <div className="item">
            <p>Invoice</p>
            <Badge type={'invoice'} text={'INV/20230131/MPL/3016132023'}/>
          </div>
          <div className="item">
            <p>Purchase Date</p>
            <span className='G-fs-16'>Feb 08, 2023</span>
          </div>
        </div>
      </EmptyCart>
      <EmptyCart title='Product Details'>
        <div className='orderSection'>
          <EmptyCart className='transactionOrder'>
            <>
              <div className='ordersOrder'>
                <ProductCartSm {...Products[0]}/>
              </div>

                <ButtonBase classes='P-btn-primary sm G-with-100 G-mt-16' showArrow={true}>
                  Buy Again
                </ButtonBase>
            </>
          </EmptyCart>
        </div>
      </EmptyCart>
      <EmptyCart title='Shopping Info'>
        <div className='transactionDashboard'>
          <div className="item">
            <p>Courier</p>
            <span className='G-fs-16'>FedEx</span>
          </div>
          <div className="item">
            <p>No Receipt</p>
            <Badge type={'invoice'} text={'INV/20230131/MPL/3016132023'}/>
          </div>
          <div>
            <p>Address</p>
            <span className='G-fs-16'>Samuel Alexander
              2972 Westheimer Rd. Santa Ana
              (406) 555-0120</span>
          </div>
          <ButtonBase classes='P-btn-link sm G-with-100 G-mt-16'>
            <span className='G-gray-400'>
              Track this delivery
            </span>
          </ButtonBase>
        </div>
      </EmptyCart>
      <EmptyCart title='Payment Details'>
        <div className='transactionDashboard'>
          <div className="item">
            <p>Payment Method</p>
            <img src={payPalSvg} alt=""/>
          </div>
          <div className="item">
            <p>Total Price (2 item)</p>
            <span className='G-fs-16'>$120</span>
          </div>
          <div className="item">
            <p>Total Shipping Cost (300 gr)</p>
            <span className='G-fs-16'>$25</span>
          </div>
         <div className='G-line G-mb-16'></div>
          <div className="item">
            <span>Total Spend</span>
            <span className='G-fs-16'>$145.00</span>
          </div>
        </div>
      </EmptyCart>
    </div>
  )
};