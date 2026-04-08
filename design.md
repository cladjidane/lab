# Design System Document: The Precision Atelier

## 1. Overview & Creative North Star
**Creative North Star: "The Technical Craftman"**
This design system moves beyond the cold, sterile nature of traditional minimalism to embrace a "Scandinavian Studio" aesthetic—where human warmth meets engineering precision. It is designed to feel like a high-end physical workspace: tactile, airy, and intentional.

To break the "template" look, we reject the rigid, centered grid. Instead, we utilize **Intentional Asymmetry**. Large headers are often offset, and content blocks use varying widths to create a rhythmic, editorial flow. We prioritize breathing room (whitespace) as a functional element, not just a vacuum, allowing the technical monospace typography to act as a grounding, structural anchor.

---

## 2. Colors & Surface Philosophy
The palette is rooted in organic neutrals with surgical strikes of technical color.

### Color Roles
- **Primary (`#006386`) & Primary Container (`#007da8`):** Our muted cyan. Used sparingly for high-intent actions and technical indicators.
- **Tertiary (`#765700`) & Tertiary Fixed (`#ffdfa0`):** The Amber Highlight. This is our "human" touch, used for notification pips, active states, or highlighting specific data points within a technical layout.
- **Surface (`#fbf9f5`):** Our warm, off-white foundation. It provides the "paper" feel that prevents the UI from feeling "digital."

### Brand Accents
- **Cyan (`#00d4ff`):** Energy, tech, interactive elements
- **Coral (`#ff7e67`):** Warmth, games, culture
- **Amber (`#fbbc00`):** Highlight, math, data

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.**
Structural boundaries must be defined through background shifts. To separate a hero from a feature grid, transition from `surface` to `surface-container-low`. Visual hierarchy is a game of subtle tonal contrast, not "drawing boxes."

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper sheets.
*   **Level 0 (Base):** `surface` (#fbf9f5)
*   **Level 1 (Sections):** `surface-container-low` (#f5f3ef)
*   **Level 2 (In-section Cards):** `surface-container` (#f0eeea)
*   **Level 3 (Floating Modals):** `surface-container-highest` (#e4e2de)

### The Glass & Gradient Rule
For floating navigation or top-level overlays, use **Glassmorphism**. Apply `surface` at 80% opacity with a `20px` backdrop-blur. This ensures the "warmth" of the content below bleeds through, maintaining a sense of depth and continuity.

---

## 3. Typography
The typographic soul of this system lies in the tension between the organic curves of **Manrope** and the industrial precision of **Space Grotesk**.

*   **Display & Headlines (Space Grotesk - Monospace feel):** Use `display-lg` through `headline-sm` for all major signposts. These should be set with tighter letter-spacing (-0.02em) to maintain a premium, architectural look.
*   **Body & Titles (Manrope):** All reading-intensive text. Manrope's geometric but friendly structure provides the necessary legibility to balance the technical headers.
*   **Labels (Manrope):** Used for micro-copy and metadata. Always set `label-sm` in uppercase with +0.05em tracking to lean into the "studio label" aesthetic.

---

## 4. Elevation & Depth
We reject the heavy drop-shadows of the early web. Our depth is "Ambient."

### Tonal Layering
Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f5f3ef) background. This creates a "soft lift" that feels natural and expensive.

### Ambient Shadows
If an object must float (e.g., a primary dropdown):
*   **Shadow:** `0px 12px 32px rgba(42, 42, 42, 0.06)`
*   The shadow is not grey; it is a low-opacity tint of our `on-surface` charcoal, mimicking a natural light source in a studio.

### The "Ghost Border" Fallback
If contrast ratios require a border (e.g., input fields), use a **Ghost Border**:
*   `outline-variant` (#bdc8d0) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `md` (0.375rem) roundedness. No gradients, just flat, confident color.
*   **Secondary:** `surface-container-highest` background. No border. This creates a "recessed" look.
*   **Tertiary (Ghost):** Monospace `label-md` text with a subtle `primary` underline on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   Use `spacing-8` (2.75rem) to separate list items. If separation is visually difficult, use a subtle background toggle between `surface` and `surface-container-low` for alternating rows.

### Project Cards (Tier 1)
*   Large image area with grayscale filter, transitions to color on hover
*   Subtle colored overlay on hover (brand color at 5% opacity)
*   Tag badge in top-left corner with brand color background
*   Card glow on hover: `0 0 30px rgba(0, 212, 255, 0.15)`

### Project Cards (Tier 2)
*   Compact white cards on off-white section background
*   Tag label in brand color, uppercase, tracked
*   Subtle scale (1.02) and shadow on hover
*   Ghost border at 10% opacity

### Gradient Text
The word "Vite." in the hero uses a 3-color gradient: cyan > coral > amber (`linear-gradient(90deg, #00d4ff, #ff7e67, #fbbc00)`)

### Accent Dots
Section titles are preceded by 3 small dots (cyan, coral, amber) to add visual rhythm.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins (e.g., `spacing-24` on the left, `spacing-12` on the right) for hero sections.
*   **Do** use `spaceGrotesk` for numbers in data visualizations to emphasize the technical aesthetic.
*   **Do** lean heavily on `surface_container_low` for large background areas to make pure white (`#ffffff`) elements feel like they are glowing.
*   **Do** keep descriptions short and human. No corporate speak.

### Don't
*   **Don't** use 100% black. Always use the charcoal `on-surface` (#1b1c1a) for text to maintain the warm Scandinavian tone.
*   **Don't** use "pill" buttons (full roundedness) for everything. Keep it to `md` (0.375rem) to maintain a structural, architectural feel.
*   **Don't** overcrowd the viewport. If a section feels "full," double the vertical spacing.
*   **Don't** add fake terminal elements (system status, latency, version numbers). Keep it human and warm.
