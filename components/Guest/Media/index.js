import MediaWrapper from "./Media.styles";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Col, Row } from "antd";

export default function Media() {
  const listOfArticles = [
    {
      title: "North Korea Summit Heavy On Promises, Light On Detail",
      linkToArticle:
        "https://www.wgbh.org/news/international-news/2018/06/13/north-korea-summit-heavy-on-promises-light-on-detail",
      body: "It was the handshake seen around the world between President Donald Trump and President Kim Jong Un ahead of their historic summit in Singapore. Trump says the meeting was successful, but was it really? Adam Reilly, in for Jim Braude, was joined by Jim Walsh, a senior research associate with MIT’s Security Studies Program and Carol Saivetz, a senior adviser with the MIT Security Studies Program, to discuss.",
    },
    {
      title:
        "Boston City Council Set To Vote On New Rules For Short-Term Rentals",
      linkToArticle:
        "https://www.wgbh.org/news/local-news/2018/06/12/boston-city-council-set-to-vote-on-new-rules-for-short-term-rentals",
      body: "The debate over short-term rentals in Boston is coming to a head. The city council is expected to vote tomorrow on new regulations that would severely limit short-term rentals around the city. Adam was joined by City Councilor Michelle Wu, a key player in these discussions, and Kama Cicero, a real estate agent and founding member of the Boston Host Alliance, to discuss.",
    },
    {
      title:
        "Human Trafficking Survivor Speaks Out In Hopes Of Stopping The Cycle",
      linkToArticle:
        "https://www.wgbh.org/news/local-news/2018/06/13/human-trafficking-survivor-speaks-out-in-hopes-of-stopping-the-cycle",
      body: "Human trafficking and sexual exploitation is a multi-million dollar criminal industry and it's happening right in our backyards. That's why one local survivor is speaking out about her experience to give hope to others trying to get out and what local officials need to know to help stop the cycle. Carolee McGrath reports.",
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
                  <p>{item.body}</p>
                </div>
              </Col>
            </Row>
          </Container>
        ))}
      </MediaWrapper>
    </>
  );
}
