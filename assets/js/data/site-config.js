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
    light: { accent: '#34751a', accentHover: '#285c12', accentSoft: '#eef7e8', accentLine: '#c9e3b7', onAccent: '#ffffff', page: '#fcfcfb', surface: '#ffffff', surfaceAlt: '#f5f5f3', surfaceHover: '#eeedeb', ink: '#24232a', muted: '#65636f', quiet: '#726d7a', line: '#e7e5e9', lineStrong: '#d4d1da' },
    dark: { accent: '#a8ed62', accentHover: '#c0f78d', accentSoft: '#24321b', accentLine: '#48642f', onAccent: '#19290d', page: '#17171a', surface: '#1d1d21', surfaceAlt: '#232327', surfaceHover: '#2b2a30', ink: '#eeedf1', muted: '#aaa7b3', quiet: '#8c8797', line: '#313037', lineStrong: '#45424e' }
  }
};
