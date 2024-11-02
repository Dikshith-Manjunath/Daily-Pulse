import React, { Component } from 'react'

export class NewsItem extends Component {
  render(props) {
    let { Title, Description, imageUrl} = this.props
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
    const article = [
      {
        id: 2,
        title: "Mercato : Henry a vendu la mèche pour le retour de Zidane",
        href: '#',
        description:
        "Davide Frattesi bagged his first-ever Serie A brace on Wednesday night as Inter Milan trounced Empoli 3-0 at Stadio Carlo Castellani. The in-form midfielder enjoyed a phenomenal night in Tuscany. Indeed, he extended his seasonal tally to six goal contributions between club and country this season. According to Opta, last night’s double saw the 25-year-old [...]The post Social Media – Inter Milan Midfielder Leads The Way In Goal Contributions Across Europe’s Top-Five Leagues appeared first on SempreInter.com.",
        date: 'Oct 16, 2024',
        datetime: '2024-10-16',
        category: { title: 'Finance', href: "https://sempreinter.com" },
        author: {
          name: 'Marko Vrakela',
          role: 'France',
          href: "https://sempreinter.com",
          imageUrl:"https://i.bytvi.com/domain_icons/sempreinter.png",
        },
      },
      // More posts...
    ]
    const article2 = [
      {
        id: 3,
        title: "ট্রফি নিয়ে ফিরছেন সাবিনারা, প্রস্তুত ছাদখোলা বাস",
        href: '#',
        description:
        "টানা দুবার সাফ নারী চ্যাম্পিয়নশিপের শিরোপা জিতেছে বাংলাদেশ। ঐতিহাসিক এই অর্জনের পর তাদের বরণ করে নিতে প্রস্তুত দেশের জনগণ। কাঠমান্ডুর হোটেলে আনন্দময় রাতের পর এক সকাল কেটেছে। বৃহস্পতিবার দুপুরেই ঢাকায় ফিরছে সাবিনা-তহুরা-শামসুন্নাহার জুনিয়রের দল। তাদের জন্য বিমানবন্দরে ছাদখোলা বাসও প্রস্তুত থাকছে। তাতে চড়ে শহড় প্রদক্ষিণ করবে পুরো দল। স্বাগতিক নেপালকে ২-১ গোলে হারিয়ে টানা দ্বিতীয়বার শিরোপা...বিস্তারিত",
        date: 'Oct 16, 2024',
        datetime: '2024-10-16',
        category: { title: 'Finance', href: "https://www.banglatribune.com" },
        author: {
          name: 'বাংলা ট্রিবিউন রিপোর্ট',
          role: 'bangladesh',
          href: 'https://www.banglatribune.com',
          imageUrl:"https://i.bytvi.com/domain_icons/banglatribune.png",
        },
      },
      // More posts...
    ]
    const article3 = [
      {
        id: 4,
        title: "Soccer-FA aims for equal access to football for girls in 90% schools by 2028",
        href: '#',
        description:
        "(Reuters) - The FA wants to achieve equal access to soccer for girls in 90% of schools by 2028 and boost the number of female coaches in the game as part of its new strategy to grow women's football, England's governing body said on Thursday. Read full story",
        date: 'Oct 16, 2024',
        datetime: '2024-10-16',
        category: { title: 'Sports', href: "https://www.banglatribune.com" },
        author: {
          name: 'The Star',
          role: 'Malaysia',
          href: 'https://www.banglatribune.com',
          imageUrl:"https://i.bytvi.com/domain_icons/thestar_my.png",
        },
      },
      // More posts...
    ]
    const article4 = [
      {
        id: 5,
        title: "Arsenal favourite is secret to club's success as transfer policy shifts due to three stars",
        href: 'https://www.express.co.uk',
        description:
        "COMMENT: Arsenal are already reaping the rewards from their shift in transfer policy thanks to some bold thinking from a club icon.",
        date: 'Oct 16, 2024',
        datetime: '2024-10-16',
        category: { title: 'football', href: "https://www.express.co.uk" },
        author: {
          name: 'Express',
          role: 'United Kingdom', //NEW
          href: 'https://www.express.co.uk',
          imageUrl:"https://i.bytvi.com/domain_icons/expresscouk.png",
        },
      },
      // More posts...
    ]
    const article5 = [
      {
        id: 6,
        title: "Soccer-Man City in trouble as injury list lengthens, says Guardiola",
        href: 'https://www.thestar.com.my/sport/football/2024/10/31/soccer-man-city-in-trouble-as-injury-list-lengthens-says-guardiola',
        description:
        "(Reuters) - Manchester City winger Savinho and defender Manuel Akanji joined the club's lengthy injury list after Wednesday's 2-1 League Cup defeat to Tottenham Hotspur and manager Pep Guardiola said he has been left with 13 available players in his squad. Read full story.",
        date: 'Oct 16, 2024',
        datetime: '2024-10-31',
        category: { title: 'top', href: "https://www.banglatribune.com" },
        author: {
          name: 'The Star',
          role: 'Malaysia',
          href: "https://www.thestar.com.my",
          imageUrl:"https://i.bytvi.com/domain_icons/thestar_my.png",
        },
      },
      // More posts...
    ]

    return (
      <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Daily Pulse</h2>
              <p className="mt-2 text-lg/8 text-gray-600">"Stay informed with DailyPulse, your go-to platform for up-to-the-minute news coverage, insightful articles, and in-depth analysis across politics, entertainment, sports, and more. Get the latest updates, anytime, anywhere."</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
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
              {article.map((post) => (
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
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
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
              {article2.map((post) => (
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
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
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
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {article3.map((post) => (
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
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
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
              {article4.map((post) => (
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
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
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
              {article5.map((post) => (
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
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
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
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem