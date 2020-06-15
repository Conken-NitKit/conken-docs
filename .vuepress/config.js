module.exports = {
    title: 'コンピュータ研究部 講義資料',
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
      ['meta', { property: 'og:title', content: 'コンピュータ研究部 - 講義資料' }],
      ['meta', { property: 'og:locale', content: 'ja' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: 'https://conken-docs.netlify.app/' }],
      ['meta', { property: 'og:site_name', content: 'コンピュータ研究部 - 講義資料' }],
      ['meta', { property: 'og:image', content: 'https://hackz.team/images/student-group/computer-kenkyubu.jpg'}]
    ],
    themeConfig: {
      logo: '/logo.png',
      sidebar: [
        '/',
        {
          title: 'インターネットの仕組み',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            '/WebBasicKnowledge',
            '/ServerClient',
            '/NetworkBasicKnowledge',
            '/TCPIP',
            '/Transport',
            '/6',
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
  };