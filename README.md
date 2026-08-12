# Sweet Blooms by Abi — Website Files

This folder contains your bakery website:

- **index.html** — home page (full-screen split hero, image marquee, services, featured bakes, callout, story, testimonials, contact, order form)
- **menu.html** — dedicated menu page with categories (Cakes, Cupcakes, Brownies, Cookies, Celebration Cakes, Custom Orders)
- **styles.css** — shared stylesheet for both pages (warm cream / hot pink / deep wine design)
- **logo.png** — the brand logo (circular badge, transparent background), used in the header and footer
- **favicon.png** — small 32×32 version of the logo used as the browser tab icon
- **SweetBloomsHome.jsx** — older React component version (kept for reference, not in use)

Open `index.html` directly in any browser — no build step needed.

## Security & protection

The site is hardened against common web attacks. No user data ever leaves the
browser — every form just opens WhatsApp with a pre-filled message (there is no
backend, so there is nothing for an attacker to break in to).

What's in place:

- **Content-Security-Policy (CSP)** — embedded as a `<meta>` tag in both pages.
  The default policy is `'none'` (block everything), then only known-good
  sources are explicitly allowed:
  - scripts from this site only (no inline, no remote, no `eval`)
  - Google Fonts CSS + font files
  - local `images/` photos plus `https://images.unsplash.com` (stock photos
    used in one service card, and menu items that
    have no matching real bake photo)
  - `blob:` for the order-form image **preview** (the photo never leaves your
    browser — only its file *name* goes into the WhatsApp message)
  - `file:` so the site keeps working when opened directly from disk
- **No inline scripts or event handlers** — all JavaScript lives in one
  external file, `main.js`.
- **Clickjacking protection** — `frame-ancestors 'none'` stops the site being
  embedded inside another page.
- **Reverse-tabnabbing protection** — every `target="_blank"` link has
  `rel="noopener noreferrer"`, so the opened site can't hijack your tab or
  read your address bar.
- **Referrer policy** — `strict-origin-when-cross-origin` stops full URLs
  being sent to other sites.
- **HTTPS upgrade** — `upgrade-insecure-requests` forces any mixed content to
  load over HTTPS.
- **Server headers on deploy** — `_headers` (Netlify / Cloudflare Pages) and
  `.htaccess` (Apache / cPanel) add `X-Content-Type-Options`, `X-Frame-Options`,
  `Permissions-Policy`, and `Strict-Transport-Security` when you deploy.

Before publishing, review the images in the `images/` folder (see below).

## Brand

- **Name:** Sweet Blooms by Abi
- **Tagline:** Freshness in Every Bite
- **Fonts:** Poppins (headings + body) + Great Vibes (script accents)
- **Colors:** warm cream background, near-black text, hot pink/magenta accents, dusty rose, blush pink, deep wine, sage green used sparingly
- **Logo:** `logo.png` — circular badge with transparent background, used in the header and footer; `favicon.png` is the tab icon

## About the images

Most photos are real bakes from the **@sweetblooms.abi Instagram** profile,
downloaded from the account's public feed and stored locally in `images/`
as `ig-post-01.jpg` … `ig-post-35.jpg` (34 photos — the two logo/intro
posts from the 36-post feed are excluded).

The **home hero collage** (main photo + two floating cards), the
**"Cupcakes & treats" service card**, and
**menu items with no matching real bake** (e.g. cupcakes, red velvet,
cookies, wedding/anniversary cakes) use attractive stock photos from Unsplash
(`https://images.unsplash.com`); every other slot uses the real Instagram
bakes. The CSP allows that one external image host.

Every photo is used **exactly once per page** — no repeated cake images
anywhere on the site (the only repeated file is the brand `logo.png`).

## Adding or swapping photos

The images map to Instagram posts in **newest-first order** (post 01 = most
recent bake). To update:

1. Replace the files in `images/` with new full-size photos.
2. In **index.html** or **menu.html**: change the `src="images/....jpg"` on the
   relevant `<img>` tag to your new file.
3. Keep one photo per slot — each `<img>` should point to a different file.

## Contact details already wired in

- WhatsApp: +94 76 769 1862 (used in every "Order" button)
- Hours: 9:00 AM – 9:00 PM, every day
- Bakery name: Sweet Blooms by Abi

## Order enquiry form

The home page has a dedicated **Order** section (`#order`) with a contact form
(Name, phone, occasion, date, bake type, size, details). Submitting it opens
WhatsApp with all the client's details pre-filled as a structured message, so
every enquiry arrives on your WhatsApp ready to reply to. No backend needed.

The form also has an **upload picture** button — clients can attach a reference
image (design, theme or colour). The image name is included in the WhatsApp
message so you know to expect the photo in the chat.

## Menu cart (menu page)

The menu page has a **cart flow** instead of direct WhatsApp links:

1. Clicking **Order** on any menu item adds it to the cart (a floating cart
   button appears with the item count).
2. The cart panel lets the customer adjust quantities, remove items, and see
   the total.
