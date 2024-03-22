import  { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden md:hidden lg:hidden relative  bg-gray-800">
      <nav className="flex justify-between items-center p-4 bg-gray-900">
      <h1 className="text-[#BE6F50] text-[22px]">Epicure</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <RiCloseLine className="text-white text-3xl" />
            ) : (
              <RiMenuLine className="text-white text-3xl" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-20">
          <div className="bg-white w-full mx-5 p-4 rounded-lg">
            <div className="flex justify-end">
              <button onClick={toggleMenu}>
                <RiCloseLine className="text-gray-900 text-2xl" />
              </button>
            </div>
            <ul>
              <li className="py-2">Menu Item 1</li>
              <li className="py-2">Menu Item 2</li>
              <li className="py-2">Menu Item 3</li>
              <li className="py-2">Menu Item 4</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
