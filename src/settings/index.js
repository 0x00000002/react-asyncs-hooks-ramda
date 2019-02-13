export const common = {
  siteName: 'Untitled test',
  rates: {
    'NZD': 1,
    'USD': 0.76,
    'EUR': 0.67
  }
}

const _settings = {
  development: {
    siteName: `${common.siteName} (Development)`,
    siteWarning: 'Work in progress'
  },
  staging: {
    siteName: `${common.siteName} (Staging)`,
    siteWarning: 'Work in progress'
  },
  production: {
  }
}

const settings = Object.assign(
  {},
  common,
  _settings[process.env.NODE_ENV]
)

export default settings