3. **Finalize order** opens a short form (name, phone, optional date + notes).
4. **Send order via WhatsApp** opens WhatsApp with the full itemised order
   pre-filled, then clears the cart.

Each menu category also shows **3 items by default** with a **More** button
that reveals the 4th item.

## Mobile friendly

Both pages are fully responsive and tested from 320px (small phones) up to
desktop — no horizontal scrolling. The nav collapses to a hamburger menu, grids
stack to one column, and buttons/forms resize to fit small screens.

## Editing the design

All colors, fonts and layout styles live in **`styles.css`**:

- Colors are CSS variables at the top (`--cream`, `--ink`, `--rose-deep`, `--rose-dark`, `--wine`, ...)
- Fonts: Poppins (headings + body), Great Vibes (script accents)
- The design is an **editorial style** inspired by the Joyeux Repas agency site:
  a **full-screen split hero** (copy left, photo collage right, vertically
  centered with breathing room, filling the whole first viewport) on a **warm cream
  gradient** with soft **blush/pink accents** (hot-pink buttons, a blush
  eyebrow pill, a pink "Fresh today" badge on the photo), oversized headlines
  (fluid `clamp()` sizes), an infinite image
  marquee that only appears once you scroll past the hero, pill buttons with a
  hover fill animation, and a deep-wine callout band
- **Unified section backgrounds** — every light section (services, featured
  bakes, about, testimonials, contact, order form) sits on the same warm cream
  as the page, so the only colour changes are the two intentional deep-wine
  bands (callout + footer); no more cream/cream-2 alternation
- **Motion system**: the hero copy fades up in a staggered sequence and the
  photo collage (main photo + two floating cards + pink badge) fades and
  slides in right after — all on page load (no splash
  screen — the page is visible immediately); sections fade up and stagger in as
  you scroll (IntersectionObserver); the
  menu page has a hero filmstrip and floating category tags; the callout band
  runs a looping "Sweet Blooms" text ribbon; the story photo has a subtle
  parallax. Everything respects `prefers-reduced-motion`
- **Hero motion pack** (pink-palette only — no red/cyan/blue anywhere):
  - A subtle **dot-grain texture** over the hero background (soft pink dots,
    fine 12px newspaper-print grain)
  - An **ambient pink glow blob** drifting in a slow circular path behind the
    headline (10s loop) — **grainy, not smooth**: it is made of the same dot
    pattern tinted pink, masked to fade out at the edges like a textured
    spotlight
  - The headline reveals with a **duo-tone pink glitch** — each word snaps in
    with two pink ghost shadows (brand pink + blush) offset ~3px like an RGB
    channel split, holding briefly then snapping into crisp solid text within
    ~0.5s, staggered word by word
  - **Sequenced fade-up** on load: pill tag → headline → description →
    "Order Now" → stat row (~90–150ms stagger), then the photo collage
    **scale-fades in** (0.95 → 1) slightly after the text
  - The two floating cards **float continuously** (translateY ±6px, 4.5–5s
    loop) with a **soft pink glow shadow** instead of grey
  - Micro-interactions: "Order Now" **scales up 1.03 with a pink shadow-lift**
    on hover (~150ms); the "Fresh today" badge has a slow subtle **pink pulse**
  - The hero's **"View Menu"** button is a visible **pink outline pill with a
    white fill** (the shared `.btn-light` cream style is only used on dark
    sections like the callout band, where it belongs)
  - Entrance plays **once on load** (never on scroll); all loops and glows are
    disabled under `prefers-reduced-motion`
- **Round 2 motion patterns** (from the Joyeux Repas frame-by-frame breakdown):
  - **Hand-drawn scribble underlines** (inline SVG) under "every bite" and "heart"
  - Each service card (Cakes / Cupcakes & treats / Custom orders) is a tall bordered
    card with its title in the upper third and a small solid-pink **"+" pill button**
    beneath it. Hovering (desktop) or clicking expands the card — the + rotates into
    an × and the icon (diamond / bell / heart), description and tag pills fade and
    slide in from below, with an "Order now" WhatsApp button. **The cards behave as
    an accordion** — only one card is open at a time: clicking a card's + collapses
    the previously open card and expands the clicked one; clicking the open card's ×
    closes it again. Collapsed cards lift slightly on hover as an affordance
  - The portfolio section has a **sticky sidebar** ("View the full menu" button) beside a
    7-card grid; on hover-capable devices a round **"View" badge follows the cursor**
    over each photo
  - The footer has a **newsletter form** that composes a WhatsApp message (no backend)
  - **Buttons** are pill-shaped with a **solid fill** and a subtle **lift + darken**
    on hover — minimal, no bounce or ripple
  - On small screens the sticky sidebar stacks and the scattered photos collapse —
    no horizontal overflow at 375 / 768 / 1440 px
- Both pages load instantly with no splash screen — the hero entrance animation
  plays as soon as the page is ready
- Both pages share this file, so a change there updates the whole site