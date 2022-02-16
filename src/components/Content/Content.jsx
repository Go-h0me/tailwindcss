import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/desktop/check.svg";
import React from "react";
import {useSpring,animated} from 'react-spring'

const Content = () => {
  const customer = useSpring({customers:10245,from:{customers:0}})
  const card = useSpring({cards:12045,from:{cards:0}})
  
  return (
    <section className='md:flex-row md:flex'>
      <div className='ml-[70px] mr-[54px] flex text-bold bg-purple-600 flex-col items-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] md:w-[20%] '>
        <div className='flex items-start gap-8 mt-16'>
          <FaUser size={"22px"} className='mt-[12px]' />
          <div className='text-26'>
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className='font-semibold text-13 md-[36px] md:text-16'>Customers</p>
          </div>
        </div>
        <div className='flex items-start gap-8 md-16'>
          <BsFillCreditCardFill size={"22px"} className='mt-[12px]' />
          <div className='text-26'>
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className='font-semibold text-13 md:text-16'>Card Issued</p>
          </div>
        </div>
      </div>
      <div className='text-13 mt-[90px] flex flex-col text-bold w-[100%] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]'>
        <div className='check-content'>
          <img src={checkIconMobile} alt='' />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt='' />
          <p>No external fees</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt='' />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
