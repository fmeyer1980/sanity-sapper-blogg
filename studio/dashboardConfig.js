export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec90ca7d2193ef40e8e0142',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blogg-studio',
                  apiId: 'acef5f47-4e32-4e1f-87d5-27ca193f941c'
                },
                {
                  buildHookId: '5ec90ca7566965bbe13ccaf2',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blogg',
                  apiId: '6fb75ad5-6142-4df0-9831-30f63ebc5633'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/sanity-sapper-blogg',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blogg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
