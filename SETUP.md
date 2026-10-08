# CoreArmorX website setup

## Local edit loop

1. Edit public identity/links in `assets/js/data/site-config.js`.
2. Edit landing prose in `assets/js/data/landing-content.js`.
3. Edit article metadata in `assets/js/data/docs-content.js` and prose in `assets/content/docs/`.
4. Rebuild the documentation bundle after article changes.
5. Run tests and inspect both `index.html` and `reference.html` locally.

```powershell
node tools/build-docs-bundle.mjs .
node tools/build-docs-bundle.mjs . --check
node --test
node tests/validate-theme.mjs
```

## Refresh public plugin defaults

From this website checkout, with the sibling private plugin checkout available:

```powershell
node tools/sync-plugin-configs.mjs ..\plugin .
node tools/build-config-bundle.mjs .
```

The map permits exactly four files. Review `synced-configs/.sync-state.json`, the LF-normalized snapshots and generated bundle diff. Do not add `plugin.yml` or runtime data.

## Hero image

The local logo is configured in `site-config.js` under `assets.heroPreview.images`. Keep `objectFit: 'contain'` so the whole mark remains visible. One image stays static; add two or more local images only when a real gallery is available.

## Later GitHub configuration

Add `COREX_PLUGIN_READ_TOKEN` to the website repository only when automated private-source sync is authorized. Grant read-only Contents access to `IceWolf23X/CoreArmorX-plugin`. The workflow remains inert without the secret. `COREX_WEBSITE_WRITE_TOKEN` is optional only for bot commits when normal `GITHUB_TOKEN` permissions are insufficient.

Pages Actions additionally requires repository variable `COREX_PAGES_ENABLED=true`. Enabling, pushing and publishing are separate external actions.

## Public output

`node tools/prepare-pages.mjs .` builds ignored `_site/` from an allowlist. Verify the CNAME, routes, assets, synchronized defaults and absence of secrets before any authorized publication.

## Privacy and sitemap

See [Privacy and crawl-discovery maintenance](docs/PRIVACY_AND_SEO.md) for editable notice content, controller/contact, canonical page inventory and required generation checks.
