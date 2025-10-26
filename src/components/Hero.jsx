import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
            Hello, world
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
            A minimal starter that greets the world and showcases an interactive, modern hero. Touch the grid to see the ripple.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-rose-700"
            >
              <Rocket className="h-4 w-4" />
              Explore features
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
