'use client'
import { ReactLenis } from '@studio-freight/react-lenis'
import './track.css' 
import { RandomizedTextEffect } from '../text-randomized'

export default function Track(): JSX.Element {
  return (
    <ReactLenis root>
      <main className="bg-transparent">
        {/* <div className="wrapper">
          <section className="text-white  h-screen  w-full bg-slate-950  mt-40 sticky top-0">

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Tracks! 👇
            </h1>
          </section>
        </div> */}

        <section id='tracks' className="text-white w-full">
          <div className="flex md:flex-row flex-col-reverse justify-between md:px-40 px-0">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-black border-2 border-[#006BFF] h-auto md:w-[30rem] w-[20rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Image MouseTrail</h1>
                  <p>
                    An Mouse who is running with couple of images and the best
                    part is you can hide all the images when you don&amp;t move your
                    mouse. I hope you&amp;ll love it
                  </p>
                  <a
                    href="https://ui-layout.com/components/image-mousetrail"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    <button>
  <span className="button_top button"> Button </span>
</button>
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-black border-2 border-[#006BFF] h-auto md:w-[30rem] w-[20rem] rounded-lg p-4 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">
                    Progressive Carousel
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/progressive-carousel"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    <button>
  <span className="button_top button"> Button </span>
</button>
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-black border-2 border-[#006BFF] h-auto md:w-[30rem] w-[20rem] p-4 rounded-lg -rotate-6 grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Responsive Drawer</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/drawer"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    <button>
  <span className="button_top button"> Button </span>
</button>
                  </a>
                </article>
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-black border-2 border-[#006BFF] h-auto md:w-[30rem] w-[20rem] p-4 rounded-lg grid place-content-center gap-4">
                  <h1 className="text-2xl font-semibold">Animated Globe</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius consequatur explicabo assumenda odit necessitatibus
                    possimus ducimus aliquam. Ullam dignissimos animi officiis,
                    in sequi et inventore harum ipsam sed.
                  </p>
                  <a
                    href="https://ui-layout.com/components/globe"
                    target="_blank"
                    className="w-fit bg-black p-3 rounded-md cursor-pointer"
                  >
                    <button>
  <span className="button_top button"> Button </span>
</button>
                  </a>
                </article>
              </figure>
            </div>
            <div className="sticky md:top-0 -top-[34vh] h-screen md:grid place-content-center">
              <h1 className="text-6xl px-8 font-medium text-center tracking-tight leading-[120%] animate-flicker z-50">
                <RandomizedTextEffect text='Tracks😎' />
              </h1>
            </div>
          </div>
        </section>

        
      </main>
    </ReactLenis>
  )
}
