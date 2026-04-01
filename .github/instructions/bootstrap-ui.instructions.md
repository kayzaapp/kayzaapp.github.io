---
applyTo: "src/{app,shared,features}/**/*.{html,scss,css}"
description: "Use when editing Bootstrap layout, spacing, utilities, responsive classes, and component styling in app templates and styles."
---

# Bootstrap UI File Instructions

Use these rules when working on Bootstrap-oriented templates and styles.

## Core Bootstrap Standards

1. Prefer Bootstrap utility classes over custom CSS when equivalent behavior exists.
2. Use responsive breakpoints deliberately (`sm`, `md`, `lg`, `xl`, `xxl`) to avoid one-size-fits-all layouts.
3. Keep grid markup clear and predictable (`container`/`container-fluid`, `row`, `col-*`) and avoid unnecessary nesting.
4. Use semantic HTML first, then enhance with Bootstrap classes.
5. Reuse Bootstrap components (cards, navs, alerts, buttons, forms) before introducing new custom structures.

## Styling Boundaries

1. Keep custom CSS minimal and focused on branding or behavior Bootstrap cannot express.
2. Avoid hardcoded pixel spacing when Bootstrap spacing utilities can express the same intent.
3. Keep overrides scoped to component styles; do not introduce global overrides unless explicitly required.
4. Preserve accessibility: sufficient color contrast, visible focus styles, and correct ARIA usage when needed.

## Change Safety

1. Keep edits minimal and limited to the requested UI behavior.
2. Preserve existing Angular structure and bindings while improving Bootstrap usage.
3. Run available checks after behavior-affecting changes and call out residual risks if checks are not run.
