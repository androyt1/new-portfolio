import NameSvg from "./name-svg";

const Navbar = () => {
    return (
        <nav className='w-full  h-20 sticky top-0 left-0 z-20  bg-gray-900 text-white flex items-center px-5'>
            <div className='max-w-[1280px] mx-auto flex justify-between items-center flex-1'>
                <div className=' flex items-center space-x-2'>
                    <span className='text-2xl font-semibold'>Androy</span>
                    <NameSvg />
                </div>
                <ul className='hidden sm:flex space-x-5 justify-end items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
