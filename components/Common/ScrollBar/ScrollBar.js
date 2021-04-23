import React from "react";
import { Link } from "react-scroll";
import { Wrapper, InnerWrapper } from "./ScrollBar.style";
import Container from "@iso/ui/UI/Container/Container";
import { Row, Col } from "antd";

export default function TopScrollBar({ menu = [], other, height, className }) {
  const addAllClasses = ["scrollbar"];
  if (className) {
    addAllClasses.push(className);
  }
  return (
    <Wrapper className={addAllClasses.join(" ")} height={height}>
      <Container>
        <InnerWrapper>
          <div className="scrollbar_left">
            {menu.map((menuItem) => (
              <Link
                key={menuItem.target}
                className="linkItem"
                activeClass="active"
                to={menuItem.target}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-170}
                duration={600}
                isDynamic={true}
                ignoreCancelEvents={false}
              >
                {menuItem.name}
              </Link>
            ))}
            {/* <Row>
              {menu.map((menuItem) => (
                <Col key={menuItem.target} md={4}>
                  <Link
                    className="linkItem"
                    activeClass="active"
                    to={menuItem.target}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-170}
                    duration={600}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    {menuItem.name}
                  </Link>
                </Col>
              ))}
            </Row> */}
          </div>
          <div className="scrollbar_right">{other && other}</div>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
}
