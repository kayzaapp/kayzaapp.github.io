---
applyTo: "src/{app,shared,features}/**/*.{ts,html,scss,css}"
description: "Use when editing Angular components, templates, and styles in src/app, src/shared, or src/features. Enforces Angular MCP workflow and modern component standards."
---

# Angular App File Instructions

Use these rules when working on files under `src/app`, `src/shared`, or `src/features`.

## Required MCP Sequence

1. Call `mcp_angular-cli_list_projects` first.
2. Call `mcp_angular-cli_get_best_practices` with the workspace path before code edits.
3. Use `mcp_angular-cli_find_examples` for modern Angular syntax and patterns.
4. Use `mcp_angular-cli_search_documentation` for concept/API questions aligned to project Angular version.

## Component Quality Rules

1. Prefer standalone components.
2. Use strongly typed APIs and avoid `any`.
3. Use modern template control flow where appropriate.
4. Follow selector prefix and project conventions discovered from MCP metadata.
5. Keep presentation logic in components and move shared/business logic to services.

## Change Safety

1. Keep edits minimal and scoped to the requested change.
2. Run build/tests when available after modifications.
3. Call out residual risk when checks cannot be run.
