import MediaWrapper from "./Media.styles";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Col, Row } from "antd";

export default function Media() {
  const listOfArticles = [
    {
      title: "Boston City Council Set To Vote On New Rules For Short-Term Rentals",
      linkToArticle: "https://www.wgbh.org/news/local-news/2018/06/12/boston-city-council-set-to-vote-on-new-rules-for-short-term-rentals",
      body: "The debate over short-term rentals in Boston is coming to a head. Just days after the International Conference of Mayors came to town — whose chief sponsor was, ironically, Airbnb — the city council is expected to vote Wednesday on new regulations that would severely limit short-term rentals around the city.",
    },
    {
      title: "What Airbnb regulations could mean for entrepreneurs",
      linkToArticle:
        "https://www.bostonglobe.com/business/2016/12/11/airbnb-regulations-could-squeeze-real-estate-entrepreneurs/Jcwx63iIMGNDpnYAXOk91O/story.html",
      body: "In just eight years, Airbnb Inc. has amassed more than 3 million private home listings, making it bigger than the world’s largest hotel chain. And entrepreneurs such as Kama Cicero have come along for the ride.",
    },
    {
      title: "Thousands of Boston Airbnb listings pulled amid new regulations",
      linkToArticle: "https://www.boston25news.com/news/thousands-of-boston-airbnblistings-pulled-amid-new-regulations/1016185777/",
      body: "BOSTON — Weeks after the Boston City Council approved a new law regulating short-term rentals, Airbnb pulled thousands of listings from their website to comply. Last month, Airbnb boasted more than 6,000 listings in Boston. The city says as of Friday, they've only applied for registration of just over 1,800 and just 775 have been approved.",
    },
    {
      title: "BLDUP Spotlight: STARS of Boston: Furnished Apartment Rentals Transforming Corporate Travel",
      linkToArticle:
        "https://www.bldup.com/thought_leaders/bldup-spotlight-stars-of-boston-furnished-apartment-rentals-transforming-corporate-travel",
      body: "Boston’s building boom has led to a growing number of construction professionals flocking to the area. STARS units are ideal for those who are looking for something between hotels and traditional rentals; providing the privacy of a home while still offering the convenience of a hotel stay. In this BLDUP Spotlight, we spoke with the Founder of Stars of Boston, a WBENC Certified Company, Kama Cicero.",
    },
  ];

  return (
    <>
      <Box as="section" className="main-background-2" />
      <MediaWrapper>
        <Container>
          <h1>Media</h1>
        </Container>
        {listOfArticles.map((item) => (
          <Container>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <div className="article-row">
                  <a rel="nofollow" target="_blank" href={item.linkToArticle}>
                    <h2>{item.title}</h2>
                  </a>
                  <p>{item.body}...</p>
                </div>
              </Col>
            </Row>
          </Container>
        ))}
      </MediaWrapper>
    </>
  );
}
