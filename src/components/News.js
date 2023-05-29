import React, { Component } from 'react'
import NewsItem from './NewsItem'

 
export class News extends Component {
    artices =[
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Faiz Siddiqui, Will Oremus",
        "title": "Twitter founder Jack Dorsey says Musk wasn't an ideal leader after all - The Washington Post",
        "description": "The former CEO issued his strongest criticism yet of Musk's takeover of the social media site.",
        "url": "https://www.washingtonpost.com/technology/2023/04/29/elon-musk-twitter-jack-dorsey/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G4ZOCSHETUI63FUWR2DU7VYQXA.jpg&w=1440",
        "publishedAt": "2023-04-29T05:57:20Z",
        "content": "Comment on this story\r\nComment\r\nSAN FRANCISCO Former Twitter CEO Jack Dorsey issued his sharpest criticism yet of Elon Musks leadership of Twitter Friday, saying Musk has not proven to be the platfor… [+4769 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "",
        "title": "NFL Draft 2023 home runs and head-scratchers from Day 2: Will Levis lands in a comfy spot, Bears reach on 'D' - CBS Sports",
        "description": "Rounds 2 and 3 have come and gone, so let's reflect on what went down",
        "url": "https://www.cbssports.com/nfl/news/nfl-draft-2023-home-runs-and-head-scratchers-from-day-2-will-levis-lands-in-a-comfy-spot-bears-reach-on-d/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/29/1af0138f-e682-4975-bc0c-9188ac2ce71e/thumbnail/1200x675/8d86e87e3f3cad56a8f635ca7bd9a8a9/levispick.jpg",
        "publishedAt": "2023-04-29T04:52:37Z",
        "content": "The 2023 NFL Draft didn't have as many jaw-dropping, blue-chip prospects as past drafts, but what it did boast is plenty of value in the middle for Rounds 2 through 4 or 5. Many teams made their mark… [+7799 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Raiders.com"
        },
        "author": null,
        "title": "Dave Ziegler on drafting Michael Mayer, Byron Young and Tre Tucker - Raiders.com",
        "description": "<p>General Manager Dave Ziegler recaps Day 2 of the 2023 NFL Draft and looks ahead to Day 3.</p>",
        "url": "https://www.raiders.com/video/dave-ziegler-recaps-day-2-michael-mayer-tre-tucker-nfl-2023-draft",
        "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/raiders/a5mwwrqxyhp7kmhgpcig",
        "publishedAt": "2023-04-29T04:50:03Z",
        "content": "Watch as Raiders alum and current players host the ELITE Academy, a program offering experience for youth players to work with alumni and current players through character development, film study, po… [+27 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Malik Monk (28 PTS) & De'Aaron Fox (26 PTS) Score 54 Points In Kings Game 6 W! | April 28, 2023 - NBA",
        "description": "Share your videos with friends, family, and the world",
        "url": "https://www.youtube.com/watch?v=RNEw0ibDEp8",
        "urlToImage": null,
        "publishedAt": "2023-04-29T03:00:56Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "NDTV News"
        },
        "author": null,
        "title": "UAE's Sultan Al-Neyadi Becomes 1st Arab Astronaut To Complete Spacewalk - NDTV",
        "description": "UAE astronaut Sultan Al-Neyadi has become the first Arab to undertake a spacewalk during Expedition 69 venturing out of the International Space Station (ISS) and completing his spacewalk.",
        "url": "https://www.ndtv.com/world-news/uaes-sultan-al-neyadi-becomes-1st-arab-astronaut-to-complete-spacewalk-3989666",
        "urlToImage": "https://c.ndtvimg.com/2023-03/v0obk3o_sultan-alneyadi-afp-650_625x300_02_March_23.jpg",
        "publishedAt": "2023-04-29T03:00:37Z",
        "content": "UAE astronaut Sultan Al-Neyadi has become the first Arab to undertake a spacewalk.\r\nDubai: UAE astronaut Sultan Al-Neyadi has become the first Arab to undertake a spacewalk during Expedition 69 ventu… [+3921 chars]"
        },
        {
        "source": {
        "id": "axios",
        "name": "Axios"
        },
        "author": "Axios",
        "title": "Colorado governor signs 4 major gun bills into law to make it harder to obtain firearms - Axios",
        "description": null,
        "url": "https://www.axios.com/2023/04/28/colorado-governor-jared-polis-gun-bills",
        "urlToImage": null,
        "publishedAt": "2023-04-29T02:40:58Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Frank Schwab",
        "title": "NFL Draft: Jason McCourty trolls everyone before Titans pick, including ripping Kansas City BBQ - Yahoo Sports",
        "description": "Jason McCourty had some things to say.",
        "url": "https://sports.yahoo.com/nfl-draft-jason-mccourty-trolls-everyone-before-titans-pick-including-ripping-kansas-city-bbq-022834373.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/7uCC5eTPanZoq2aT0eVHVA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/e89db190-e634-11ed-bff1-d5612fa654a7",
        "publishedAt": "2023-04-29T02:28:00Z",
        "content": "Former football player Jason McCourty announces Tulane running back Tyjae Spears as the selection by the Tennessee Titans. (AP Photo/Jeff Roberson)\r\nMany of the former players that take the stage in … [+1878 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Ray Sanchez",
        "title": "Montana governor's nonbinary son urges him to reject anti-transgender bills - CNN",
        "description": "In a front line state in the escalating US culture war over transgender rights, a son made an unsuccessful plea to his powerful father on behalf of the LGBTQ community.",
        "url": "https://www.cnn.com/2023/04/28/us/montana-governor-son-transgender-bills/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230428091643-01-greg-gianforte-file.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-04-29T02:26:00Z",
        "content": "In a front line state in the escalating US culture war over transgender rights, a son made an unsuccessful plea to his powerful father on behalf of the LGBTQ community. \r\nDavid Gianforte, 32, who use… [+7496 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "PBS NewsHour West live episode, April 28, 2023 - PBS NewsHour",
        "description": "Stream your PBS favorites with the PBS app: https://to.pbs.org/2Jb8twGFind more from PBS NewsHour at https://www.pbs.org/newshourSubscribe to our YouTube cha...",
        "url": "https://www.youtube.com/watch?v=6XAOrpS-iIc",
        "urlToImage": "https://i.ytimg.com/vi/6XAOrpS-iIc/maxresdefault.jpg",
        "publishedAt": "2023-04-29T02:04:34Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Guardian staff reporter",
        "title": "North Korea: Kim Jong-un sister says Joe Biden is ‘in his dotage’ as she criticises nuclear pact - The Guardian",
        "description": "Kim Yo-jong’s broadside came after US and South Korea enhance nuclear cooperation and Biden warns Pyongyang an attack would end the regime",
        "url": "https://www.theguardian.com/world/2023/apr/29/north-korea-kim-jong-un-sister-says-joe-biden-is-in-his-dotage-as-she-criticises-nuclear-pact",
        "urlToImage": "https://i.guim.co.uk/img/media/71d32e8e8e2e8c9eeca76da47f4be668104c19f5/137_331_5701_3422/master/5701.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c2837f7a87f12c2e0f6851a3331491f8",
        "publishedAt": "2023-04-29T01:55:00Z",
        "content": "The powerful sister of North Koreas leader has said her country will stage more displays of military might in response to a new US-South Korean nuclear deterrence agreement and compared Joe Bidens co… [+3431 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "US confiscates Iran oil cargo on tanker amid Tehran tensions - Reuters",
        "description": "The U.S. confiscated Iranian oil on a tanker at sea in recent days in a sanctions enforcement operation, three sources said, and days later Iran seized another oil-laden tanker in retaliation, according to a maritime security firm.",
        "url": "https://www.reuters.com/world/middle-east/us-confiscates-iran-oil-cargo-tanker-amid-tehran-tensions-sources-2023-04-28/",
        "urlToImage": "https://www.reuters.com/resizer/P6snsUfSx8wVTP8DsA0BNVoCVBM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3JHH3O6BABP4DENRAFUNDFVIME.jpg",
        "publishedAt": "2023-04-29T00:57:00Z",
        "content": "WASHINGTON, April 28 (Reuters) - The U.S. confiscated Iranian oil on a tanker at sea in recent days in a sanctions enforcement operation, three sources said, and days later Iran seized another oil-la… [+2945 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Spaceflight Now"
        },
        "author": null,
        "title": "SpaceX launches Falcon 9 rocket with two O3b internet satellites – Spaceflight Now - Spaceflight Now",
        "description": null,
        "url": "https://spaceflightnow.com/2023/04/28/falcon-9-falcon-heavy-o3b-mpower-viasat-americas/",
        "urlToImage": null,
        "publishedAt": "2023-04-29T00:45:00Z",
        "content": "Watch a replay of our live coverage of the countdown and launch of a Falcon 9 rocket with two O3b mPOWER internet satellites Friday, April 28. SpaceX also attempted to launch a Falcon Heavy rocket la… [+8864 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Fox News",
        "title": "Texas man accused of leaving date, killing parking lot scammer, then returning to restaurant for dinner - New York Post ",
        "description": "Erick Aguirre, 29, who learned he had been scammed out of $40 by a fake parking attendant left his date inside a Houston restaurant, retrieved a gun from his car and allegedly fatally shot the man.",
        "url": "https://nypost.com/2023/04/28/texas-man-accused-of-leaving-date-killing-parking-lot-scammer-then-returning-to-restaurant/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26815139-1682727680560.jpg?quality=75&strip=all&1682713382&w=1024",
        "publishedAt": "2023-04-29T00:29:00Z",
        "content": "A Texas man who learned he had been scammed out of $40 by a fake parking attendant left his date inside a Houston restaurant, retrieved a gun from his car and allegedly fatally shot the man before re… [+3037 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Army orders aviation standdown after deadly helicopter crash - CBS News",
        "description": "The Army chief of staff has ordered a total aviation standdown after the collision of two Apache helicopters in Alaska. David Martin has more.#news #army #al...",
        "url": "https://www.youtube.com/watch?v=xGvfM05z8ak",
        "urlToImage": "https://i.ytimg.com/vi/xGvfM05z8ak/maxresdefault.jpg",
        "publishedAt": "2023-04-28T23:57:01Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Variety"
        },
        "author": "BreAnna Bell",
        "title": "‘The Late Late Show with James Corden’ Series Finale Scores 1.43 Million Viewers - Variety",
        "description": "“The Late Late Show with James Corden” ends on a high note, scoring 1.43 million viewers with its series finale, which aired on Thursday night. The show moved up 77% from its season-to-…",
        "url": "https://variety.com/2023/tv/news/the-late-late-show-james-corden-series-finale-1-43-million-viewers-1235598484/",
        "urlToImage": "https://variety.com/wp-content/uploads/2023/04/119660_0044-e1682640730597.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-04-28T23:29:00Z",
        "content": "“The Late Late Show with James Corden” ends on a high note, scoring 1.43 million viewers with its series finale, which aired on Thursday night. The show moved up 77% from its season-to-date Live+Same… [+1527 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "PS5 Sales Surge While Xbox Hardware Falls - IGN Daily Fix - IGN",
        "description": "Sony is having a great year in hardware sales. During an earnings report, the company revealed that the PS5 has crossed 38 million units sold, and reaching a...",
        "url": "https://www.youtube.com/watch?v=9NI2yZc2CnI",
        "urlToImage": "https://i.ytimg.com/vi/9NI2yZc2CnI/maxresdefault.jpg",
        "publishedAt": "2023-04-28T23:17:00Z",
        "content": null
        },
        {
        "source": {
        "id": "financial-times",
        "name": "Financial Times"
        },
        "author": "Brooke Masters, Mark Vandevelde, Stephen Gandel, Colby Smith",
        "title": "Federal Reserve review pins blame for SVB failure on Donald Trump-era rule changes - Financial Times",
        "description": "US central bank says its own supervisors were too slow to correct blunders by Silicon Valley Bank’s management",
        "url": "https://www.ft.com/content/cd7d2d8b-32b9-4f89-8bd0-b23efeb33be2",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F70775cf6-6c4b-401b-be20-0ce8fb68a6f1.jpg?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2023-04-28T22:30:51Z",
        "content": "Silicon Valley Banks failure last month stemmed from weakened regulations during the Trump administration and mis-steps by internal supervisors who were too slow to correct management blunders, the U… [+6248 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Danya Hajjaji",
        "title": "Dream dinner party guests: Obama, Springsteen and Spielberg delight Barcelona restaurant staff - The Guardian",
        "description": "The trio attended Bruce Springsteen’s concert and made a last-minute dinner reservation at the Palace Hotel’s Amar restaurant",
        "url": "https://www.theguardian.com/world/2023/apr/28/dream-dinner-party-guests-obama-springsteen-and-spielberg-delight-barcelona-restaurant-staff",
        "urlToImage": "https://i.guim.co.uk/img/media/d38d3f1521cf9d5b3e4bc14729ada1812c97811d/0_271_1544_927/master/1544.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5eab5ae930caa528585411136facdacc",
        "publishedAt": "2023-04-28T22:18:00Z",
        "content": "Staff at a Barcelona restaurant were left amazed when a mysterious last-minute booking turned out to be for the former US president Barack Obama along with film director Steven Spielberg and singer B… [+2511 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Phys.Org"
        },
        "author": "Rachel Knight",
        "title": "Researchers use genomes of 241 species to redefine mammalian tree of life - Phys.org",
        "description": "Research led by a team of scientists from the Texas A&M School of Veterinary Medicine and Biomedical Sciences puts to bed the heated scientific debate regarding the history of mammal diversification as it relates to the extinction of the non-avian dinosaurs. …",
        "url": "https://phys.org/news/2023-04-genomes-species-redefine-mammalian-tree.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/texas-aampm-research-r.jpg",
        "publishedAt": "2023-04-28T22:04:51Z",
        "content": "Research led by a team of scientists from the Texas A&amp;M School of Veterinary Medicine and Biomedical Sciences puts to bed the heated scientific debate regarding the history of mammal diversificat… [+7272 chars]"
        },
        {
        "source": {
        "id": "fox-news",
        "name": "Fox News"
        },
        "author": "Adam Sabes",
        "title": "Federal judge grants injunction temporarily blocking enforcement of Illinois gun law - Fox News",
        "description": "A federal judge in Illinois issued a temporary injunction blocking the enforcement of a gun law which bans some semiautomatic rifles as well as high-capacity magazines.",
        "url": "https://www.foxnews.com/politics/federal-judge-grants-injunction-temporarily-blocking-enforcement-illinois-gun-law",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/GettyImages-1455808656.jpg",
        "publishedAt": "2023-04-28T22:01:00Z",
        "content": "A federal judge in Illinois has granted a temporary injunction blocking the enforcement of a gun law which bans some semiautomatic rifles as well as high-capacity magazines.\r\nUnited States District C… [+2703 chars]"
        }
        ]
    constructor(){
        super();
        console.log("Hello i am from news")
    
    this.state = {
        articles:this.artices,
        loading:false,
        page:1
    
}
    }
    async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7d8498ae39404f158173d94f1877894e&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})

    }
     handlePrevClick = async ()=>{
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d8498ae39404f158173d94f1877894e&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        this.setState({
            
            page: this.state.page -1,
            articles: parsedData.articles
          

        })
    }   
    handleNextClick = async ()=>{
        console.log("next");
        if(this.state.page+1 > 
            Math.ceil(this.state.totalResults/20)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7d8498ae39404f158173d94f1877894e&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        
        
        
        this.setState({
            
            page: this.state.page +1,
            articles: parsedData.articles
          

        })
    }
    }

  render() {
      
     
    return (
        
      <div className="container" my-3>
        
       
        <div className="row">
        {this.state.articles.map((element)=>{
           
            return <div className="col-md-4" key={element.url}>
            
            
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.newsUrl} newsUrl={element.url}/>
            </div>
        })}
        
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
       <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
       </div>
        
        </div>
        
      </div>
    )
  }
}

export default News
