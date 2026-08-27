import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-comic.jpg";

const meta = [
  { label: "Version", value: "v4.0" },
  { label: "File name", value: "About_Mostafa.psd" },
  { label: "Status", value: "Ready to ship" },
  { label: "Runtime", value: ".NET 8 / React" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-16 lg:py-24 comic-noise"
    >
      {/* Keycap grid backdrop — the reference's keyboard plane */}
      <div className="pointer-events-none absolute inset-0 -z-10 keycap-grid opacity-[0.55]" />
      <div className="pointer-events-none absolute inset-0 -z-10 hero-aura" />
      <div className="pointer-events-none absolute inset-0 -z-10 scanlines" />

      <div className="shell">
        {/* Top meta rail — VERSION / FILE NAME / STATUS / RUNTIME */}
        <Reveal>
          <div className="grid grid-cols-2 gap-4 border-b border-border pb-5 sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label} className="min-w-0">
                <p className="eyebrow">{m.label}</p>
                <p className="mt-1 truncate font-mono text-xs text-foreground/85 sm:text-sm">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          {/* Comic panel */}
          <Reveal>
            <figure className="comic-panel group relative">
              <img
                src={aboutImage}
                alt="Comic-book illustration of Mostafa Samir at the keyboard"
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <span aria-hidden className="comic-panel-glitch" />
              <figcaption className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-md border border-border-strong bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
                <span className="size-1.5 rounded-full bg-accent blink" />
                Ctrl C + V
              </figcaption>
            </figure>

            {/* Keycaps */}
            <div className="mt-4 flex gap-3" aria-hidden>
              {["C", "V"].map((k) => (
                <span key={k} className="keycap">
                  {k}
                </span>
              ))}
              <span className="keycap keycap-wide">Ctrl</span>
            </div>
          </Reveal>

          {/* Copy column */}
          <Reveal delay={0.12}>
            <p className="eyebrow">About</p>

            <h2
              data-text="Engineering for reliability and scale"
              className="glitch display mt-4 text-[clamp(2rem,4.5vw,3.75rem)]"
            >
              Engineering for reliability and scale
            </h2>

            {/* Terminal window — Story Description.txt */}
            <div className="terminal mt-5">
              <div className="terminal-bar">
                <span className="font-mono text-[11px] tracking-[0.14em] text-foreground/75">
                  Story_Description.txt
                </span>
                <span
                  aria-hidden
                  className="ml-auto flex items-center gap-2 font-mono text-xs text-muted-foreground"
                >
                  <span>—</span>
                  <span>▢</span>
                  <span>✕</span>
                </span>
              </div>
              <div className="space-y-3 p-4 font-mono text-[13px] leading-relaxed text-muted-foreground sm:p-5 sm:text-sm">
                <p>
                  I build the technical core behind products people depend on to
                  reserve time: high-performance, secure, multi-tenant systems
                  where a double booking is not an option.
                </p>
                <p>
                  Real-time capability and high concurrency — SignalR-driven
                  availability, cached read paths, tuned data access — held
                  together by Clean Architecture so the platform stays
                  maintainable long after launch.
                </p>
                <p>
                  Four years of production experience across .NET 8, ASP.NET
                  Core, Angular, React and Next.js.
                  <span className="caret" aria-hidden />
                </p>
              </div>
            </div>

            {/* Pasting progress */}
            <div className="mt-5 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                &gt; Pasting…
              </span>
              <span className="flex flex-1 gap-1" aria-hidden>
                {Array.from({ length: 18 }).map((_, i) => (
                  <span
                    key={i}
                    className="paste-block"
                    style={{ animationDelay: `${i * 0.09}s` }}
                  />
                ))}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

