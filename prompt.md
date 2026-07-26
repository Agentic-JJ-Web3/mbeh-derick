Act as an Apple Principal Human Interface Designer & Frontend Engineer. Build an ultra-clean, spatial portfolio website for Mbeh Derick using semantic HTML5, modern CSS3, and ES6 JavaScript.

### Core Visual & Spatial Aesthetics:
- Visual Style: Apple Spatial Design System (visionOS inspired) + Minimalist Bento Grid.
- Typography: Native Apple Font Stack (`font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif;`) with loose, elegant letter-spacing (`letter-spacing: -0.02em`).
- Dual Theme Engine: Built-in Light and Dark mode toggle persisting via `localStorage` and automatically respecting `prefers-color-scheme`.
  * Dark Theme: Deep true dark background (#000000), floating translucent glass cards (rgba(255,255,255,0.08) with 24px backdrop-filter blur), subtle 1px spatial borders, and electric system blue (#0A84FF) / emerald accents (#30D158).
  * Light Theme: Crisp off-white Apple background (#F5F5F7), subtle elevated white glass cards (rgba(255,255,255,0.7) with blur), soft multi-layered drop shadows, and system blue (#0071E3).
- Layout & Imagery: Generous whitespace and dedicated visual image slots with precise aspect-ratio containers (`aspect-ratio: 16/9` and `4/3`) for clean media insertion (AWS certificates, M&DGroupSarl corporate imagery, and #FeedTheWorld initiative photos).

### Page Architecture & Content:
1. Spatial Header: Floating frosted-glass navigation capsule with a theme switcher toggle, smooth anchor links (About, Ventures, Impact, Contact), and a minimal "Mbeh Derick" signature badge.
2. Hero Section:
   - Headline: Mbeh Derick
   - Subhead: "Builder of Hope Through Blockchain & Tech Innovation"
   - Short Bio: "An online entrepreneur, humanitarian, and digital builder transforming compassion into real-world action across Cameroon and beyond."
   - Spatial CTAs: Primary pill button "Support #FeedTheWorld" and secondary outlined glass button "Let's Connect".
3. Bento Grid "About & Credentials" (Includes Image Slots):
   - Cell 1 (Text): Core philosophy ("Pursuit of digital and financial freedom to uplift communities").
   - Cell 2 (Media Slot): Dedicated framed container for AWS Cloud Architect certification badge/photo.
   - Cell 3 (Text & Badges): Risk Mitigation (OSHAcademy USA Safety Qualifications) & Geographic Roots (Douala & Bamenda, Cameroon).
4. Ventures & Experience:
   - Floating spatial card for M&DGroupSarl (CEO).
   - Tech stack tags styled as pill-shaped glass tags.
5. Social Impact Spotlight (#FeedTheWorldInitiative):
   - Highlight section for Web3 philanthropy with a dedicated high-impact media gallery slot for photos from the initiative.
   - CTA button directing to the official Feed The World platform.
6. Spatial Contact & Footer:
   - Minimalist form with floating inputs for collaboration inquiries.
   - Apple-style icon row linking to his LinkedIn Profile and Facebook Page.

### Technical Guidelines:
- Clean code split into `index.html`, `styles.css`, and `script.js`.
- Smooth scrolling enabled globally (`scroll-behavior: smooth`).
- IntersectionObserver for subtle spatial depth elevation and fade-in animations on scroll.
- Mobile-first, fully responsive grid architecture.