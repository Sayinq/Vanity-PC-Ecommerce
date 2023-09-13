import React, {useState} from 'react';

function MenuButton() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <header className="flex items-center fixed top-0 justify-between w-full h-auto bg-black p-4 py-2 z-20">
        <div id="menu" className="md:hidden sm:flex p-4 text-xl hover:border-b-2" onClick={toggleDropdown}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
  
        {isDropdownOpen && (
          <div id="dropdown-menu" className="absolute top-16 right-0 mt-2 bg-white rounded-md shadow-lg">
            <ul className="list-none p-2">
              <li className="p-2 hover:bg-gray-200"><a href="#">Item 1</a></li>
              <li className="p-2 hover:bg-gray-200"><a href="#">Item 2</a></li>
              <li className="p-2 hover:bg-gray-200"><a href="#">Item 3</a></li>
            </ul>
          </div>
        )}
      </header>
    );
  }


export default MenuButton