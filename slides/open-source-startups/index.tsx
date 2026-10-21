import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { Step, Steps, useSlidePageNumber } from '@open-slide/core';
import portrait from '@assets/DSC00317-21.jpeg';
import bjPhoto from './assets/bj.jpg';
import romePhoto from './assets/rome.jpg';
import sabPhoto from './assets/sab.jpg';
import anjPhoto from './assets/anj.jpg';
import dorellPhoto from './assets/dorell.jpg';
import logoPizzapy from './assets/logo-pizzapy.png';
import logoCdf from './assets/logo-cdf.png';
import logoDevcon from './assets/logo-devcon.png';
import logoAigen from './assets/logo-aigen.png';
import logoJscebu from './assets/logo-jscebu.png';
import qrHbsPaper from './assets/qr-hbs-paper.png';

export const design: DesignSystem = {
  palette: { bg: '#F4F1E8', text: '#252820', accent: '#E64C2C' },
  fonts: {
    display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
  },
  typeScale: { hero: 180, body: 32 },
  radius: 16,
};

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:wght@400;500;600&display=swap';
const FONT_LINK_ID = 'osd-webfont-open-source-startups';
if (typeof document !== 'undefined') {
  let link = document.getElementById(FONT_LINK_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = FONT_LINK_ID;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  if (link.href !== FONT_HREF) link.href = FONT_HREF;
}

const STYLE_ID = 'osd-styles-open-source-startups';
const css = `
@keyframes hf26-fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;
if (typeof document !== 'undefined') {
  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  if (style.textContent !== css) style.textContent = css;
}

const muted = '#66685B';
const lightBg = '#EAEADE';
const border = '#D0D0C1';

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
const HOLD: Keyframe[] = [{ opacity: 1 }, { opacity: 1 }];

export const transition: SlideTransition = {
  duration: 240,
  exit: { duration: 240, easing: EASE_IN, keyframes: HOLD },
  enter: {
    duration: 240,
    easing: EASE_OUT,
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
  },
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: "'DM Sans', system-ui, sans-serif",
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: '#E64C2C',
      marginBottom: 32,
    }}
  >
    {children}
  </div>
);

const OrangeRule = ({ width = 120 }: { width?: number }) => (
  <div style={{ width, height: 4, background: '#E64C2C', margin: '40px 0' }} />
);

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: 72,
      fontWeight: 700,
      margin: 0,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
    }}
  >
    {children}
  </h2>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontSize: 22,
        color: '#66685B',
      }}
    >
      <span style={{ letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
        Open Source · 2026
      </span>
      <span>{current} / {total}</span>
    </div>
  );
};

const BulletRow = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '28px 32px',
      background: '#FFFFFF',
      borderRadius: 'var(--osd-radius)',
      border: `1px solid ${border}`,
    }}
  >
    <div style={{ fontSize: 40, color: 'var(--osd-accent)', fontWeight: 700 }}>↗</div>
    <div>
      <div style={{ fontSize: 30, fontWeight: 700 }}>{title}</div>
      <div style={{ fontSize: 24, color: muted, marginTop: 4 }}>{desc}</div>
    </div>
  </div>
);

const DeckTitle: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 90,
        right: 160,
        width: 340,
        height: 340,
        borderRadius: '50%',
        background: 'var(--osd-accent)',
        opacity: 0.08,
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        right: 400,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'var(--osd-accent)',
        opacity: 0.06,
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>47th All Aboard! Startup Cebu Mixer x Cebu Hacktoberfest 2026</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 132,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.0,
          letterSpacing: '0.01em',
          textTransform: 'uppercase',
          maxWidth: 1500,
        }}
      >
        Open Source,
        <br />
        Open Opportunities
      </h1>
      <OrangeRule />
      <p
        style={{
          fontSize: 40,
          color: muted,
          marginTop: 0,
          maxWidth: 1200,
          lineHeight: 1.3,
          fontFamily: 'var(--osd-font-display)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
        }}
      >
        The Technologies Powering Tomorrow's Startups
      </p>
    </div>
    <Footer />
  </div>
);

const AboutMe: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'row',
      gap: 80,
      alignItems: 'center',
    }}
  >
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Steps>
        <Eyebrow>Speaker Introduction</Eyebrow>
        <Heading>About Me &amp; Why We Are Here</Heading>
        <div style={{ height: 40 }} />
        <Step>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              padding: '24px 28px',
              background: lightBg,
              borderRadius: 'var(--osd-radius)',
              border: `1px solid ${border}`,
            }}
          >
            <div>
              <div style={{ fontSize: 30, fontWeight: 700 }}>Neriah "BJ" Ato</div>
              <div style={{ fontSize: 24, color: muted, marginTop: 4, lineHeight: 1.4 }}>Python Developer, and Open-Source Community Builder embedded in the Local Tech and Startup Community.</div>
            </div>
          </div>
        </Step>
        <Step>
          <div style={{ marginTop: 40, display: 'flex', gap: 40 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.1em', marginBottom: 12 }}>
                THE MISSION
              </div>
              <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
                Build local tech capability, drive open-source collaboration, and position
                our ecosystem on the global stage.
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.1em', marginBottom: 12 }}>
                TODAY
              </div>
              <div style={{ fontSize: 28, color: muted, lineHeight: 1.5 }}>
                See how open source is changing the game for startups — and how we, right
                here, can lead that charge.
              </div>
            </div>
          </div>
        </Step>
      </Steps>
    </div>
    <img
      src={portrait}
      alt="Neriah BJ Ato"
      style={{
        width: 520,
        height: 760,
        objectFit: 'cover',
        objectPosition: '50% 20%',
        borderRadius: 'var(--osd-radius)',
        border: '3px solid var(--osd-accent)',
        flexShrink: 0,
      }}
    />
    <Footer />
  </div>
);

const TitleSlide: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 100,
        right: 180,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'var(--osd-accent)',
        opacity: 0.08,
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: 90,
        right: 380,
        width: 180,
        height: 180,
        borderRadius: '50%',
        background: 'var(--osd-accent)',
        opacity: 0.06,
      }}
    />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>Building the Frontier</Eyebrow>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 108,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.02,
          letterSpacing: '0.01em',
          textTransform: 'uppercase',
          maxWidth: 1500,
        }}
      >
        How Startups Win by Contributing to Open Source
      </h1>
      <OrangeRule />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
        <div style={{ fontSize: 30, color: muted, display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>↗</span>
          Moving beyond passive consumption to active contribution
        </div>
        <div style={{ fontSize: 30, color: muted, display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>↗</span>
          Shaping cutting-edge technology from our local ecosystem
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const Pervasiveness: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Steps>
      <Eyebrow>The Reality</Eyebrow>
      <Heading>We Are All Already Using Open Source</Heading>
      <div style={{ height: 48 }} />
      <Step>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <BulletRow
            title="From Linux to PyTorch"
            desc="Foundational infrastructure like Linux and Git to cutting-edge AI frameworks like PyTorch and TensorFlow"
          />
          <BulletRow
            title="The invisible engine"
            desc="Open source powers modern business everywhere — it is the default foundation, not the exception"
          />
          <BulletRow
            title="Consumption is no longer enough"
            desc="The real opportunity lies in active contribution, not just using what others build"
          />
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const UserGlyph = () => (
  <svg width="122" height="122" viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="33" r="19" />
    <path d="M50 58c-17 0-30 11-30 26v8h60v-8c0-15-13-26-30-26z" />
  </svg>
);

const BranchGlyph = () => (
  <svg
    width="122"
    height="122"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="8"
    strokeLinecap="round"
  >
    <circle cx="30" cy="22" r="10" fill="currentColor" stroke="none" />
    <circle cx="30" cy="78" r="10" fill="currentColor" stroke="none" />
    <circle cx="72" cy="22" r="10" fill="currentColor" stroke="none" />
    <path d="M30 33v34" />
    <path d="M72 33v8c0 12-9 19-21 21" />
  </svg>
);

const CodeGlyph = () => (
  <svg
    width="122"
    height="122"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="16" y="16" width="68" height="68" rx="14" strokeWidth="7" />
    <path d="M40 36 27 50l13 14" strokeWidth="9" />
    <path d="M60 36l13 14-13 14" strokeWidth="9" />
  </svg>
);

const FlowArrow = () => (
  <svg
    width="64"
    height="24"
    viewBox="0 0 64 24"
    fill="none"
    style={{ flexShrink: 0, marginTop: 103 }}
  >
    <path d="M4 12h46" stroke="var(--osd-accent)" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M44 5l10 7-10 7"
      stroke="var(--osd-accent)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Stage = ({
  icon,
  label,
  desc,
  accent = false,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  accent?: boolean;
}) => (
  <div
    style={{
      width: 440,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        width: 230,
        height: 230,
        borderRadius: '50%',
        border: `3px solid ${accent ? 'var(--osd-accent)' : border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: accent ? 'var(--osd-accent)' : 'var(--osd-text)',
      }}
    >
      {icon}
    </div>
    <div
      style={{
        marginTop: 32,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 56,
        fontWeight: 700,
        lineHeight: 1.1,
        textTransform: 'uppercase',
        letterSpacing: '0.01em',
      }}
    >
      {label}
    </div>
    {/* reserved slot keeps every stage's description on the same baseline */}
    <div
      style={{
        marginTop: 10,
        width: 72,
        height: 6,
        borderRadius: 3,
        background: accent ? 'var(--osd-accent)' : 'transparent',
      }}
    />
    <div
      style={{
        marginTop: 16,
        fontSize: 26,
        lineHeight: 1.5,
        color: muted,
        maxWidth: 380,
      }}
    >
      {desc}
    </div>
  </div>
);

