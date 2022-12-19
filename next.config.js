module.exports = {
  poweredByHeader: false,
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    domains: ['i.imgur.com', 'imgur.com', 'cdn.discordapp.com'],
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
  async redirects() {
    return [
      {
        source: '/ig',
        destination: 'https://www.instagram.com/adrian1g__',
        permanent: true,
      },
      {
        source: '/dc',
        destination: 'https://discord.gg/SN2CShCWuc',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/adrian1g420',
        permanent: true,
      }
    ]
  }
};
