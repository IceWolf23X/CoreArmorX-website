/* Public CoreArmorX identity, links, release source and theme tokens. */
window.COREX_SITE = {
  schemaVersion: 1,
  brand: {
    family: 'CoreX', product: 'CoreArmorX', author: 'IceWolf23X', familyLabel: 'A CoreX plugin',
    tagline: 'Armor progression, kept vanilla.', language: 'en',
    logo: 'assets/img/corearmorx-logo.png', favicon: 'assets/img/corearmorx-logo.png',
    description: 'CoreArmorX adds configurable vanilla crafting progression and netherite armor skins to Paper servers.'
  },
  links: {
    download: 'https://modrinth.com/plugin/corearmorx',
    modrinth: 'https://modrinth.com/plugin/corearmorx',
    github: 'https://github.com/IceWolf23X/CoreArmorX-issues',
    issues: 'https://github.com/IceWolf23X/CoreArmorX-issues/issues',
    official: 'https://wiki-corearmorx.icewolf23x.dev/'
  },
  releases: {
    provider: 'github', owner: 'IceWolf23X', repository: 'CoreArmorX-website',
    cacheMinutes: 15, requestTimeoutMs: 10000, maxPages: 10,
    assetNames: { paper: ['CoreArmorX-*.jar', '*corearmorx*.jar'], velocity: [] }
  },
  assets: {
    heroPreview: {
      images: [{ src: 'assets/img/corearmorx-logo.png', alt: 'CoreArmorX plugin logo' }],
      autoplay: false, intervalMs: 5000, transitionMs: 240, pauseOnHover: true,
      objectFit: 'contain', src: '', alt: 'CoreArmorX plugin logo'
    }
  },
  theme: {
    default: 'light', storageKey: 'corex.theme',
    light: { accent: '#34751a', accentHover: '#285c12', accentSoft: '#eef7e8', accentLine: '#c9e3b7', onAccent: '#ffffff', page: '#fcfdfb', surface: '#ffffff', surfaceAlt: '#f2f6ef', surfaceHover: '#e8efe3', ink: '#23291f', muted: '#5f6a58', quiet: '#637158', line: '#dfe7d8', lineStrong: '#c6d5ba' },
    dark: { accent: '#a8ed62', accentHover: '#c0f78d', accentSoft: '#24321b', accentLine: '#48642f', onAccent: '#19290d', page: '#171a15', surface: '#1d2219', surfaceAlt: '#252c20', surfaceHover: '#2e3827', ink: '#edf3e8', muted: '#adbba2', quiet: '#93a287', line: '#323d2a', lineStrong: '#47563c' }
  }
};
