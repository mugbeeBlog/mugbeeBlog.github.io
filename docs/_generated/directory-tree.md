mugbeeBlog
├── .astro
│   ├── collections
│   │   ├── blogs.schema.json
│   │   └── messages.schema.json
│   ├── content-assets.mjs
│   ├── content-modules.mjs
│   ├── content.d.ts
│   ├── data-store.json
│   ├── settings.json
│   └── types.d.ts
├── .gemini
│   ├── config.yaml
│   └── styleguide.md
├── .git
├── .github
│   ├── workflows
│   │   └── deploy.yml
│   └── pull_request_template.md
├── .vscode
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── docs
│   └── _generated
│       ├── directory-tree.md
│       └── wsl-extensions.txt
├── public
│   ├── icons
│   │   ├── github.svg
│   │   ├── x.svg
│   │   └── youtube.svg
│   ├── images
│   │   └── no-images.png
│   ├── apple-touch-icon.png
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── ArticleCard.astro
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeaderNav.astro
│   │   ├── MessageBoard.astro
│   │   ├── Pagination.astro
│   │   ├── Recommend.astro
│   │   ├── SocialLinks.astro
│   │   └── Taxonomy.astro
│   ├── content
│   │   ├── messages
│   │   │   ├── 2025-10-30.md
│   │   │   └── 2026-01-02.md
│   │   ├── config.ts
│   │   └── microcms.ts
│   ├── data
│   │   └── constants.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── PageLayout.astro
│   ├── pages
│   │   ├── page
│   │   │   └── [...page].astro
│   │   ├── taxonomy
│   │   │   ├── category
│   │   │   │   └── [slug]
│   │   │   │       └── [...page].astro
│   │   │   ├── tag
│   │   │   │   └── [slug]
│   │   │   │       └── [...page].astro
│   │   │   └── index.astro
│   │   ├── [...slug].astro
│   │   └── index.astro
│   ├── styles
│   │   └── settings
│   │       └── global.scss
│   └── utils
│       ├── date.ts
│       ├── sortBlogs.ts
│       └── taxonomy.ts
├── .browserslistrc
├── .env
├── .gitignore
├── .nojekyll
├── .prettierrc.mjs
├── README.md
├── astro.config.mjs
├── changelog.config.cjs
├── eslint.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── stylelint.config.mjs
└── tsconfig.json
