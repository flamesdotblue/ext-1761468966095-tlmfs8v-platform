import { Sparkles, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Clean & Minimal',
    desc: 'A focused hello world to kickstart your app with sensible defaults and modern styling.'
  },
  {
    icon: Zap,
    title: 'Interactive Hero',
    desc: 'Engage users instantly with a responsive, tactile 3D cover background.'
  },
  {
    icon: Globe,
    title: 'Ready to Deploy',
    desc: 'Vite + React + Tailwind, pre-configured and optimized for instant shipping.'
  }
];

function Features() {
  return (
    <section id="features" className="relative isolate">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            What you get
          </h2>
          <p className="mt-3 text-neutral-700">
            Practical building blocks to say hello to the world and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{desc}</p>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8">
          <h3 className="text-lg font-semibold text-neutral-900">About this demo</h3>
          <p className="mt-2 text-neutral-700">
            This simple app demonstrates a crisp, modern hero with an interactive 3D background and a clean component structure. Modify and extend as you like.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
