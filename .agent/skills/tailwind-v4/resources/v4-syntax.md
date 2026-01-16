# Tailwind v4 Technical Reference

## Import Syntax

```css
@import "tailwindcss";
```

## Theme Configuration Example

```css
@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
  --color-primary-500: oklch(0.84 0.18 117.33);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
}
```

## Best Practices Checklist

- Use `gap` instead of margins on children.
- Use `container mx-auto` for centered layouts.
- Avoid `!important` flags.
- Override 3rd-party library styles only via `@apply` as an exception.
- Use `focus-visible:` for all interactive elements.
