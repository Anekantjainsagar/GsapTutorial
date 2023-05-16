import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Test2 = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(ref.current, {
      x: 1000,
      duration: 10,
      scrollTrigger: {
        trigger: "#squre",
        start: "top 80%",
        end: "top 20%",
        markers: true,
        pin: true, // Pin the element till the end
        // If fixing another element then set pinSpacing to false
        scrub: true, // Agr scroll kroge to continue hoga nahi to nahi hoga
        // toggleClass: "text-white",
        // toggleActions:"onEnter onLeave onEnterBack onLeaveBack"
        // play restart reverse pause resume complete
      },
    });
  }, []);

  return (
    <div>
      <div className="bg-red-600 h-[90vh]"></div>
      <div className="bg-green-600 h-[90vh]">
        <div
          className="bg-yellow-400 h-[20vh] w-[20vh] font-bold text-xl flex items-center justify-center"
          ref={ref}
          id="squre"
        >
          HEY BRO
        </div>
      </div>
    </div>
  );
};

export default Test2;
