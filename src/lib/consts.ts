export const CONTENTS = {
  fast: {
    typescript: {
      'package.json': '{\n\t"name": "{{name}}",\n\t"description": "Project generated with \\"projup\\"",\n\t"main": "./dist/index.js",\n\t"devDependencies": {\n\t\t"typescript": "^5.5.2",\n\t\t"ts-node": "^10.9.2"\n\t}\n}\n',
      'tsconfig.json': '{\n\t"compilerOptions": {\n\t\t"target": "ES2022",\n\t\t"module": "CommonJS",\n\t\t"moduleResolution": "Node",\n\t\t"strict": true,\n\t\t"noImplicitAny": true,\n\t\t"declaration": false,\n\t\t"skipLibCheck": true,\n\t\t"strictNullChecks": true,\n\t\t"resolveJsonModule": true,\n\t\t"outDir": "dist"\n\t},\n\t"include": ["src"],\n\t"exclude": ["node_modules"]\n}\n',
      src: {
        'index.ts': '// Your project goes here\n',
      },
      TODO: '{{package_install}}',
    },
    javascript: {
      'package.json': '{\n\t"name": "{{name}}",\n\t"description": "Project generated with \\"projup\\"",\n\t"main": "./index.js"\n}\n',
      'index.js': '// Your project goes here\n',
      TODO: '',
    },
  },
  discord: {
    typescript: {
      'package.json': '{\n\t"name": "{{name}}",\n\t"description": "Project generated with \\"projup\\"",\n\t"main": "./dist/index.js",\n\t"dependencies": {\n\t\t"discord.js": "^14.15.3"\n\t},\n\t"devDependencies": {\n\t\t"typescript": "^5.5.2",\n\t\t"ts-node": "^10.9.2"\n\t}\n}\n',
      'tsconfig.json': '{\n\t"compilerOptions": {\n\t\t"target": "ES2022",\n\t\t"module": "CommonJS",\n\t\t"moduleResolution": "Node",\n\t\t"strict": true,\n\t\t"noImplicitAny": true,\n\t\t"declaration": false,\n\t\t"skipLibCheck": true,\n\t\t"strictNullChecks": true,\n\t\t"resolveJsonModule": true,\n\t\t"outDir": "dist"\n\t},\n\t"include": ["src"],\n\t"exclude": ["node_modules"]\n}\n',
      src: {
        'index.ts': "import { Client } from 'discord.js'\nimport { CONFIG } from './env'\n\nconst client = new Client({\n\tintents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],\n})\n\nclient.on('ready', c => console.log(`${c.user.username} is online.`))\n\nclient.login(CONFIG.DISCORD_TOKEN)\n",
        'env.ts': "export const CONFIG = {\n\tDISCORD_TOKEN: 'YOUR_DISCORD_CLIENT_TOKEN',\n}\n",
      },
      TODO: '{{package_install}}',
    },
    javascript: {
      'package.json': '{\n\t"name": "{{name}}",\n\t"description": "Project generated with \\"projup\\"",\n\t"main": "./index.js",\n\t"type": "module",\n\t"dependencies": {\n\t\t"discord.js": "^14.15.3"\n\t}\n}\n',
      'index.js': "import { Client } from 'discord.js'\nimport { CONFIG } from './env.js'\n\nconst client = new Client({\n\tintents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],\n})\n\nclient.on('ready', c => console.log(`${c.user.username} is online.`))\n\nclient.login(CONFIG.DISCORD_TOKEN)\n",
      'env.js': "export const CONFIG = {\n\tDISCORD_TOKEN: 'YOUR_DISCORD_CLIENT_TOKEN',\n}\n",
      TODO: '{{package_install}}',
    },
  },
}

export const PACKAGES = {
  npm: {
    install: 'npm i',
  },
  pnpm: {
    install: 'pnpm install',
  },
}
