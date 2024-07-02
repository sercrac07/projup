#!/usr/bin/env node

import coinp from 'coinp'
import * as fs from 'fs'
import path from 'path'

import { CONTENTS, PACKAGES } from './lib/consts'
import { detectPackageManager } from './lib/process'
;(async () => {
  coinp.intro('Project Generator')

  const packageManager = detectPackageManager()

  const projectPath = await coinp.text({
    message: 'Project path:',
    placeholder: './',
    defaultValue: './',
    initialValue: './',
    verify(value) {
      const pathRegex = /^\.\/(?!\/)(?!.*\/\/)[^\0<>:"|?*]*$/
      if (!value.startsWith('./')) return 'You must include a relative path'
      if (!pathRegex.test(value)) return 'You must specify a valid path'
    },
  })

  const projectType = await coinp.select({
    message: 'Select a project type:',
    choices: [
      { label: 'Fast project', value: 'fast' },
      { label: 'Discord bot', value: 'discord' },
    ],
  })

  const projectLang = await coinp.select({
    message: 'Do you want to use TypeScript?',
    choices: [
      { label: 'Yes', value: 'typescript' },
      { label: 'No', value: 'javascript' },
    ],
  })

  const fullPath = path.join(process.cwd(), projectPath)

  const initLoader = coinp.loader()
  initLoader.start('Creating project')

  if (fs.existsSync(fullPath)) {
    const files = fs.readdirSync(fullPath)
    if (files.length > 0) {
      initLoader.end('Error creating the project')
      coinp.outro({ type: 'error', title: 'Project already exists', message: [`The path "${fullPath}" is not empty.`] })
      process.exit(1)
    }
  } else {
    fs.mkdirSync(fullPath, { recursive: true })
  }

  const projectName = path.basename(fullPath === './' ? process.cwd() : fullPath)

  function createContent(key: string, value: string, currentPath: string) {
    if (key === 'TODO') {
      initLoader.end('Project ready')
      const steps = [`cd ${projectPath}`, value.replace(/{{package_install}}/g, PACKAGES[packageManager]['install'])]
      if (projectPath === './') steps.shift()
      steps.forEach((step, index) => {
        if (step === '') steps.splice(index, 1)
      })

      if (steps.length >= 1) coinp.outro('Now run:', ...steps)
      else coinp.outro('Edit yout project!')
      return
    }
    if (typeof value === 'string') fs.writeFileSync(path.join(currentPath, key), value.replace(/{{name}}/g, projectName))
    else {
      const newPath = path.join(currentPath, key)
      fs.mkdirSync(newPath, { recursive: true })
      for (let k in value as any) {
        createContent(k, value[k as any], newPath)
      }
    }
  }

  for (let k in CONTENTS[projectType][projectLang]) createContent(k, CONTENTS[projectType][projectLang][k as keyof (typeof CONTENTS)['discord' | 'fast']['javascript' | 'typescript']], fullPath)
})()
