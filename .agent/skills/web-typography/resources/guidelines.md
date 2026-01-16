# Web Typography Guidelines

This is a comprehensive reference for web typography standards used in this project.

## Font Loading & Performance

- Use **WOFF2** as the primary format.
- Implement `font-display: swap`.
- Preload critical fonts.
- Use font subsetting to reduce file size.

## Typography Scale & Layout

- Use **Modular Scale** for consistent sizing.
- Implement fluid typography using `clamp()`.
- Line Length: 45-75 characters per line (80 chars max).
- Line Height: 1.4 - 1.6 for body text.
- Use `rem` for accessibility (user scaling) and `em` for relative spacing.

## Google Fonts

- Prefer self-hosting for performance/privacy.
- Use `&display=swap` and `preconnect` if using the API.

## Icon Fonts

- Prefer **SVGs** or Lucide-React over icon fonts.
- Use `aria-hidden="true"` for decorative icons.

## Variable Fonts

- Use `font-variation-settings`.
- Implement named instances.
- Provide fallbacks for older browsers.
