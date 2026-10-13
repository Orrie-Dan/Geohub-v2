// Sign-in links for each category's app on the GeoHub portal (gh.space.gov.rw)
export const categorySignInLinks = {
  agriculture: "https://gh.space.gov.rw/agriculture-livestock/",
  conservation: "https://gh.space.gov.rw/parks-operations/",
  "disaster-management": "https://gh.space.gov.rw/disaster-emergency-mapping",
  education: "https://gh.space.gov.rw/education-mapping/",
  environment: "https://gh.space.gov.rw/environment-mapping/",
  health: "https://gh.space.gov.rw/health-mapping/",
  infrastructure: "https://gh.space.gov.rw/infrastructure-mapping/",
  land: "https://gh.space.gov.rw/land-administration/",
  "local-government": "https://gh.space.gov.rw/local-government-mapping/",
  mining: "https://gh.space.gov.rw/mining-sites/",
  population: "https://gh.space.gov.rw/population-mapping/",
  trade: "https://gh.space.gov.rw/trade-mapping/",
  "water-resources": "https://gh.space.gov.rw/water-resources/",
} as const

export type CategorySlug = keyof typeof categorySignInLinks
