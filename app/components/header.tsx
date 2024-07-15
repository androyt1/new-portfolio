import Computer from "./compute_and_laptop";

const Header = () => {
    return (
        <div className='flex-1  min-h-[calc(100vh-80px)]  relative flex flex-col '>
            <div className='min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2   bg-gray-900'>
                <div className='h-[50vh] md:h-full md:12 px-5 lg:pl-36 flex flex-col items-start justify-center '>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg text-[#F7EBD8] '>
                        Hi there,
                    </h1>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mt-4  md:mt-4  font-buffalo text-balance text-[#faf9f9]'>
                        Aghoghovwia Andrew
                    </h1>
                    <p className='text-balance mt-2  md:mt-4  text-gray-200'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, deleniti.
                        Recusandae distinctio numquam consequatur ipsum quia eos et quibusdam vitae
                        in, iste illum nobis beatae eveniet dolor explicabo animi totam.
                    </p>
                    <div className='mt-4 flex space-x-5 w-full'>
                        <button className='bg-gradient-to-r from-[#95000A] via-[#F70413] to-[#8E000A] text-stone-50 w-[140px] md:w-1/3 py-2 md:py-3 rounded-lg font-normal md:font-semibold mt-4 md:mt-8 shadow-sm shadow-white/50'>
                            Download Cv
                        </button>
                        <button className='bg-gradient-to-r from-[#100F0F] via-[#001FE0] to-[#001897] text-stone-50 w-[140px] md:w-1/3 py-2 md:py-3 rounded-lg font-normal md:font-semibold mt-4 md:mt-8 shadow-sm shadow-white/50'>
                            Projects
                        </button>
                    </div>
                </div>
                <Computer />
            </div>
            <div className='absolute top-[20%] left-[20%] w-[200px] md:w-[400px] md:h-[200px] rounded-full  blur-[100px]'></div>
        </div>
    );
};

export default Header;
