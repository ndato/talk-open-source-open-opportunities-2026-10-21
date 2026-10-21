---
name: HF26 Open Assembly
description: Warm editorial theme for Hacktoberfest Cebu 2026 — earthy paper background, vibrant orange accent, bold condensed display type
mode: light
---

# HF26 Open Assembly

## Palette

| Role    | Value     | Notes                                  |
| ------- | --------- | -------------------------------------- |
| bg      | `#F4F1E8` | Warm paper — the brand's base surface  |
| text    | `#252820` | Deep ink — primary copy                |
| accent  | `#E64C2C` | Vibrant orange — CTAs, eyebrows, rules |
| accentDark | `#B63419` | Darker orange — hover states, depth |
| muted   | `#66685B` | Muted sage — secondary copy            |
| line    | `#D0D0C1` | Subtle border — dividers, card edges   |
| soft    | `#EAEADE` | Soft sage — tinted card backgrounds    |
| moss    | `#798365` | Moss green — tertiary accents          |

## Typography

- Display font: `'Barlow Condensed', 'Arial Narrow', sans-serif` — weight 700, uppercase for headlines. Tall, narrow letterforms carry the brand voice.
- Body font: `'DM Sans', system-ui, sans-serif` — weight 400–500 for readable body copy.
- Emphasis: `'DM Sans', system-ui, sans-serif` — weight 600 for labels, eyebrows, and strong inline text.
- Webfont import (Google Fonts):
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
  ```
- Type-scale overrides:
  - Hero title: 180 px (Barlow Condensed, uppercase, tight tracking)
  - Section heading: 96 px (Barlow Condensed, uppercase)
  - Page heading: 72 px (Barlow Condensed)
  - Body text: 32 px (DM Sans)
  - Caption / label: 24 px (DM Sans, 600 weight, letter-spaced)

## Layout

- Content padding: 120 px from canvas edges (1920 × 1080).
- Alignment: left-aligned, single column. Editorial feel.
- Generous whitespace between sections — let the type breathe.
- Cards use `soft` background with `line` border, 16 px radius.
- Orange rules (2–3 px) as section dividers and accents.
- Arrow motif (↗) as a recurring decorative element — the brand's signature.

## Fixed components

### Title

```tsx
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
```

### Eyebrow

```tsx
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
```

### Footer

```tsx
import { useSlidePageNumber } from '@open-slide/core';

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
```

### Orange Rule

```tsx
const OrangeRule = ({ width = 120 }: { width?: number }) => (
  <div
    style={{
      width,
      height: 4,
      background: '#E64C2C',
      margin: '40px 0',
    }}
  />
);
```

### Arrow Accent

```tsx
const ArrowAccent = ({ size = 48 }: { size?: number }) => (
  <div
    style={{
      fontSize: size,
      color: '#E64C2C',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontWeight: 600,
      lineHeight: 1,
    }}
  >
    ↗
  </div>
);
```

## Motion

- Philosophy: **subtle** — the brand is warm and editorial, not flashy. Gentle fades and small rises let the typography lead.
- Reusable keyframes:

```css
@keyframes hf26-fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- Use `<Steps>` / `<Step>` for staged reveals on content pages (180 ms default).
- Page transitions: 240 ms fade-in on enter, hold on exit. Keep it quiet.

## Aesthetic

Warm, earthy, community-driven editorial. The palette draws from risograph print and zine culture — warm paper, vibrant orange, muted sage. Typography is bold and condensed for headlines (Barlow Condensed carries a handmade, poster-like quality) paired with clean DM Sans for body. The open-door and arrow motifs signal welcome and forward momentum. Avoid: cold blues, neon gradients, heavy shadows, corporate glassmorphism. This is a human, craft-first identity.

## Example usage

```tsx
const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%', background: '#F4F1E8', color: '#252820', padding: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>Hacktoberfest Cebu</Eyebrow>
    <Title>Open Assembly</Title>
    <OrangeRule />
    <p style={{ fontSize: 32, color: '#66685B', maxWidth: 1000, marginTop: 24, lineHeight: 1.5 }}>
      A community celebration of open source, collaboration, and the people who build the web together.
    </p>
    <Footer />
  </div>
);
```
