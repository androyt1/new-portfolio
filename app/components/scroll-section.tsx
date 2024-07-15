"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {
                /* A return function for killing the animation on component unmount */
            }
            pin.kill();
        };
    }, []);

    return (
        <section className='overflow-hidden bg-[#111827] text-white '>
            <div ref={triggerRef}>
                <div ref={sectionRef} className='relative h-screen w-[400vw] flex'>
                    <div className=' h-screen w-[100vw] flex justify-center items-center text-white text-3xl bg-red-600'>
                        <h3>Section 1</h3>
                    </div>
                    <div className=' h-screen w-[100vw] flex justify-center items-center text-white text-3xl bg-green-600'>
                        <h3>Section 2</h3>
                    </div>
                    <div className=' h-screen w-[100vw] flex justify-center items-center text-white text-3xl bg-blue-600'>
                        <h3>Section 3</h3>
                    </div>
                    <div className=' h-screen w-[100vw] flex justify-center items-center text-white text-3xl bg-pink-600'>
                        <h3>Section 4</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;
