/* Product copy for the CoreArmorX landing page; the HTML entrypoint stays generic. */
window.COREX_LANDING = {
  order: ['hero', 'compatibility', 'features', 'setup', 'docsPromo', 'faq', 'finalCta'],
  header: { nav: [
    { label: 'Features', href: '#/features', nav: 'features' },
    { label: 'Setup', href: '#/setup', nav: 'setup' },
    { label: 'Documentation', href: '#/docs/overview', nav: 'docs', docsLink: true },
    { label: 'FAQ', href: '#/docs/reference/faq', nav: 'faq', docsLink: true },
    { label: 'Support', href: '#/docs/reference/support-policy', nav: 'docs', docsLink: true }
  ] },
  hero: {
    eyebrow: 'Vanilla crafting, controlled progression',
    title: [{ text: 'Armor progression,' }, { text: 'kept vanilla.', accent: true }],
    description: 'Guide armor from leather through copper, chainmail and iron, then branch toward diamond, gold or turtle gear. Add netherite visual skins without databases, GUIs or a resource pack.',
    actions: [
      { label: 'Download on Modrinth', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Read the setup guide', href: '#/docs/getting-started/installation', icon: 'book', docsLink: true }
    ],
    platforms: ['Paper 1.21.11+', 'Java 21+'],
    preview: { assetKey: 'heroPreview', ariaLabel: 'CoreArmorX product preview', topLeft: 'COREARMORX / PAPER', placeholderLabel: 'PLUGIN PREVIEW', placeholderTitle: 'Armor with a progression path.', placeholderText: 'Use crafting, permissions and safe item metadata.', dimensions: 'PLUGIN LOGO / 512×512', captionLeft: 'CoreArmorX 2026.1.2', captionRight: 'Paper only', tag: 'No required resource pack.' }
  },
  compatibility: {
    labelLines: ['BUILT FOR', 'VANILLA+ SERVERS'],
    items: [
      { label: 'Paper 1.21.11+', icon: 'server' }, { label: 'Java 21+', icon: 'code' },
      { label: 'Vanilla crafting', icon: 'box' }, { label: 'YAML configuration', icon: 'file' },
      { label: 'Permission locks', icon: 'key' }, { label: 'No database', icon: 'shield' }
    ]
  },
  features: {
    id: 'features', number: '01 /', eyebrow: 'Progression and skins',
    title: ['A clear path.', 'A familiar Minecraft feel.'],
    description: 'CoreArmorX changes the route to an item, then leaves normal upgraded armor clean and vanilla.',
    cards: [
      { icon: 'layers', title: 'Configurable armor progression.', text: 'Default routes move from leather to copper, chainmail and iron, with diamond, gold and turtle endpoints.', link: { label: 'See the progression', href: '#/docs/overview/progression-and-recipes' } },
      { icon: 'box', title: 'Recipes players already understand.', text: 'Use normal crafting, recipe-book discovery and one-item ingredient slots without a custom menu.', link: { label: 'Understand recipe matching', href: '#/docs/overview/progression-and-recipes~recipe-model' } },
      { icon: 'shield', title: 'Netherite strength, vanilla looks.', text: 'Apply leather, copper, chainmail, iron, gold or diamond skins while retaining a netherite-equivalent profile.', link: { label: 'Explore skins', href: '#/docs/overview/netherite-skins' } },
      { icon: 'sliders', title: 'Lore and durability you control.', text: 'Rebuild lore from placeholders and optionally track cosmetic durability globally, by skin or by armor piece.', link: { label: 'Configure skin state', href: '#/docs/paper/armor-skins-yml' } },
      { icon: 'key', title: 'Locks without player data.', text: 'Permission nodes gate upgrades, skins or use. CoreArmorX stores no player progression database.', link: { label: 'Review permissions', href: '#/docs/reference/permission-reference' } },
      { icon: 'shield', title: 'Metadata-aware transformations.', text: 'Preserve supported item data and block foreign custom-item PDC by default.', link: { label: 'Review item safety', href: '#/docs/overview/item-safety' } }
    ],
    bottom: { strong: 'Standalone by design.', text: 'No Vault, PlaceholderAPI, database, GUI library, resource pack or CoreToolsX dependency.', link: { label: 'Read the complete overview', href: '#/docs/overview' } }
  },
  setup: {
    id: 'setup', number: '02 /', eyebrow: 'One Paper plugin', title: ['Install once.', 'Tune the path in YAML.'], tabAriaLabel: 'CoreArmorX deployment',
    modes: [{
      id: 'paper', tabLabel: 'Paper server', tabIcon: 'server', title: 'CoreArmorX runs on Paper.',
      text: 'Install the JAR, start once, then edit four generated YAML files. A permissions plugin is optional unless progression locks are enabled.',
      steps: ['Download the current JAR from Modrinth.', 'Place it in the Paper server plugins folder and start once.', 'Edit plugins/CoreArmorX/*.yml and run /corearmorx reload.'],
      link: { label: 'Follow the installation guide', href: '#/docs/getting-started/installation' },
      topology: { labelLeft: 'DEPLOYMENT / PAPER', labelRight: 'SERVER-SIDE', nodes: [{ icon: 'users', label: 'Players' }, { icon: 'server', label: 'Paper', small: 'CoreArmorX', primary: true }, { icon: 'file', label: '4 YAML files' }], note: 'CoreArmorX has no proxy module and no required external service.' }
    }]
  },
  docsPromo: {
    eyebrow: 'Configuration without guesswork.', title: ['Every public default.', 'Every operational boundary.'],
    description: 'Search exact keys, inspect synchronized YAML, and follow focused guides for recipes, skins, permissions and troubleshooting.',
    cards: [
      { icon: 'layers', title: 'Feature overview', href: '#/docs/overview', text: 'Progression, skins, metadata and compatibility in practical terms.' },
      { icon: 'code', title: 'Paper configuration', href: '#/docs/paper/files', text: 'The four generated files with synchronized defaults and complete schemas.' }
    ]
  },
  faq: {
    id: 'faq', number: '03 /', eyebrow: 'Before you install', title: 'CoreArmorX essentials.',
    description: 'Short answers for the choices that affect a real server.', introLink: { label: 'Open the full FAQ', href: '#/docs/reference/faq' },
    items: [
      { question: 'Does CoreArmorX require a resource pack?', answer: 'No. Armor skins use vanilla armor materials and Paper item components.', link: { label: 'Read about skins', href: '#/docs/overview/netherite-skins' } },
      { question: 'Does it remove vanilla recipes?', answer: 'When override is enabled, protected direct armor recipes are replaced by progression recipes. Leather crafting and diamond-to-netherite smithing remain.', link: { label: 'Read recipe behavior', href: '#/docs/overview/progression-and-recipes' } },
      { question: 'Do config edits require a restart?', answer: 'Normal YAML and recipe changes reload with /corearmorx reload. Replacing the JAR or runtime requires a restart.', link: { label: 'See reload boundaries', href: '#/docs/getting-started/reload-vs-restart' } },
      { question: 'Can skins be removed?', answer: 'Yes. By default, craft the skinned piece with shears; the shears lose one durability and the armor returns to clean netherite.', link: { label: 'Read skin lifecycle', href: '#/docs/overview/netherite-skins~removal-and-fire' } }
    ]
  },
  finalCta: { title: ['Build the armor path', 'your server needs.'], description: 'Start with the stable build, then change only the progression, skins and locks you want.', actions: [{ label: 'Download on Modrinth', linkKey: 'download', icon: 'arrow', style: 'primary', external: true }, { label: 'Open configuration', href: '#/docs/paper/config-yml', icon: 'book' }] },
  footer: {
    caption: 'Armor progression, kept vanilla.',
    nav: [{ label: 'Overview', href: '#/docs/overview' }, { label: 'Setup', href: '#/docs/getting-started/installation' }, { label: 'Configuration', href: '#/docs/paper/files' }, { label: 'Issues', linkKey: 'issues', external: true }, { label: 'Modrinth', linkKey: 'modrinth', external: true }],
    copyright: '© 2026 CoreArmorX · A CoreX plugin by IceWolf23X.', scopeLink: { label: 'Documentation scope', href: '#/docs/reference/source-notes' }
  }
};
