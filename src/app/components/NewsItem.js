import React, { Component } from 'react'

export default class NewsItem extends Component {
  render(props) {
    let { Title, Description, imageUrl} = this.props;
    const posts = [
        {
          id: 1,
          title: 'Sports briefs: White Sox hire Venable as manager',
          href: "https://le10sport.com/football/mercato/mercato-henry-a-vendu-la-meche-pour-le-retour-de-zidane-718960",
          description:
            'CHICAGO — The Chicago White Sox have hired Will Venable to take over as manager, turning to the former big league outfielder to help turn around the team after a miserable season.',
          date: 'Oct 16, 2024',
          datetime: '2020-03-16',
          category: { title: 'Sports', href: 'https://www.telegraphherald.com' },
          author: {
            name: 'Telegraph Herald',
            role: 'United States of America',
            href: 'https://www.telegraphherald.com',
            imageUrl:"https://i.bytvi.com/domain_icons/telegraphherald.png",
          },
        },
        // More posts...
      ]
    return (
      <div>
        {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {Title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{Description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
      </div>
    )
  }
}
