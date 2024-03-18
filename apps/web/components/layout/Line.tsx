'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Line() {
    const [isVisible, setIsVisible] = useState(false);
    const lineRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the section is intersecting the viewport, set isVisible to true
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5, // Adjust this value based on your needs
            }
        );

        // Start observing the section if lineRef.current is not null
        if (lineRef.current) {
            observer.observe(lineRef.current);
        }

        // Cleanup function
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Start the animation when isVisible becomes true
            controls.start({
                width: '95.625rem', // Animate to the desired final width
                // originX: , // Set the origin of the expansion to the right side
                transition: { duration: 20, ease: 'linear' }
            });
        }
    }, [isVisible, controls]);
    return (
        <div className='pl-44 h-44 bg-black flex justify-end'>  {/* Added justify-end */}
          <motion.div
            ref={lineRef}
            animate={controls}
            initial={{ width: 0 }}
            className="h-[0.35rem] bg-[#B2B2B2]"
          />
        </div>
      );
    }
