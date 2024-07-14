"use client";
import { useState, useEffect } from "react";

const NameSvg = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
        <svg
            width={isMobile ? 40 : 80}
            height={isMobile ? 40 : 80}
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
            className='animate-spin-slow'>
            <defs>
                <path
                    id='circlePath'
                    d='M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0'
                />
            </defs>

            <circle cx='100' cy='100' r='75' fill='none' stroke='#111827' />

            <text fill='white' fontSize='15' fontFamily='Arial'>
                <textPath href='#circlePath' startOffset='0'>
                    A g h o g h o v w i a A n d r e w A g h o g h o v w i a A n d r e w
                </textPath>
            </text>
        </svg>
    );
};

export default NameSvg;
