import "./App.css";
import Profile1 from "./assets/profile-4.png";
import html from "../src/assets/html.png";
import css from "../src/assets/css.png";
import tailwind from "../src/assets/tailwind.png";
import javascript from "../src/assets/javascript.png";
import reactlogo from "../src/assets/react.png";
import firebase from "../src/assets/firebase.png";
import github from "../src/assets/github.png";
import sass from "../src/assets/sass.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  AOS.init();
  return (
    <div className="max-w-7xl m-auto relative overflow-x-hidden lg:overflow-x-visible">
      <header data-aos-delay="300" data-aos="fade-down">
        <div className="container m-auto px-4 py-6 max-w-7xl bg-[#171F38]">
          <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Sharjeel Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                    <hr />
                  </a>
                </li>
                <li className="">
                  <a
                    href="#technologies"
                    className="text-gray-400 hover:text-white cursor-pointer  "
                  >
                    Technologies
                    <hr />
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutme"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                    <hr />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-2 m-auto lg:mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-2 lg:pt-12 lg:pb-12 sm:pt-20 flex flex-col lg:flex-row gap-16 text-center lg:text-left">
            <div
              className="order-2 lg:order-1"
              data-aos-delay="150"
              data-aos="fade-right "
            >
              <h2 className="font-bold text-4xl">Hello, I'm Sharjeel Ahmed</h2>
              <div>
                <h2 className="font-bold text-2xl md:text-4xl mt-1 gradiant-text">
                  Front-End Web Developer
                </h2>
              </div>
              <div>
                <p className="mt-4 mb-4 text-gray-400">
                  Passionate web developer crafting digital experiences with
                  innovation and precision. tuser-centric solutions
                  <br className="hidden md:block" />
                  with cutting-edge technology and meticulous attention to
                  detail.
                </p>

                <a
                  data-aos="zoom-out-up"
                  className="flex justify-center lg:block"
                  href="https://drive.usercontent.google.com/u/0/uc?id=1zjVobe0gFW0po0V0vvnJV8c0O-iR_fTz&export=download"
                >
                  <button class="px-8 shadow-gray-500 shadow-md py-4 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 flex justify-center">
                    Download resume {"\t"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5 animate-bounce "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div
              data-aos-delay="150"
              data-aos="fade-left"
              className="relative md:mb-4 md:bottom-16 flex-1 order-1 lg:order-2"
            >
              <div className="after:bg-[url('./assets/large-long.png')] after:bg-contain after:block after:bg-no-repeat md:after:w-[420px] after:w-[200px]  after:h-[320px] after:absolute after:top-0 md:after:-left-20 sm:after:-left-40 before:bg-[url('./assets/small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-6  md:before:right">
                <img
                  src={Profile1}
                  className="relative  z-10 w-[280px]  m-auto sm:w-[400px]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold ">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div
                data-aos="flip-left"
                class="md:m-12 bg-[#171F38]  shadow-[#209CE4] shadow-xl border-2  border-[#209CE4] rounded-xl hover:scale-110 duration-700 p-5"
              >
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Olx UI Clone</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed Responsive replica of OLX user interface using HTML,
                  Tailwind, and JavaScript.Demonstrated proficiency in front-end
                  web development and UI design principles.
                </p>
                <div class="pt-5 pb-2 flex gap-2 justify-center">
                  <a
                    target="blank"
                    href="https://github.com/Sharjeelcode/React-olxClone"
                  >
                    <button class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                      <svg
                        class="w-6 h-6 fill-neutral-50"
                        height="100"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 100 100"
                        width="100"
                        x="0"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          class="svg-fill-primary"
                          d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                        ></path>
                      </svg>
                      Github
                    </button>
                  </a>
                  <a
                    target="blank"
                    href="https://react-olx-clone-xi.vercel.app/"
                  >
                    <button class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                      preview
                    </button>
                  </a>
                </div>
              </div>
              <div
                data-aos="flip-right"
                class="md:m-12 bg-[#171F38] shadow-[#209CE4] shadow-xl border-[#209CE4]  border-2  rounded-xl hover:scale-110 duration-700 p-5"
              >
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">Airbnb Clone</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive Developed Airbnb Clone application using Tailwind
                  CSS, React.js and Firebase. Implemented user authentication,
                  property listings, and real-time updates
                </p>
                <div class="pt-5 pb-2 flex gap-2 justify-center">
                  <a
                    target="blank"
                    href="https://github.com/Sharjeelcode/airbnb-Clone"
                  >
                    <button class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                      <svg
                        class="w-6 h-6 fill-neutral-50"
                        height="100"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 100 100"
                        width="100"
                        x="0"
                        xmlns="http://www.w3.org/2000/svg"
                        y="0"
                      >
                        <path
                          class="svg-fill-primary"
                          d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                        ></path>
                      </svg>
                      Github
                    </button>
                  </a>
                  <a
                    target="blank"
                    href="https://profolio-2-airbnbclone.netlify.app/"
                  >
                    <button class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-4 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                      preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div>
              <div class="relative  flex flex-col justify-center py-4 mt-4 overflow-hidden">
                <div class="w-full max-w-5xl mx-auto px-4 md:px-6 ">
                  <div class="text-center">
                    <div
                      x-data="{}"
                      x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                      class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                    >
                      <ul
                        x-ref="logos"
                        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                      >
                        <li>
                          <img src={html} alt="HTML" className="w-16" />
                        </li>
                        <li>
                          <img src={css} alt="css" className="w-16" />
                        </li>
                        <li>
                          <img src={tailwind} alt="tailwind" className="w-16" />
                        </li>
                        <li>
                          <img
                            src={javascript}
                            alt="javascript"
                            className="w-16"
                          />
                        </li>
                        <li>
                          <img src={reactlogo} alt="react" className="w-16 " />
                        </li>
                        <li>
                          <img
                            src={firebase}
                            alt="firebase"
                            className="w-16 "
                          />
                        </li>
                        <li>
                          <img src={github} alt="git" className="w-16 " />
                        </li>
                        <li>
                          <img src={sass} alt="Sass" className="w-16 " />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span
                  data-aos="flip-right"
                  className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass & Bootstrap</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span
                  data-aos="flip-right"
                  className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Tailwind</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span
                  data-aos="flip-right"
                  className="w-[95%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">JavaScript</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span
                  data-aos="flip-right"
                  className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span
                  data-aos="flip-right"
                  className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Firebase</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span
                  data-aos="flip-right"
                  className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}

        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div data-aos="flip-right">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>

              <div data-aos="flip-right">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Problem solving
                </p>
              </div>
              <div>
                <p
                  data-aos="flip-right"
                  className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5"
                >
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div data-aos="flip-right">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div data-aos="flip-right">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div data-aos="flip-right">
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Poject Management
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3
                  data-aos="fade-right"
                  className="absolute left-0 text-lg font-semibold"
                >
                  2023
                </h3>
                <p data-aos="fade-left">
                  Online Bootcamp of Front end web development from Institute of
                  Emerging Careers
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3
                  data-aos="fade-right"
                  className="absolute left-0 text-lg font-semibold"
                >
                  2023
                </h3>
                <p data-aos="fade-left">
                  Artificial Intelligence, Web 3.0 & Metaverse from Governor
                  Sindh Initiative
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3
                  data-aos="fade-right"
                  className="absolute left-0 text-lg font-semibold"
                >
                  2021
                </h3>
                <p data-aos="fade-left">
                  B-Tech Hons mechanical from Indus university
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a target="blank" href="https://github.com/Sharjeelcode">
                  <img src={github} className="w-5 cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/sharjeel-ahmed3/"
                >
                  <img src={LinkedIn} className="w-5 cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.instagram.com/sharjeelshery?igsh=MWxuankyYjMwb3R2MA=="
                >
                  <img src={Instagram} className="w-5 cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {scrolling && (
        <button
          className="fixed block right-2 md:right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
