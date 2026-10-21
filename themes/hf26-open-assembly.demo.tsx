import type { DesignSystem, Page } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#F4F1E8', text: '#252820', accent: '#E64C2C' },
  fonts: {
    display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
  },
  typeScale: { hero: 180, body: 32 },
  radius: 16,
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
@keyframes hf26-fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      fontSize: 180,
      fontWeight: 700,
      lineHeight: 1.0,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      margin: 0,
      color: '#252820',
    }}
  >
    {children}
  </h1>
);

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
        Open Assembly · 2026
      </span>
      <span>{current} / {total}</span>
    </div>
  );
};

const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#F4F1E8',
      color: '#252820',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
    }}
  >
    <style>{css}</style>
    <Eyebrow>Hacktoberfest Cebu</Eyebrow>
    <Title>Open Assembly</Title>
    <OrangeRule />
    <p
      style={{
        fontSize: 32,
        color: '#66685B',
        maxWidth: 1000,
        marginTop: 24,
        lineHeight: 1.5,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      A community celebration of open source, collaboration, and the people who build the
      web together.
    </p>
    <Footer />
  </div>
);

const Content: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#F4F1E8',
      color: '#252820',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <style>{css}</style>
    <Eyebrow>Why It Matters</Eyebrow>
    <h2
      style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontSize: 72,
        fontWeight: 700,
        lineHeight: 1.1,
        textTransform: 'uppercase',
        margin: 0,
        letterSpacing: '0.01em',
      }}
    >
      Built by the Community
    </h2>
    <OrangeRule width={80} />
    <div
      style={{
        marginTop: 48,
        padding: 40,
        background: '#EAEADE',
        borderRadius: 16,
        border: '1px solid #D0D0C1',
        maxWidth: 1000,
      }}
    >
      <p
        style={{
          fontSize: 32,
          color: '#252820',
          lineHeight: 1.5,
          margin: 0,
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        Every line of code, every design, every piece of documentation — open source is
        shaped by thousands of people who show up and build together.
      </p>
    </div>
    <div style={{ marginTop: 32, display: 'flex', gap: 40 }}>
      <div style={{ fontSize: 24, color: '#E64C2C', fontWeight: 600, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        ↗ Join in
      </div>
      <div style={{ fontSize: 24, color: '#E64C2C', fontWeight: 600, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        ↗ Contribute
      </div>
      <div style={{ fontSize: 24, color: '#E64C2C', fontWeight: 600, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        ↗ Build
      </div>
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#F4F1E8',
      color: '#252820',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
  >
    <style>{css}</style>
    <Eyebrow>The Future is Open</Eyebrow>
    <h2
      style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontSize: 96,
        fontWeight: 700,
        lineHeight: 1.0,
        textTransform: 'uppercase',
        margin: 0,
        letterSpacing: '0.01em',
      }}
    >
      Start Building
    </h2>
    <OrangeRule />
    <p
      style={{
        fontSize: 32,
        color: '#66685B',
        maxWidth: 900,
        marginTop: 24,
        lineHeight: 1.5,
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      The tools are free. The community is ready. The only thing missing is you.
    </p>
    <Footer />
  </div>
);

export default [Cover, Content, Closer];
