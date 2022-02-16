import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import useDarkMode from "../../useDarkMode";

const NavBar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode,toggleDarkMode] = useDarkMode()
  
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className='flex items-center'>
      <div className='flex items-center'>
        <div className='mr-2 font-bold text-20'>NerdCard</div>
        {
          isDarkMode ?  (

            <BsSunFill
              size={"24px"}
              color='#e9c46a'
              className='cursor-pointer'
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
            ) : (
            <FaMoon
              size={"24px"}
              color='#e9c46a'
              className='cursor-pointer'
              onClick={() => toggleDarkMode(!isDarkMode)}
            />

          )
        }
      </div>
      <ul className='ml-auto font-semibold md:flex text-16 md:gap-10'>
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className='cursor-pointer'
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className='cursor-pointer'
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className='btn-hover'>Feature</li>
            <li className='btn-hover'>Menu</li>
            <li className='btn-hover'>Our story</li>
            <li className='btn-hover ml-28'>Contact</li>
          </>
        )}
        {openMenu && (
          <div className='absolute p-8 z-10 text-center text-black bg-white text-13 right-8'>
            <li className='cursor-pointer'>Feature</li>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Our story</li>
            <li className='cursor-pointer'>Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
