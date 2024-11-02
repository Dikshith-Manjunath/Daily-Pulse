// News API Key: pub_57394d8d524e4d322bfbc768c5fe4a1f9766d
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Router from 'next/router';

export class News extends Component {
  articles =
    [
    {
      "article_id": "4916f604c495f08dbdb830e5cf20c50d",
      "title": "Soccer-FA aims for equal access to football for girls in 90% schools by 2028",
      "link": "https://www.thestar.com.my/sport/football/2024/10/31/soccer-fa-aims-for-equal-access-to-football-for-girls-in-90-schools-by-2028",
      "keywords": null,
      "creator": null,
      "video_url": null,
      "description": "(Reuters) - The FA wants to achieve equal access to soccer for girls in 90% of schools by 2028 and boost the number of female coaches in the game as part of its new strategy to grow women's football, England's governing body said on Thursday. Read full story",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": "https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg",
      "source_id": "thestar_my",
      "source_priority": 37088,
      "source_name": "The Star",
      "source_url": "https://www.thestar.com.my",
      "source_icon": "https://i.bytvi.com/domain_icons/thestar_my.png",
      "language": "english",
      "country": ["malaysia"],
      "category": ["sports"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "640a54bb999a41f418e048753107fb87",
      "title": "Mercato : Henry a vendu la mèche pour le retour de Zidane",
      "link": "https://le10sport.com/football/mercato/mercato-henry-a-vendu-la-meche-pour-le-retour-de-zidane-718960",
      "keywords": null,
      "creator": null,
      "video_url": null,
      "description": "Alors qu'Erik Ten Hag vient d'être remercié, des rumeurs évoquent le nom de Zinédine Zidane pour le remplacer à la tête de Manchester United. Ce n'est pas la première fois que le champion du monde...",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": "https://le10static.com/img/cache/article/288x162/ICONSPORT_087311_0497_e2b305d7b5/ICONSPORT_087311_0497_e2b305d7b5.jpg",
      "source_id": "le10sport",
      "source_priority": 1001293,
      "source_name": "Le10sport",
      "source_url": "https://le10sport.com",
      "source_icon": "https://i.bytvi.com/domain_icons/le10sport.png",
      "language": "french",
      "country": ["france"],
      "category": ["sports"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "3f7ea045ab7796051475227cbaea4fc4",
      "title": "Sports briefs: White Sox hire Venable as manager",
      "link": "https://www.telegraphherald.com/sports/other_sports/article_5c66d42e-96e4-11ef-a671-33a97cbeec60.html",
      "keywords": null,
      "creator": ["The Associated Press"],
      "video_url": null,
      "description": "CHICAGO — The Chicago White Sox have hired Will Venable to take over as manager, turning to the former big league outfielder to help turn around the team after a miserable season.",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": null,
      "source_id": "telegraphherald",
      "source_priority": 28095,
      "source_name": "Telegraph Herald",
      "source_url": "https://www.telegraphherald.com",
      "source_icon": "https://i.bytvi.com/domain_icons/telegraphherald.png",
      "language": "english",
      "country": ["united states of america"],
      "category": ["top"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "c704ee51a975ec4759ed6bd5d9949bd4",
      "title": "Arsenal favourite is secret to club's success as transfer policy shifts due to three stars",
      "link": "https://www.express.co.uk/sport/football/1969294/Arsenal-news-transfer-Mikel-Arteta-Bukayo-Saka",
      "keywords": ["football"],
      "creator": ["Joe Krishnan"],
      "video_url": null,
      "description": "COMMENT: Arsenal are already reaping the rewards from their shift in transfer policy thanks to some bold thinking from a club icon.",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": "https://cdn.images.express.co.uk/img/dynamic/67/590x/1969294_1.jpg",
      "source_id": "expresscouk",
      "source_priority": 1139,
      "source_name": "Express",
      "source_url": "https://www.express.co.uk",
      "source_icon": "https://i.bytvi.com/domain_icons/expresscouk.png",
      "language": "english",
      "country": ["united kingdom"],
      "category": ["sports"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "7d0a363f1d9479f9274355f99fc378ca",
      "title": "Social Media – Inter Milan Midfielder Leads The Way In Goal Contributions Across Europe’s Top-Five Leagues",
      "link": "https://sempreinter.com/2024/10/31/inter-milan-ace-davide-frattesi-most-prolific-midfielder-europe/",
      "keywords": [
        "latest articles",
        "inter",
        "italy",
        "milano",
        "italia",
        "football",
        "nerazzurri",
        "serie a",
        "newsnow",
        "inter milan",
        "fcim",
        "suning",
        "calcio"
      ],
      "creator": ["Marko Vrakela"],
      "video_url": null,
      "description": "Davide Frattesi bagged his first-ever Serie A brace on Wednesday night as Inter Milan trounced Empoli 3-0 at Stadio Carlo Castellani. The in-form midfielder enjoyed a phenomenal night in Tuscany. Indeed, he extended his seasonal tally to six goal contributions between club and country this season. According to Opta, last night’s double saw the 25-year-old [...]The post Social Media – Inter Milan Midfielder Leads The Way In Goal Contributions Across Europe’s Top-Five Leagues appeared first on SempreInter.com.",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": "https://icdn.sempreinter.com/wp-content/uploads/2024/01/Davide-Frattesi-Inter-Milan-16.jpg",
      "source_id": "sempreinter",
      "source_priority": 22946,
      "source_name": "Sempreinter",
      "source_url": "https://sempreinter.com",
      "source_icon": "https://i.bytvi.com/domain_icons/sempreinter.png",
      "language": "english",
      "country": ["sweden"],
      "category": ["top"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "4262f48beab1d0e48e3268d13ca36909",
      "title": "Soccer-Man City in trouble as injury list lengthens, says Guardiola",
      "link": "https://www.thestar.com.my/sport/football/2024/10/31/soccer-man-city-in-trouble-as-injury-list-lengthens-says-guardiola",
      "keywords": null,
      "creator": null,
      "video_url": null,
      "description": "(Reuters) - Manchester City winger Savinho and defender Manuel Akanji joined the club's lengthy injury list after Wednesday's 2-1 League Cup defeat to Tottenham Hotspur and manager Pep Guardiola said he has been left with 13 available players in his squad. Read full story",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": "https://apicms.thestar.com.my/uploads/images/2024/10/31/2993494.jpg",
      "source_id": "thestar_my",
      "source_priority": 37088,
      "source_name": "The Star",
      "source_url": "https://www.thestar.com.my",
      "source_icon": "https://i.bytvi.com/domain_icons/thestar_my.png",
      "language": "english",
      "country": ["malaysia"],
      "category": ["sports"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "9e8d2910c253f26d68d84a681a82ce2a",
      "title": "The pre-state championship is here, again",
      "link": "https://www.santafenewmexican.com/sports/the-pre-state-championship-is-here-again/article_df1d0068-9708-11ef-a8cf-e7641d256fdd.html",
      "keywords": null,
      "creator": null,
      "video_url": null,
      "description": "St. Michael's-Robertson. The top two teams in Class 3A football. Archrivals. Undefeated teams ranked 1-2 pretty much all year. Teams that have met in the state title game two of the last three years.",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:30:00",
      "pubDateTZ": "UTC",
      "image_url": "https://bloximages.newyork1.vip.townnews.com/santafenewmexican.com/content/tncms/assets/v3/editorial/f/e2/fe2b61b6-9735-11ef-8eba-a3c25c3d70e1/6562a82d990c7.image.jpg?resize=300%2C185",
      "source_id": "santafenewmexican",
      "source_priority": 21864,
      "source_name": "Santa Fe New Mexican Homepage | Santa Fe New Mexic",
      "source_url": "https://www.santafenewmexican.com",
      "source_icon": "https://i.bytvi.com/domain_icons/santafenewmexican.png",
      "language": "english",
      "country": ["united states of america"],
      "category": ["sports"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "71bfcb48940791af87fd6e95aa2e2fcf",
      "title": "Juventus 2-2 Parma, Serie A: Timothy Weah Rescues Point As Hosts Suffer Setback In Title Race",
      "link": "https://www.outlookindia.com/sports/football/juventus-fc-vs-parma-calcio-1913-serie-a-match-report-timothy-weah-rescues-point-as-hosts-suffer-setback-in-title-race",
      "keywords": [
        " juventus",
        " juventus 2-2 parma",
        " juventus vs parma serie a",
        " serie a (italy)",
        " timothy weah news",
        " juventus fc vs parma calcio 1913 match report",
        "football",
        " juventus fc vs parma calcio 1913 serie a match report",
        " juventus vs parma",
        " timothy weah stats",
        " juventus fc vs parma calcio 1913 serie a",
        " juventus vs parma serie a match report",
        " timothy weah",
        " juventus vs parma serie a match highlights",
        " juventus fc vs parma calcio 1913",
        " parma",
        " serie a"
      ],
      "creator": null,
      "video_url": null,
      "description": null,
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:29:06",
      "pubDateTZ": "UTC",
      "image_url": "https://media.assettype.com/outlookindia/2024-10-30/z0r4rkgn/timothy_weah_celebrates_scoring_the_second_equaliser_for_juventus_v5nbtb2tee111dudz0zk5p5yp.jpg",
      "source_id": "outlookindia",
      "source_priority": 1033,
      "source_name": "Outlook",
      "source_url": "https://www.outlookindia.com",
      "source_icon": "https://i.bytvi.com/domain_icons/outlookindia.jpg",
      "language": "english",
      "country": ["india"],
      "category": ["top"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "c3d40faab2d8c833951bd3b3f57b666b",
      "title": "ট্রফি নিয়ে ফিরছেন সাবিনারা, প্রস্তুত ছাদখোলা বাস",
      "link": "https://www.banglatribune.com/sport/football/870669/%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A6%AB%E0%A6%BF-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%87-%E0%A6%AB%E0%A6%BF%E0%A6%B0%E0%A6%9B%E0%A7%87%E0%A6%A8-%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%BF%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%BE-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%81%E0%A6%A4-%E0%A6%9B%E0%A6%BE%E0%A6%A6%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE-%E0%A6%AC%E0%A6%BE%E0%A6%B8",
      "keywords": ["সাফ চ্যাম্পিয়নশিপ"],
      "creator": ["বাংলা ট্রিবিউন রিপোর্ট"],
      "video_url": null,
      "description": "টানা দুবার সাফ নারী চ্যাম্পিয়নশিপের শিরোপা জিতেছে বাংলাদেশ। ঐতিহাসিক এই অর্জনের পর তাদের বরণ করে নিতে প্রস্তুত দেশের জনগণ। কাঠমান্ডুর হোটেলে আনন্দময় রাতের পর এক সকাল কেটেছে। বৃহস্পতিবার দুপুরেই ঢাকায় ফিরছে সাবিনা-তহুরা-শামসুন্নাহার জুনিয়রের দল। তাদের জন্য বিমানবন্দরে ছাদখোলা বাসও প্রস্তুত থাকছে। তাতে চড়ে শহড় প্রদক্ষিণ করবে পুরো দল। স্বাগতিক নেপালকে ২-১ গোলে হারিয়ে টানা দ্বিতীয়বার শিরোপা...বিস্তারিত",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:28:08",
      "pubDateTZ": "UTC",
      "image_url": "https://cdn.banglatribune.net/contents/cache/images/300x300x1/uploads/media/2024/10/31/-d33bb9d76c66a9b4a215433f18b2d11e.png?jadewits_media_id=944897",
      "source_id": "banglatribune",
      "source_priority": 685343,
      "source_name": "Bangla Tribuna",
      "source_url": "https://www.banglatribune.com",
      "source_icon": "https://i.bytvi.com/domain_icons/banglatribune.png",
      "language": "bengali",
      "country": ["bangladesh"],
      "category": ["top"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    },
    {
      "article_id": "1b4fb37e049d5650df90ab4c4823db4c",
      "title": "Five Colchester United-Swindon Town links that add extra intrigue to FA Cup tie",
      "link": "https://www.gazette-news.co.uk/news/24689541.colchester-united-visit-swindon-town-fa-cup-first-round/?ref=rss",
      "keywords": null,
      "creator": null,
      "video_url": null,
      "description": "Colchester United visit Swindon Town in FA Cup first round",
      "content": "ONLY AVAILABLE IN PAID PLANS",
      "pubDate": "2024-10-31 05:28:00",
      "pubDateTZ": "UTC",
      "image_url": "https://www.gazette-news.co.uk/resources/images/18709105/?htype=0&type=app",
      "source_id": "gazette_news",
      "source_priority": 787827,
      "source_name": "The Gazette",
      "source_url": "https://www.gazette-news.co.uk",
      "source_icon": "https://i.bytvi.com/domain_icons/gazette_news.png",
      "language": "english",
      "country": ["united kingdom"],
      "category": ["top"],
      "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
      "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
      "duplicate": false
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    }
    
  }

  render() {
    return (
        <>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Daily Pulse</h2>
              <p className="mt-2 text-lg/8 text-gray-600">"Stay informed with DailyPulse, your go-to platform for up-to-the-minute news coverage, insightful articles, and in-depth analysis across politics, entertainment, sports, and more. Get the latest updates, anytime, anywhere."</p>
            </div>
             
            {this.state.articles.map((element)=>{console.log(element)})}

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <NewsItem Title='my-Title' Description='my-Description' imageUrl="https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg" newsUrl="TO-DO"/>
              <NewsItem Title='my-Title' Description='my-Description' imageUrl="https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg"/>
              <NewsItem Title='my-Title' Description='my-Description' imageUrl="https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg"/>
              <NewsItem Title='my-Title' Description='my-Description' imageUrl="https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg"/>
              <NewsItem Title='my-Title' Description='my-Description' imageUrl="https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg"/>
              <NewsItem Title='my-Title' Description='my-Description' imageUrl="https://apicms.thestar.com.my/uploads/images/2024/10/31/2993493.jpg"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default News
