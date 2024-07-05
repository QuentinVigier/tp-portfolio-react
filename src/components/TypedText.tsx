import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
    const typedElement = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedElement.current) {
            const typed = new Typed(typedElement.current, {
                strings: ["Designer", "Developer", "Freelancer", "Photographer"],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
            });

            // Clean up the effect
            return () => {
                typed.destroy();
            };
        }
    }, []);

    return <span className="typed" ref={typedElement}></span>;
};

export default TypedText;
