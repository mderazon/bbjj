---
name: tailwind-v4
description: Guidelines for Tailwind CSS v4, focusing on CSS-first configuration (@theme), utility-first patterns, and avoiding @apply.
---

# Tailwind CSS v4 Expert

This skill ensures that styling is consistent, performant, and follows the modern "v4" paradigm.

## Core Directives

1.  **CSS-First Configuration**: Define design tokens (colors, fonts, breakpoints) directly in the CSS file using the `@theme` block. Avoid legacy `tailwind.config.js`.
2.  **Utility-First**: Always use utility classes in markup. Extract reusable components in React instead of using `@apply` in CSS.
3.  **Dynamic Classes**: **NEVER** build dynamic class strings (e.g., `` `bg-${color}-500` ``). Always use mapping objects.
4.  **Logical Ordering**: Use the Prettier plugin to ensure classes are ordered consistently.
5.  **Layout**: Prioritize Flex/Grid with `gap` over manual child margins.

## Implementation Patterns

- **Conditional Classes**: Use the `cn()` or `clsx()` utility.
- **Arbitrary Values**: Use `[value]` for one-off pixel-perfect styles.
- **Accessibility**: Define `focus-visible:` states and use `sr-only` for screen-reader content.

## Configuration Reference

For specific syntax on the `@theme` block and v4 import patterns, see `resources/v4-syntax.md`.
