export function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent
  if (userAgent) {
    // if (userAgent.includes('yarn')) return 'yarn'
    if (userAgent.includes("pnpm")) return "pnpm"
    // if (userAgent.includes('bun')) return 'bun'
    if (userAgent.includes("npm")) return "npm"
  }
  if (process.argv[0].includes("npx") || process.argv.some(arg => arg.includes("npx"))) return "npm"
  return "npm"
}
