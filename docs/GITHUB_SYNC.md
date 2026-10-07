# Private plugin configuration sync

The website may synchronize four public defaults from `IceWolf23X/CoreArmorX-plugin` branch `main`. Configure `COREX_PLUGIN_READ_TOKEN` later with read-only Contents access. Without it, the workflow reports a notice and performs no checkout, generation or commit.

The allowlist is `tools/config-sync-map.mjs`. It excludes `plugin.yml`, source, tests, secrets and runtime/player data. Synced state records repository/ref/commit provenance without credentials. A website write token is optional only for an authorized workflow commit; it does not belong in browser assets.
