import React, { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import { data } from './data';
import { FaArrowRight, FaBars, FaFacebook, FaInstagram, FaLinkedin, FaMinus, FaPlus, FaTimes, FaTwitter } from 'react-icons/fa';

const App = () => {
  const [dropDown, setDropDown] = useState(false);
  const [imgAppear, setImgAppear] = useState([true, false, false, false]);
  const [selected, setSelected] = useState(null)

  const selection = (i) =>{
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }


  const bgToggle = (index) => {
    const newImgAppear = imgAppear.map((appear, i) => i === index ? !appear : false);
    setImgAppear(newImgAppear);
  }  

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const handleLinkClick = () => {
    setDropDown(false);
  };

  return (
    <div>
      <div className='max-h-[10vh] mx-auto'>
        <div className='bg-[#7978ff]'>
          <img src='/images/bg-smatpay.png' alt='blue-template' className='opacity-[10%] lg:opacity-[4%] mx-auto h-[50rem] md:h-[36rem] w-full'/>
          <nav className='flex justify-between lg:justify-around items-center absolute top-0 w-full my-10 px-[2.5rem] lg:px-0 z-[2]'>
            <div>
              <a href='/'>
                <img src='/images/smat pay logo1.jpg' alt='company-logo' className='w-[3rem] md:w-[4rem] rounded'/>
              </a>
            </div>
            <button
              aria-label='Toggle menu'
              className='block lg:hidden text-white text-3xl hover:text-[#38c5ca]'
              onClick={() => setDropDown(!dropDown)}
              ref={menuRef}
            >
              {dropDown ? <FaTimes /> : <FaBars />}
            </button>
            <ul
              className={`${dropDown ? 'flex flex-col absolute top-[67px] pt-4 pb-4 left-0 w-full bg-[rgba(0,0,0,0.5)] mx-auto' : 'hidden'} lg:flex justify-between items-center gap-[25px]`}
              ref={menuRef}
            >
              <li>
                <a href='#home' className='text-white capitalize font-familyy hover:text-[#38c5ca]' onClick={handleLinkClick}>
                  home
                </a>
              </li>
              <li>
                <a href='#services' className='text-white capitalize font-familyy hover:text-[#38c5ca]' onClick={handleLinkClick}>
                  our services
                </a>
              </li>
              <li>
                <a href='#agent' className='text-white capitalize font-familyy hover:text-[#38c5ca]' onClick={handleLinkClick}>
                  become an agent
                </a>
              </li>
              <li>
                <a href='#faq' className='text-white uppercase font-familyy hover:text-[#38c5ca]' onClick={handleLinkClick}>
                  faq
                </a>
              </li>
              <li>
                <a href='#contact' className='text-white capitalize font-familyy hover:text-[#38c5ca]' onClick={handleLinkClick}>
                  contact us
                </a>
              </li>
            </ul>
            <a href='#' className='bg-white hidden lg:flex justify-between items-center gap-[10px] p-3 rounded-md'>
              <button className='capitalize text-[#7978ff]'>
                download app
              </button>
              <div className='text-[#7978ff]'>
                <FaArrowRight />
              </div>
            </a>
          </nav>
        </div>
      </div>
      <div className='mt-[4rem] lg:mt-[7rem] md:flex justify-between lg:justify-center items-center gap-[1rem] lg:gap-[4rem] md:px-[0.5' id='home'>
        <div>
          <div>
            <h1 className='text-white text-[1.8rem] lg:text-[2.5rem] md:text-[1.75rem] font-bold leading:-[2.5rem] md:leading-[2.7rem] lg:leading-[3.5rem] font-familyy text-center'>
              Manage and Pay Your 
              <br />Bills, All From One Place!
            </h1>
            <p className=' text-white leading-[1.35rem] lg:leading-[1.7rem] mt-5 font-familyy text-center text-[0.75rem] lg:text-base px-10 lg:pl-[1rem]'>
              Your Trusted VTU and Bill Payment Platform for Quick & <br />Seamless Transactions. Anywhere, Anytime!
            </p>
          </div>
          <div className='my-10 flex justify-evenly lg:justify-center items-center gap-[25px] md:ml-[1rem] lg:ml-0'>
            <a href='#' className='z-[1]'>
              <img src='/images/android-playstore.png' alt='android-playstore' className='h-[6vh]'/>
            </a>
            <a href='#' className='z-[1]'>
              <img src='/images/ios-appstore.png' alt='ios-appstore' className='h-[6vh]'/>
            </a>
          </div>
        </div>
        <img src='/images/phone-view.png' alt='app-phone-view' className='mx-auto md:mx-0 w-[20rem] md:w-[25rem]'/>
      </div>
      <div className='mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center w-full'>
        <p className='text-[#7978ff] font-familyy font-bold text-base mx-auto'>
          <span className='text-black font-normal'>Trusted by more than </span> <CountUp start={0} end={1000}/>+ <span className='text-black font-normal'> active<br/> users across the country</span>
        </p>
        <div className='flex justify-center gap-4 items-center w-full mt-10 md:mt-0'>
          <p className='text-[#7978ff] font-familyy font-bold text-[2rem]'>
            <CountUp start={0} end={1} delay={2}/>k
          </p>
          <p className='text-black capitalize'>rating<br/>users</p>
        </div>
        <div className='flex justify-center gap-4 items-center w-full mt-10 lg:mt-0'>
          <p className='text-[#7978ff] font-familyy font-bold text-[2rem]'>
            <CountUp start={0} end={20}/>k
          </p>
          <p className='text-black capitalize'>successful<br/>transactions</p>
        </div>
        <div className='flex justify-center gap-4 items-center w-full my-10'>
          <p className='text-[#7978ff] font-familyy font-bold text-[2rem]'>
            <CountUp start={0} end={90}/>%
          </p>
          <p className='text-black capitalize'>satisfied and<br/>happy clients</p>
        </div>
      </div>
      <div className='mx-auto w-full flex flex-col items-center justify-center mt-[2rem] md:mt-[5rem] mb-24 font-familyy'>
        <h2 className='text-2xl'>Why Choose <span className='text-[#7978ff] font-bold'>SmatPay</span></h2>
        <p className='mt-3 text-center text-[0.85rem] mx-4'>Your top payment platform with reliable user-service experience.</p>
        <div className='md:grid grid-cols-2 mt-5 items-center justify-center'>
          <div className='bg-[#F0F1F2] p-4 m-7 rounded-md max-w-[75%] mx-auto'>
            <h3 className='flex justify-center mb-2 font-semibold'>Pay bills on the go</h3>
            <div className='flex items-center justify-center gap-4'>
              <img src='images/tag.jpg' alt='reason-icon' className='w-[3.5rem] rounded-[50%]'/>
              <p className='text-[0.65rem] lg:leading-[1.15rem]'>
                Experience unparalleled convenience with SmatPay's 'Pay Bills on the Go' feature, allowing you to effortlessly manage and settle your bills anytime, anywhere. 
                Enjoy the freedom to stay on top of your financial commitments without being tied to a desk or burdened by paperwork.
              </p>
            </div>
          </div>
          <div className='bg-[#F0F1F2] p-4 m-7 rounded-md max-w-[75%] mx-auto'>
            <h3 className='flex justify-center mb-2 font-semibold'>Seamless Transaction</h3>
            <div className='flex items-center justify-center gap-4'>
              <img src='/images/bills.jpg' alt='reason-icon' className='w-[3.5rem] rounded-[50%]'/>
              <p className='text-[0.65rem] lg:leading-[1.15rem]'>
                At SmatPay, we prioritize delivering a seamless transaction experience that sets us apart. 
                Our platform is meticulously designed to ensure that every transaction, whether it's a VTU top-up or a bill payment, is executed effortlessly. 
                From a user-friendly interface to a streamlined process.
              </p>
            </div>
          </div>
          <div className='bg-[#F0F1F2] p-4 m-7 rounded-md max-w-[75%] mx-auto'>
            <h3 className='flex justify-center mb-2 font-semibold'>Swift and Secure</h3>
            <div className='flex items-center justify-center gap-4'>
              <img src='/images/security.jpg' alt='reason-icon' className='w-[3.5rem] rounded-[50%]'/>
              <p className='text-[0.65rem] lg:leading-[1.15rem]'>
                Our platform is engineered to ensure rapid transactions without compromising on safety. 
                With cutting-edge technology and robust security measures in place, we guarantee that your financial information remains confidential and protected. 
                Enjoy the efficiency of swift transactions on SmatPay.
              </p>
            </div>
          </div>
          <div className='bg-[#F0F1F2] p-4 m-7 rounded-md max-w-[75%] mx-auto'>
            <h3 className='flex justify-center mb-2 font-semibold'>User-Friendly Excellence</h3>
            <div className='flex items-center justify-center gap-4'>
              <img src='/images/user.jpg' alt='reason-icon' className='w-[3.5rem] rounded-[50%]'/>
              <p className='text-[0.65rem] lg:leading-[1.15rem]'>
                Navigating through our intuitive interface is designed to be effortless, ensuring that users of all backgrounds can easily access and utilize our services. 
                Choose SmatPay for a user-friendly experience that combines efficiency with ease, redefining how you manage your VTU and bills payments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#E6ECFD] h-[auto] font-familyy pt-5 mx-auto mb-10 pb-4' id='services'>
        <h3 className='text-2xl capitalize text-center mt-4 font-semibold'>our services</h3>
        <p className='mt-3 text-center text-[0.85rem] mx-4'>Our comprehensive suite of services encompasses seamless VTU transactions</p>
        <div className='md:grid grid-cols-2 items-center justify-center mt-10 lg:max-w-[70rem] mx-auto lg:gap-x-16'>
          <div className={`${imgAppear[0] ? 'bg-[#7978ff]' : 'bg-[rgba(255,255,255)]'} p-4 mx-4 rounded-md mb-16 min-h-[28.5rem]`} onClick={() => bgToggle(0)}>
            <h4 className={`${imgAppear[0] ? 'text-white' : 'text-black'} text-2xl text-semibold mb-5`}>Airtime Top-up</h4>
            <p className={`${imgAppear[0] ? 'text-white' : 'text-black'} text-thin`}>Now, topping up your mobile airtime has never been easier – whether you're on the go or at home. Say goodbye to the hassle of searching for physical recharge cards or dealing with complex codes</p>
            <div className={`${imgAppear[0] ? 'md:flex justify-end mt-[4.5rem]' : 'hidden'}`}>
                <img src='images/app-selection.png' alt='dashboard-icon' className='w-[10rem] lg:w-[13rem]'/>
            </div>
          </div>

        <div className={`${imgAppear[1] ? 'bg-[#7978ff]' : 'bg-[rgba(255,255,255)]'} p-4 mx-4 rounded-md mb-16 min-h-[28rem]`} onClick={() => bgToggle(1)}>
            <h4 className={`${imgAppear[1] ? 'text-white' : 'text-black'} text-2xl text-bold mb-5`}>Data Bundle Top-up</h4>
            <p className={`${imgAppear[1] ? 'text-white' : 'text-black'} text-thin`}>Experience the convenience of instant data top-ups with SmatPay, your go-to VTU and bill payment platform.</p>
            <div className={`${imgAppear[1] ? 'md:flex justify-end mt-[9rem]' : 'hidden'}`}>
                <img src='images/app-selection.png' alt='dashboard-icon' className='w-[10rem] lg:w-[13rem]'/>
            </div>
        </div>

        <div className={`${imgAppear[2] ? 'bg-[#7978ff]' : 'bg-[rgba(255,255,255)]'} p-4 mx-4 rounded-md mb-16 min-h-[27.5rem]`} onClick={() => bgToggle(2)}>
            <h4 className={`${imgAppear[2] ? 'text-white' : 'text-black'} text-2xl text-semibold mb-5`}>Electricity Bill</h4>
            <p className={`${imgAppear[2] ? 'text-white' : 'text-black'} text-thin`}>Our user-friendly interface allows you to effortlessly access and pay your electricity bills, putting the power of hassle-free transactions in your hands.</p>
            <div className={`${imgAppear[2] ? 'md:flex justify-end mt-[4.5rem]' : 'hidden'}`}>
                <img src='images/app-selection.png' alt='dashboard-icon' className='w-[10rem] lg:w-[13rem]'/>
            </div>
        </div>

        <div className={`${imgAppear[3] ? 'bg-[#7978ff]' : 'bg-[rgba(255,255,255)]'} p-4 mx-4 rounded-md mb-16 min-h-[27.5rem]`} onClick={() => bgToggle(3)}>
            <h4 className={`${imgAppear[3] ? 'text-white' : 'text-black'} text-2xl text-semibold mb-5`}>TV Subscription</h4>
            <p className={`${imgAppear[3] ? 'text-white' : 'text-black'} text-thin`}>Our platform seamlessly integrates TV subscription services, allowing you to effortlessly renew and manage your subscriptions with a few clicks.</p>
            <div className={`${imgAppear[3] ? 'md:flex justify-end mt-[4.5rem]' : 'hidden'}`}>
                <img src='images/app-selection.png' alt='dashboard-icon' className='w-[10rem] lg:w-[13rem]'/>
            </div>
        </div>
        </div>  
      </div>
      <div className='font-familyy mt-20'>
        <div>
            <h1 className='text-xl font-semibold text-center'>Here are <span className='text-[#7978ff]'>3 Simple Ways</span> to Get Started with <span className='text-[#7978ff]'>SmatPay</span></h1>
            <p className='text-center mt-3'>We’ve made it seamlessly easy to onboard on the SmatPay App</p>
        </div>
        <div className='md:max-w-[35rem] lg:flex justify-between gap-10 lg:max-w-max mx-auto'>
          <div>
            <div className='flex items-center justify-around mt-10 gap-5 lg:gap-0 p-3 m-5 bg-[#E6ECFD] rounded-md'>
              <img src='/images/install.jpg' alt='install & download' className='w-[3rem] h-[3rem] rounded-[50%]'/>
              <div>
                <h2 className='font-bold mb-2 text-[small]'>Download & Install the App</h2>
                <p className='text-[0.8rem]'>Go to your app store, search and download the “SmatPay” app, then install it.</p>
              </div>
            </div>
            <div className='flex items-center justify-around mt-10 gap-5 lg:gap-0 p-3 m-5 bg-[#E6ECFD] rounded-md'>
              <img src='/images/app-user.jpg' alt='install & download icon' className='w-[3rem] h-[3rem] rounded-[50%]'/>
              <div>
                <h2 className='font-bold mb-2 text-[small]'>Sign-up on the SmatPay App</h2>
                <p className='text-[0.8rem]'>Open the app and follow the quick sign-up process. It’s free and easy.</p>
              </div>
            </div>
            <div className='flex items-center justify-around mt-10 gap-5 lg:gap-0 p-3 m-5 bg-[#E6ECFD] rounded-md'>
              <img src='/images/app-billl.jpg' alt='user-icon' className='w-[3rem] h-[3rem] rounded-[50%]'/>
              <div>
                <h2 className='font-bold mb-2 text-[small]'>Fund Wallet and Pay Bills</h2>
                <p className='text-[0.8rem]'>Add funds to your account wallet and start paying your bills.</p>
              </div>
            </div>
          </div>
          <aside className='bg-[#E6ECFD] m-5 p-3 mt-10'>
            <img src='images/app-signup.png' alt='iphone-icon' className='lg:h-[15rem]'/>
          </aside>
        </div>
        <a href='#' className='bg-[#7978ff] flex justify-around items-center gap-[10px] p-3 rounded-md max-w-[12rem] mx-auto my-20'>
          <button className='capitalize text-white'>
            download app
          </button>
          <div className='text-white'>
            <FaArrowRight />
          </div>
        </a>
      </div>
      <div className='bg-[#7978ff] pb-10 mb-20 md:pb-0 md:flex justify-between items-end rounded-md lg:max-w-[60rem] mx-5 lg:mx-auto px-4 gap-4' id='agent'>
        <img src='/images/app-user-details.png' alt='app-user-details' className='hidden md:block h-[20rem] mt-[5rem]'/>
        <div className='font-familyy px-4'>
          <h1 className='text-white text-2xl font-bold text-center pt-10 mb-5'>Become a SmatPay Agent</h1>
          <p className='text-white text-center'>
            As a SmatPay agent, you'll be part of a dynamic platform that empowers you to offer VTU and bill payment services to your community. 
            Enjoy the benefits of a simple onboarding process, competitive commissions, and access to a wide range of services. 
            Become a valued partner in the SmatPay network by joining us as an agent and unlock a world of opportunities in financial services.
          </p>
          <a href='#' className='bg-white flex justify-around items-center gap-[10px] p-3 rounded-md max-w-[12rem] mx-auto my-10'>
          <button className='capitalize text-[#7978ff]'>
            get started now
          </button>
          <div className='text-[#7978ff]'>
            <FaArrowRight />
          </div>
        </a>
        </div>
      </div>

      <div id='faq' className='font-familyy mb-20 text-[0.85rem] md:text-xl'>
        <div>
          <h1 className='text-2xl font-bold text-center pt-10 mb-5'>Frequently Asked Questions</h1>
          <p className='text-center mx-5'>Want to know more about our services? Our FAQs section is here to help you with useful information about us.</p>
        </div>
        <div className='my-10'>
          {data.map((content, index) => {
            const { question, answer } = content;
            return (
              <div key={index} className={`${selected === index ? 'bg-[#7978ff]' : 'bg-white'} mx-auto max-w-[22rem] md:max-w-[35rem] lg:max-w-[45rem] rounded-md p-3`}>
                <div onClick={() => selection(index)} className={`flex items-center justify-between gap-4 text-xl border-2 outline-2 outline-offset-2 border-[#7978ff] rounded-md p-5 max-w[18rem] mx-auto`}>
                  <h1 className={`${selected === index ? 'text-white header' : 'text-black header'}`}>{question}</h1>
                  <span className={`${selected === index ? 'text-white' : 'text-black'}`}>
                    {selected === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <p className={`${selected === index ? 'max-h-[9999px] h-[auto] text-white' : 'max-h-[0] overflow-hidden text-black'}`}>{answer}</p>
              </div>
            );
          })}
        </div>
        <a href='' className='text-[#7978ff] font-medium flex justify-center gap-4 items-center mb-20'>Still have questions? Get in touch with us <span><FaArrowRight/></span></a>
      </div>

      <div className='mt-[4rem] lg:mt-[7rem] md:flex justify-between lg:justify-center items-center gap-[1rem] lg:gap-[4rem] md:px-[2] bg-[#d4e5f780] py-10 my-20 mx-4 rounded-md'>
        <div>
          <div>
            <p className=' text-[#7978ff] mt-5 font-familyy text-center text-base px-10 lg:pl-[1rem] font-bold'>
              Download The SmatPay App
            </p>
            <h1 className='text-black text-[1.8rem] lg:text-[2.5rem] md:text-[1.5rem] font-bold leading:-[2.5rem] md:leading-[2.7rem] lg:leading-[3.5rem] font-familyy text-center mt-5'>
              Join The New Billing & VTU <br/>Platform For Seamless <br/>Transactions
            </h1>
          </div>
          <div className='my-10 flex justify-evenly lg:justify-center items-center gap-[25px] md:ml-[1rem] lg:ml-0'>
            <a href='#' className='z-[1]'>
              <img src='/images/android-playstore.png' alt='android-playstore' className='h-[6vh]'/>
            </a>
            <a href='#' className='z-[1]'>
              <img src='/images/ios-appstore.png' alt='ios-appstore' className='h-[6vh]'/>
            </a>
          </div>
        </div>
        <img src='/images/phone-view.png' alt='app-phone-view' className='mx-auto md:mx-0 w-[20rem] md:w-[25rem]'/>
      </div>
      <div id='contact' className='font-familyy mb-20 md:flex justify-between items-center gap-10 px-10'>
        <div>
          <div>
            <h1 className='text-[#7978ff] font-semibold text-xl text-center mb-4 md:text-start'>Let’s get in touch</h1>
            <p className='text-center md:text-start'>We'd love to hear from you! Whether you have questions about our services, need assistance, or want to explore partnership opportunities, let's get in touch.</p>
            <a href="Email us: help@smatpay.com" className='flex justify-start mt-5 underline text-[#7978ff] md:text-start'>Email us: help@Smatpay.com</a>
            <a href="tel:+1234567890" className='flex justify-start underline text-[#7978ff] md:text-start'>Phone number: +234 123 456 7890</a>
          </div>
          <div className='flex justify-center md:justify-start items-center mx-auto gap-5 mt-5'>
            <a href='#'><FaFacebook className='text-[#7978ff]'/></a>
            <a href='#'><FaTwitter className='text-[#7978ff]'/></a>
            <a href='#'><FaInstagram className='text-[#7978ff]'/></a>
            <a href='#'><FaLinkedin className='text-[#7978ff]'/></a>
          </div>
        </div>
        <div>
          <img src='/images/anime.png' alt='contact-image' className='hidden md:block'/>
        </div>
      </div>
      <footer className='bg-[#222222] pb-5'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 justify-center items-center lg:items-start w-full font-familyy py-10 lg:px-7 border-white border-b-2 mb-2'>
          <div>
          <a href='/'>
            <img src='/images/smat pay logo1.jpg' alt='company-logo' className='w-[3rem] md:w-[4rem] rounded mx-auto'/>
          </a>
          </div>
          <div className='flex flex-col justify-center lg:items-start items-center gap-2'>
            <h1 className='text-xl font-semibold text-white mb-3'>Services</h1>
            <a href='#' className='text-white'>Airtime Top-up</a>
            <a href='#' className='text-white'>Data Bundles</a>
            <a href='#' className='text-white'>Utility Bill Payments</a>
            <a href='#' className='text-white'>Education Bill Payment</a>
            <a href='#' className='text-white'>TV subscriptions</a>
            <a href='#' className='text-white'>User Gifting</a>
          </div>
          <div className='flex flex-col justify-center lg:items-start items-center gap-2'>
            <h1 className='text-xl font-semibold text-white'>Company</h1>
            <a href='#' className='text-white'>About Us</a>
            <a href='#' className='text-white'>FAQs</a>
            <a href='#' className='text-white'>Contact Info</a>
          </div>
          <div className='flex flex-col justify-center lg:items-start items-center gap-2'>
            <h1 className='text-xl font-semibold text-white'>Legal</h1>
            <a href='#' className='text-white'>Privacy Policy</a>
            <a href='#' className='text-white'>Terms & Conditions</a>
            <a href='#' className='text-white'>Security</a>
          </div>
          <div className='flex flex-col justify-center lg:items-start items-center gap-2'>
            <div className='flex justify-center md:justify-start items-center mx-auto gap-5'>
              <a href='#' className='text-white'><FaFacebook className='text-[#7978ff]'/></a>
              <a href='#' className='text-white'><FaTwitter className='text-[#7978ff]'/></a>
              <a href='#' className='text-white'><FaInstagram className='text-[#7978ff]'/></a>
              <a href='#' className='text-white'><FaLinkedin className='text-[#7978ff]'/></a>
            </div>
            <a href='#' className='text-white'>Email: help@smatPay.com</a>
            <a href='#' className='text-white'>+234 123 456 7890</a>
          </div>
        </div>
        <p className='text-white px-7 lg:py-3'>&copy; 2024 SmatPay. All rights reserved.</p>  
      </footer>
      
    </div>
  )
}

export default App;
