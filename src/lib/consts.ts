export const CONTENTS: any = {
  fast: {
    typescript: {
      'package.json': '{\n\t"name": "{{name}}",\n\t"description": "Project generated with \\"projup\\"",\n\t"main": "./dist/index.js",\n\t"dependencies": {\n\t\t"typescript": "^5.5.2"\n\t}\n}\n',
      'tsconfig.json': '{\n\t"compilerOptions": {\n\t\t"target": "ES2022",\n\t\t"module": "CommonJS",\n\t\t"moduleResolution": "Node",\n\t\t"strict": true,\n\t\t"noImplicitAny": true,\n\t\t"declaration": false,\n\t\t"skipLibCheck": true,\n\t\t"strictNullChecks": true,\n\t\t"resolveJsonModule": true,\n\t\t"outDir": "dist"\n\t},\n\t"include": ["src"],\n\t"exclude": ["node_modules"]\n}\n',
      src: {
        'index.ts': '// Your project goes here\n',
      },
      TODO: '{{package_install}}',
    },
    javascript: {
      'package.json': '{\n\t"name": "{{name}}",\n\t"description": "Project generated with \\"projup\\"",\n\t"main": "./index.js"\n}',
      'index.js': '// Your project goes here\n',
      TODO: '',
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