const LevelUp: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Steps>
      <Eyebrow>The Path Forward</Eyebrow>
      <Heading>From Users to Builders</Heading>
      <div style={{ height: 56 }} />
      <Step>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          <Stage
            icon={<UserGlyph />}
            label="User"
            desc="Most of us are open source software users"
          />
          <FlowArrow />
          <Stage
            icon={<BranchGlyph />}
            label="Contributor"
            desc="We need more organizations become contributors"
          />
          <FlowArrow />
          <Stage
            icon={<CodeGlyph />}
            label="Builder"
            desc="And eventually become creators of open source technologies"
            accent
          />
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const ShapingFrontier: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Steps>
      <Eyebrow>Code as a Strategic Lever</Eyebrow>
      <Heading>Building Cutting-Edge Tech &amp; Influencing Direction</Heading>
      <div style={{ height: 48 }} />
      <Step>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <BulletRow
            title="Accelerate innovation"
            desc="Leverage pre-built advanced modules to build complex products rapidly"
          />
          <BulletRow
            title="Act as gatekeepers"
            desc="Active contribution lets startups shape the technical direction of tools to align with their commercial needs"
          />
          <BulletRow
            title="Share knowledge"
            desc="Investing in community education positions startups as domain leaders"
          />
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const FundingFlywheel: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Steps>
      <Eyebrow>The Empirical Proof</Eyebrow>
      <Heading>Code as Currency</Heading>
      <Step>
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 48,
            padding: 40,
            background: lightBg,
            borderRadius: 'var(--osd-radius)',
            border: `1px solid ${border}`,
            borderLeft: '6px solid var(--osd-accent)',
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: 'var(--osd-accent)',
              fontFamily: 'var(--osd-font-display)',
              lineHeight: 1,
            }}
          >
            +1%
          </div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 700, marginBottom: 4 }}>
              more GitHub commits
            </div>
            <div style={{ fontSize: 26, color: muted, lineHeight: 1.4 }}>
              correlates with a measurable boost in startup funding and valuations
            </div>
          </div>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 22,
            }}
          >
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: muted,
                textAlign: 'right',
                lineHeight: 1.4,
              }}
            >
              Scan for
              <br />
              the full study
            </div>
            <img
              src={qrHbsPaper}
              alt="QR code linking to the HBS working paper 24-040"
              title="HBS Working Paper 24-040 — scan to read"
              style={{
                width: 132,
                height: 132,
                display: 'block',
                borderRadius: 6,
                border: `1px solid ${border}`,
              }}
            />
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <BulletRow
            title="Direct link to growth"
            desc="Harvard research on 100,000 startups ties public code activity to entrepreneurial success"
          />
          <BulletRow
            title="Best equalizer in terms of opportunities"
            desc="OSS contributions are one channel in terms of overcoming lack of opportunities from economic inequalities"
          />
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const DistributionChannel: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '120px 160px',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Steps>
      <Eyebrow>The Commercial Flywheel</Eyebrow>
      <Heading>OSS as a Distribution Channel</Heading>
      <div style={{ height: 48 }} />
      <Step>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <BulletRow
            title="Bottom-up funnel"
            desc="Engage developer-users through open-source projects they already trust"
          />
          <BulletRow
            title="Enterprise conversion"
            desc="Communities naturally evolve into paying enterprise or government clients"
          />
          <BulletRow
            title="Followers into market leaders"
            desc="Open source transforms startups from catching up to setting the pace"
          />
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

