export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61d85575efd7842185c03d83',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-qcdtwv58',
                  apiId: 'ddb09ef2-063b-4ec7-b050-416cf1344b88'
                },
                {
                  buildHookId: '61d85576ba39211ef9fff51a',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-w7a6isxs',
                  apiId: '4793f3b6-cb9b-46ed-8635-a7ea39cec1aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/J1mmyC01/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-w7a6isxs.netlify.app', category: 'apps'}
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
