module.exports = {
    title: 'ConDog - コンピュータ研究部',
    description: 'コンピュータ研究部の講義資料です。',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
      ['link', { rel: 'icon', size: '192x192', href: '/logo.png' }],
      ['link', { rel: 'apple-touch-icon', size: '192x192', href: '/logo.png'}],
      ['link', { rel: 'stylesheet', href: '/main.css' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
      ['meta', { name: 'theme-color', content: '#fabe00' }],
      ['meta', { name: 'keywords', content: 'コンピュータ研究部' }],
      ['meta', { name: 'og:description',content: 'コンピュータ研究部の講義資料です。'}],
      ['meta', { property: 'og:title', content: 'ConDog - コンピュータ研究部' }],
      ['meta', { property: 'og:locale', content: 'ja' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: 'https://conken-docs.netlify.app/' }],
      ['meta', { property: 'og:site_name', content: 'ConDog - コンピュータ研究部' }],
      ['meta', { property: 'og:image', content: 'https://conken-docs.netlify.app/logo.png'}]
    ],
    themeConfig: {
      logo: '/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'GitHub', link: 'https://github.com/Conken-NitKit/conken-docs' }
      ],
      sidebar: [
        '/',
        {
          title: 'インターネットの仕組み',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            '/ServerClient',
            '/NetworkBasicKnowledge',
            '/TCPIP',
            '/Transport',
            '/IPAddr',
            '/NetworkInterface',
            '/URL'
          ]
        },
        {
          title: 'Webを支える技術',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            '/www',
            '/WebBasicKnowledge',
            '/WebConstructure',
            '/WebFlow',
            '/HTTP',
            '/REST',
            '/Cookie',
            '/WebAPI'
          ]
        }
      ],
    },
    markdown: {
      externalLinks: {
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      extendMarkdown: md => {
        md.set({ breaks: true, linkify: false })
      }
    },
    locales: {
      '/': {
        lang: 'ja'
      }
    },
    plugins: [
      [
        'vuepress-plugin-redirect',
        {
          locales: true,
        },
      ],
    ]
  };