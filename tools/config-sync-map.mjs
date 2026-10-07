/** Allow-listed public defaults copied from the private CoreArmorX plugin repository. */
export const SOURCE_REPOSITORY = 'IceWolf23X/CoreArmorX-plugin';
export const SOURCE_REF = 'main';

export const CONFIG_FILES = [
  { id: 'paper/config.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/config.yml', target: 'synced-configs/paper/config.yml', article: 'paper/config-yml' },
  { id: 'paper/armor-upgrades.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/armor-upgrades.yml', target: 'synced-configs/paper/armor-upgrades.yml', article: 'paper/armor-upgrades-yml' },
  { id: 'paper/armor-skins.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/armor-skins.yml', target: 'synced-configs/paper/armor-skins.yml', article: 'paper/armor-skins-yml' },
  { id: 'paper/messages.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/messages.yml', target: 'synced-configs/paper/messages.yml', article: 'paper/messages-yml' }
];
