# CoreArmorX website

Primary site: <https://wiki-corearmorx.icewolf23x.dev/>. This repository contains the CoreArmorX 2026.1.2 landing page, offline-capable wiki, synchronized public configuration reference and optional public website-release catalog.

The site has no backend and can open directly from `index.html`. Product identity and links live in `assets/js/data/site-config.js`; landing copy in `landing-content.js`; wiki metadata in `docs-content.js`; each article body is independently editable under `assets/content/docs/`. Root `features.html`, `installation.html`, `configuration.html`, `docs.html`, `faq.html` and `support-policy.html` preserve previous URLs/bookmarks through `assets/js/legacy-routes.js`.

## Configuration defaults

Only four public resources are allow-listed from private `IceWolf23X/CoreArmorX-plugin` on `main`: `config.yml`, `armor-upgrades.yml`, `armor-skins.yml` and `messages.yml`. `plugin.yml`, sources, tests, secrets and runtime data are excluded. LF-normalized text snapshots live in `synced-configs/paper/`; the generated JavaScript bundle exists for offline `file://` use.

```powershell
node tools/sync-plugin-configs.mjs ..\plugin .
node tools/build-config-bundle.mjs .
node tools/build-docs-bundle.mjs .
node tools/build-docs-bundle.mjs . --check
node --test
node tests/validate-theme.mjs
```

The GitHub sync workflow does nothing without the later `COREX_PLUGIN_READ_TOKEN`. That secret needs read-only Contents access to the private plugin repository. Credentials never belong in browser assets or synchronized state.

## Downloads and releases

Download buttons point to <https://modrinth.com/plugin/corearmorx>. The Releases view may also read public releases from `IceWolf23X/CoreArmorX-website`; an empty public release catalog is valid. It never reads the private plugin repository.

## Editing and publication

See [SETUP.md](SETUP.md) for the local workflow and `docs/` for architecture, sync, gallery, release and deployment contracts. Local preparation does not authorize a commit, push, release or Pages deployment.

## Privacy and sitemap

See [Privacy and crawl-discovery maintenance](docs/PRIVACY_AND_SEO.md) for editable notice content, controller/contact, canonical page inventory and required generation checks.
