import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Expo, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Splash = () => {
  const { innerWidth } = window;

  const span = useRef([]);
  const spanMain = useRef([]);
  const circle = useRef(null);
  const splash = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const creative = useRef([]);
  const web = useRef(null);
  const img = useRef([]);

  let timeline = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(circle.current, {
      duration: 8,
      rotate: 1800,
      ease: Power2.easeInOut,
    });
    timeline
      .to(span.current, {
        y: -100,
        duration: 2,
        delay: 1.5,
        stagger: 0.5,
        ease: Power2.easeInOut,
      })
      .fromTo(
        spanMain.current,
        {
          x: 600,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: -3,
          stagger: 0.25,
          ease: Power2.easeOut,
        }
      )
      .to(splash.current, {
        height: 0,
        delay: -1.5,
        duration: 2,
        ease: Expo.easeInOut,
      })
      .to(second.current, {
        height: "100%",
        delay: -2,
        duration: 2,
        ease: Expo.easeInOut,
      })
      .to(third.current, {
        height: "100%",
        delay: -1.8,
        duration: 2,
        ease: Expo.easeInOut,
      })
      .fromTo(
        creative.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
        }
      )
      .fromTo(
        web.current,
        { width: "0%" },
        innerWidth < 550
          ? { width: "45%", duration: 1, delay: -0.5, ease: Power2.easeInOut }
          : { width: "31%", duration: 1, delay: -0.5, ease: Power2.easeInOut }
      )
      .to("#headline", {
        x: 5,
        scrollTrigger: {
          trigger: "#content",
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      })
      .fromTo(
        "#tagline",
        { width: "0%" },
        innerWidth < 550
          ? {
              width: "95%",
              scrollTrigger: {
                trigger: "#content",
                start: "top 100%",
                end: "top 50%",
                scrub: true,
              },
              ease: Power2.easeInOut,
            }
          : {
              width: "40%",
              scrollTrigger: {
                trigger: "#content",
                start: "top 90%",
                end: "top 30%",
                scrub: true,
              },
              ease: Power2.easeInOut,
            }
      )
      .fromTo(
        img.current,
        { rotate: -20 },
        innerWidth < 550
          ? {
              rotate: 0,
              scrollTrigger: {
                trigger: "#content",
                start: "top 80%",
                end: "top 40%",
                scrub: true,
              },
              stagger: 0.25,
              ease: Expo.easeInOut,
            }
          : {
              rotate: 0,
              scrollTrigger: {
                trigger: "#content",
                start: "top 50%",
                end: "top 20%",
                scrub: true,
              },
              stagger: 0.25,
              ease: Expo.easeInOut,
            }
      )
      .fromTo(
        "#about",
        { x: -100, opacity: 0 },
        innerWidth < 550
          ? {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: "#content",
                start: "top 60%",
                end: "top 0%",
                scrub: true,
              },
              stagger: 0.25,
              ease: Expo.easeIn,
            }
          : {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: "#content",
                start: "top 75%",
                end: "top 45%",
                scrub: true,
              },
              stagger: 0.25,
              ease: Expo.easeIn,
            }
      );
  }, [timeline]);

  return (
    <>
      <div className="h-[100vh] relative w-[100vw]">
        <div
          ref={splash}
          className="absolute bg-[#383838] h-[100%] w-[100%] flex flex-col py-3 justify-between items-center"
        >
          <div className="text-white relative text-center h-[8vh] md:w-[25vw] mobile:w-[50vw] overflow-hidden">
            <span
              ref={(element) => {
                span.current[0] = element;
              }}
              className="absolute block w-[100%] text-center"
            >
              DESIGN PORTFOLIO
            </span>
            <br />
            <span
              ref={(element) => {
                span.current[1] = element;
              }}
              className="absolute block w-[100%] text-center"
            >
              2023
            </span>
          </div>
          <h1 className="text-white relative h-[20vh] md:w-[35vw] mobile:w-[75vw] flex flex-row justify-center md:text-5xl mobile:text-3xl font-semibold overflow-hidden">
            <div
              ref={(element) => {
                spanMain.current[0] = element;
              }}
              className="block mx-[5px]"
            >
              Anekant
            </div>
            <div
              ref={(element) => {
                spanMain.current[1] = element;
              }}
              className="block mx-[8px] text-[#14cf93]"
              // style={{ fontFamily: "Cedarville Cursive" }}
            >
              Jain
            </div>
            <div
              ref={(element) => {
                spanMain.current[2] = element;
              }}
              className="block mx-[5px]"
            >
              is
            </div>
            <div
              ref={(element) => {
                spanMain.current[3] = element;
              }}
              className="block mx-[5px]"
            >
              a
            </div>
          </h1>
          <div className="text-white">
            <img
              ref={circle}
              src="/loading.png"
              className="md:w-[2vw] mobile:w-[8vw] mb-3"
              alt=""
            />
          </div>
        </div>
        <div
          ref={second}
          className="absolute bg-[#14cf93] bottom-0 h-[0%] w-[100%]"
        ></div>
        <div
          ref={third}
          className="absolute bg-[#fcfaf8] bottom-0 h-[0%] w-[100%]"
        >
          <div className="relative opacity-75 rotate-45 md:block mobile:hidden">
            <div className="bg-[#383838] h-[50vh] w-[3vw] absolute bottom-72 right-60"></div>
            <div className="bg-[#383838] h-[50vh] w-[3vw] absolute bottom-72 right-44"></div>
          </div>
          <div
            id="content"
            className="fixed w-[100%] flex flex-row items-center justify-between mobile:py-6 mobile:px-8 md:px-20 md:py-9 text-xs"
          >
            <p className="border-b border-[#383838]">ANEKANT JAIN</p>
            <p className="border-b border-[#383838] md:block mobile:hidden">
              PLAYBOOK
            </p>
            <p className="border-b border-[#383838] md:block mobile:hidden">
              SOCIALS
            </p>
            <p className="border-b border-[#383838]">CONTACT</p>
          </div>
          <div className="text-[#383838] flex items-start mt-32 w-[100%] justify-evenly">
            <h1 className="md:text-[135px] mobile:text-[70px] mobile:px-4 md:px-0 font-semibold overflow-hidden">
              <p
                ref={(element) => {
                  creative.current[0] = element;
                }}
              >
                MERN Stack
              </p>
            </h1>
            <p
              ref={(element) => {
                creative.current[2] = element;
              }}
              className="md:block mobile:hidden uppercase overflow-hidden text-gray-400 mt-16 text-sm w-[16vw] text-center"
            >
              Currently I'm open to work
            </p>
            <p
              ref={(element) => {
                creative.current[3] = element;
              }}
              className="md:block mobile:hidden uppercase overflow-hidden text-gray-400 mt-16 text-sm w-[16vw] text-center"
            >
              I have 1 Year of Web Development Experience
            </p>
          </div>
          <div
            id="headline"
            className="float-right mobile:mx-2 md:mx-0 mr-6 mobile:w-[100vw] md:w-[92vw] mobile:mt-0 md:-mt-12 font-semibold flex mobile:flex-col md:flex-row mobile:items-end md:items-center"
          >
            <span
              // style={{ fontFamily: "Cedarville Cursive" }}
              ref={web}
              className="text-[#14cf93] mobile:mr-16 md:mr-0 w-[50vw] md:text-[155px] mobile:text-[70px] overflow-hidden"
            >
              Web
            </span>
            <span className="md:text-[155px] mobile:text-[68px] text-[#383838] overflow-hidden">
              <p
                ref={(element) => {
                  creative.current[1] = element;
                }}
              >
                Developer
              </p>
            </span>
          </div>
          <div className="clear-both"></div>
          <div className="mt-5"></div>
          <p
            id="tagline"
            className="md:text-2xl mobile:text-[1.1rem] float-right mobile:mr-2 md:mr-10 md:h-8 mobile:h-6 overflow-hidden"
          >
            MERN Stack Web & Android Developer
          </p>
          <div className="clear-both"> </div>
          <div className="bg-[#fcfaf8] mobile:pt-32 md:pt-16">
            <div className="flex mobile:flex-col-reverse md:flex-row items-center justify-evenly">
              <p
                className="md:mt-0 mobile:mt-80 md:text-start mobile:text-center md:w-[25%] mobile:w-[85%] mobile:text-xl md:text-3xl overflow-hidden"
                id="about"
              >
                I AM ANEKANT JAIN, I CREATE Unconventional YET FUNCTIONAL &
                VISUALLY PLEASING INTERFACES FOR THE MOBILE AND WEB WITH 1 YEAR
                OF EXPERIENCE IN WEB DEVELOPMENT.
              </p>
              <div className="relative md:w-[30%] mobile:w-[100%]">
                <img
                  ref={(element) => {
                    img.current[2] = element;
                  }}
                  className="md:w-[58%] mobile:w-[51%] absolute rounded-xl cursor-pointer grayscale hover:grayscale-0 transition-all -bottom-72 mobile:left-36 md:-left-4 z-20"
                  src="/bhopalHackathon.jpg"
                  alt=""
                />
                <img
                  ref={(element) => {
                    img.current[1] = element;
                  }}
                  className="md:w-[61%] mobile:w-[53%] absolute rounded-xl cursor-pointer grayscale hover:grayscale-0 hover:z-50 transition-all mobile:-bottom-52 mobile:left-20 md:-bottom-44 md:-left-20 z-10"
                  src="/indoreHackathon.jpeg"
                  alt=""
                />
                <img
                  ref={(element) => {
                    img.current[0] = element;
                  }}
                  className="md:w-[61%] mobile:w-[55%] absolute rounded-xl cursor-pointer grayscale hover:grayscale-0 hover:z-20 transition-all mobile:-bottom-40 md:-bottom-28 mobile:left-6 md:-left-36 z-0"
                  src="/jaipurHackathon.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="pt-20 bg-[#fcfaf8]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos aperiam delectus eius quas enim, assumenda debitis iusto
            ullam. Error quo laudantium necessitatibus? Quam similique animi
            beatae possimus asperiores explicabo voluptatum autem labore nisi
            reiciendis! Cumque, sunt architecto, consectetur illo natus fuga
            temporibus dolore autem hic nulla itaque repellat labore. Itaque
            perspiciatis in soluta, beatae iure quis minima dignissimos, rem
            reprehenderit laudantium quidem enim esse voluptates facilis animi
            fugiat labore et praesentium eveniet amet dolor saepe ab at. Et
            eaque quae ab omnis iste magnam quos, facilis, vel, repellat dolorum
            vero culpa aperiam distinctio mollitia repellendus. Alias optio quos
            odio illum quis perferendis non explicabo voluptatibus aspernatur
            animi quas laborum magni repellendus quisquam saepe corrupti
            voluptatem obcaecati laboriosam vel, reprehenderit temporibus ipsam
            enim nostrum. Corrupti quidem repellendus deleniti sed harum
            similique quibusdam quod, incidunt placeat illo. Veritatis delectus
            id voluptate. In asperiores ea quod doloribus quo. Praesentium
            molestias sequi soluta cumque omnis, quasi impedit inventore sunt
            hic quae. Vero officia vel hic ex? Aliquid, fuga fugit deleniti enim
            nihil cumque illo nam error odio dignissimos dolorum doloribus ut
            maiores, itaque, vel tempore eaque minus eius? Culpa facilis saepe
            sunt consequatur quisquam ea commodi maxime, cumque incidunt
            similique nihil ut corrupti eligendi architecto quos voluptas. Quam,
            fugiat hic nisi officiis dolores enim at accusantium et pariatur
            corporis esse excepturi eligendi laudantium id modi maxime amet
            ullam quae voluptate ipsam consectetur non suscipit, nostrum sunt.
            Repellat facilis earum quia temporibus iusto. Nesciunt odit suscipit
            illo. Minus suscipit veritatis dolor explicabo, dolorem minima in.
            Quisquam eaque, cum quae laudantium autem, inventore esse nisi
            quaerat, incidunt minima dignissimos nam et voluptatibus! Enim
            placeat earum similique esse vitae quos suscipit optio tenetur
            nostrum, pariatur veritatis officiis praesentium at delectus,
            accusantium corrupti rerum quam aut! Assumenda vero itaque, est
            accusamus ab magni a esse reprehenderit corporis dignissimos,
            voluptates iure atque at quia optio nam repellendus aliquam qui
            fugiat. Laboriosam, consequatur illum veritatis tempora consequuntur
            molestias id non debitis, omnis, est alias numquam accusamus
            molestiae accusantium porro explicabo voluptatem amet aspernatur eos
            illo doloribus eum sint? Vitae ut itaque fugiat dolorem veritatis
            delectus voluptas magni aut recusandae aliquid, quis ad rerum quos
            ipsa animi est, nisi reprehenderit aliquam atque illo maiores fuga
            odio fugit libero! Quo sint voluptatum temporibus cumque maiores
            optio soluta nihil corporis eaque mollitia minima necessitatibus
            amet, earum assumenda cum beatae sed vel aut fugit ab nam! Omnis
            suscipit odio molestiae asperiores in dolorum corporis esse pariatur
            culpa laboriosam porro beatae nesciunt, quos rem, corrupti
            dignissimos. Consequuntur dolor accusamus repudiandae, error
            consequatur, repellat pariatur natus, labore veritatis sunt modi
            dolores quia quibusdam blanditiis laboriosam ea ratione dolore totam
            unde porro eius architecto quas ab quasi. Modi temporibus ratione
            eum? Magnam dolore ab iste sit aspernatur hic id nulla dignissimos
            dolores sapiente porro, nisi ut ratione placeat delectus velit
            reprehenderit! Sapiente recusandae aperiam quod nam itaque
            consequuntur eligendi, necessitatibus ipsam! Consequatur alias,
            veniam quidem beatae, sit dolores cum perspiciatis voluptas, magnam
            numquam eos enim eius facilis doloribus et mollitia temporibus
            recusandae excepturi reiciendis distinctio impedit illo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Splash;
