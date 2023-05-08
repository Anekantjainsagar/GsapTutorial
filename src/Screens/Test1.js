import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Test1 = () => {
  const nav = useRef(null);
  const link = useRef([]);
  const left = useRef(null);
  const right = useRef(null);
  const foot = useRef(null);
  const btn = useRef(null);
  let timeline;

  useEffect(() => {
    timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline
      .fromTo(nav.current, { y: "-100%" }, { y: 0, ease: "bounce" })
      .fromTo(link.current, { opacity: 0 }, { opacity: 1, stagger: 0.5 })
      .fromTo(right.current, { x: "-100vw" }, { x: "0vw", ease: "power2.in" })
      .fromTo(left.current, { x: "-100vw" }, { x: "0vw", ease: "back" })
      .fromTo(foot.current, { y: "100%" }, { y: "0vh", ease: "elastic" })
      .fromTo(
        btn.current,
        { opacity: 0, scale: 0, rotate: 720 },
        { opacity: 1, scale: 1, rotate: 0 }
      );
  }, []);
  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div
        className="bg-red-500 text-white w-[100vw] z-10 text-2xl absolute top-0 flex flex-row justify-evenly py-5 items-center"
        ref={nav}
      >
        <p
          ref={(element) => {
            link.current[0] = element;
          }}
        >
          Link 1
        </p>
        <p
          ref={(element) => {
            link.current[1] = element;
          }}
        >
          Link 2
        </p>
        <p
          ref={(element) => {
            link.current[2] = element;
          }}
        >
          Link 3
        </p>
      </div>
      <div
        ref={left}
        className="bg-green-500 absolute left-0 px-10 h-[100vh] w-1/12 text-white text-2xl flex justify-center items-center"
      >
        Left
      </div>
      <button
        ref={btn}
        onClick={(e) => {
          e.preventDefault();
          timeline.timeScale(2);
          timeline.reverse();
        }}
        className="bg-blue-500 text-2xl hover:bg-blue-700 text-white font-bold py-3 px-9 rounded-full absolute top-[45%] left-[45%] transform:translate(-40%,-10%)"
      >
        Reverse
      </button>
      <div
        ref={right}
        className="bg-green-500 absolute right-0 px-10 h-[100vh] w-1/12 text-white text-2xl flex justify-center items-center"
      >
        Right
      </div>
      <div
        ref={foot}
        className="bg-blue-500 text-white text-2xl py-6 absolute bottom-0 w-full flex items-center justify-center"
      >
        Footer
      </div>
    </div>
  );
};

export default Test1;