const BOARD_SLOTS = [
  {
    name: 'BJ',
    role: 'President',
    photo: bjPhoto,
    logo: logoPizzapy,
    logoAlt: 'PizzaPy — Cebu Python Users Group',
  },
  {
    name: 'Rome',
    role: 'Vice President',
    photo: romePhoto,
    logo: logoCdf,
    logoAlt: 'Cebu Digital Freelancers',
  },
  {
    name: 'Sab',
    role: 'Secretary',
    photo: sabPhoto,
    logo: logoDevcon,
    logoAlt: 'DEVCON Cebu',
  },
  {
    name: 'Anj',
    role: 'Auditor',
    photo: anjPhoto,
    logo: logoAigen,
    logoAlt: 'AI Gen Society Cebu',
  },
  {
    name: 'James',
    role: 'CIO',
    photo: dorellPhoto,
    logo: logoJscebu,
    logoAlt: 'Javascript Cebu',
  },
];

const FiresideChat: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 160px',
    }}
  >
    <Steps>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          padding: '10px 26px',
          background: 'var(--osd-accent)',
          color: '#F4F1E8',
          borderRadius: 'var(--osd-radius)',
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 22,
        }}
      >
        Part 1 Closing
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 76,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.0,
          letterSpacing: '0.01em',
          textTransform: 'uppercase',
        }}
      >
        Fireside Chat
      </h2>
      <div
        style={{
          width: 80,
          height: 4,
          background: 'var(--osd-accent)',
          margin: '22px auto',
        }}
      />
      <p
        style={{
          fontSize: 32,
          color: 'var(--osd-text)',
          fontWeight: 600,
          margin: 0,
          lineHeight: 1.35,
        }}
      >
        Community Leaders on Open Source &amp; Startups
      </p>
      <p
        style={{
          fontSize: 24,
          color: muted,
          margin: '14px 0 0',
          maxWidth: 1300,
          lineHeight: 1.45,
        }}
      >
        Featuring the Executive Board of the Cebu Tech Communities — real-world
        perspectives on building open source, overcoming local bottlenecks, and scaling
        regionally and globally.
      </p>
      <Step>
        <div
          style={{
            marginTop: 28,
            display: 'flex',
            gap: 30,
            justifyContent: 'center',
          }}
        >
          {BOARD_SLOTS.map((member) => (
            <div key={member.name} style={{ width: 296 }}>
              <div
                style={{
                  width: 296,
                  height: 72,
                  margin: '0 auto 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--osd-radius)',
                  border: `2px solid var(--osd-accent)`,
                  background: '#FFFFFF',
                  padding: '0 18px',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={member.logo}
                  alt={member.logoAlt}
                  title={member.logoAlt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: 44,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
              <img
                src={member.photo}
                alt={member.name}
                style={{
                  width: 296,
                  height: 340,
                  objectFit: 'cover',
                  objectPosition: '50% 30%',
                  borderRadius: 'var(--osd-radius)',
                  border: `1px solid ${border}`,
                  display: 'block',
                }}
              />
              <div style={{ marginTop: 14, fontSize: 24, fontWeight: 700 }}>
                {member.name}
              </div>
              <div style={{ marginTop: 2, fontSize: 20, color: muted }}>
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </Step>
      <Step>
        <div
          style={{
            marginTop: 30,
            display: 'flex',
            gap: 40,
            fontSize: 22,
            color: 'var(--osd-accent)',
            fontWeight: 600,
          }}
        >
          <span>↗ Building projects</span>
          <span>↗ Bridging talent</span>
          <span>↗ Live Q&amp;A</span>
        </div>
      </Step>
    </Steps>
    <Footer />
  </div>
);

export const meta: SlideMeta = {
  title: 'Building the Frontier',
  createdAt: '2026-10-21T00:10:52.5945588+08:00',
  theme: 'hf26-open-assembly',
};

export const notes: (string | undefined)[] = [
  undefined,
  `Good [morning/afternoon] everyone! Before we dive into the core of today's talk, I want to briefly share who I am and why this topic is so close to my heart. [Add 1-2 personal sentences about your background, your role in the tech/startup scene, or why you are passionate about open source]. Today, we're going to look at how open source is changing the game for startups—and how we right here can lead that charge.`,
  `Welcome. Today we are talking about how startups can stop being just passive users of software and start leveraging open source as a competitive engine.`,
  `Whether we realize it or not, every tech startup here is already built on open source. But because it's everywhere, the real question isn't if we use it, but how we capitalize on it by actively contributing.`,
  `This is the heart of today's talk, and the mission of our communities here in Cebu. Almost all of us start as Users — we install packages, we call APIs, we consume what others have built. That is a perfectly good place to begin. But there is a ladder to climb. The step up to Contributor is smaller than most people think — a fixed typo, a clarified README, a reproduced bug report. And the step after that, to Builder, is where you stop adapting someone else's tool and start creating your own. PizzaPy, DEVCON, AI Gen Society, Javascript Cebu — every group represented on this board exists to help people make those two jumps.`,
  `Instead of just adapting to third-party tools, contributing allows startups to influence how software evolves, acting as leaders and gatekeepers rather than price-takers.`,
  `Investors look for technical authenticity. Data proves that active public commits translate directly into higher valuations and venture funding success.`,
  `Building in public creates a natural distribution channel. Your developer users become your future enterprise customers. Stop writing code behind closed doors—commit and contribute.`,
  `"To wrap up our first section, let's bring it home with a special Fireside Chat. I'd like to invite to the stage the Executive Board members of the Cebu Tech Communities. Let's discuss how our local groups are navigating open source, bridging talent, and building the future right here in Cebu.`,
];

export default [
  DeckTitle,
  AboutMe,
  TitleSlide,
  Pervasiveness,
  LevelUp,
  ShapingFrontier,
  FundingFlywheel,
  DistributionChannel,
  FiresideChat,
] satisfies Page[];
