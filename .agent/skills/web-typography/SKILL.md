---
name: web-typography
description: Expertise in web fonts, typography scale, and font loading. Covers performance (WOFF2, subsetting), fluid scaling (clamp), and accessibility.
---

# Web Typography & Fonts

This skill ensures our typography is performant, readable, and accessible across all devices.

## Directives

1.  **Sizing**: Use `rem` for accessibility. Implement fluid typography with `clamp(min, preferred, max)`.
2.  **Performance**: Prioritize **WOFF2**. Use `font-display: swap` to prevent FOIT.
3.  **Readability**: Maintain 45-75 chars per line. Use 1.4-1.6 line-height.
4.  **Self-Hosting**: Prefer self-hosting fonts over external CDNs for privacy and performance.
5.  **Iconography**: Prefer SVG/Lucide over icon fonts. Ensure proper ARIA labeling.

## Comprehensive Guidelines

For detailed instructions on font stacks, subsetting strategies, and variable font settings, see `resources/guidelines.md`.
