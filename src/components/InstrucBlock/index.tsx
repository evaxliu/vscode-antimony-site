import { Row, Col } from "antd";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { MiddleBlockSection, Content, ContentWrapper, ServiceWrapper, MinTitle, MinPara, Empty, ServiceItem, ServiceContent, Anchor } from "./styles";
import { withTranslation } from "react-i18next";

interface InstrucBlockProps {
  title: string;
  content: string;
  section: any;
  button: string;
  t: any;
  id: string;
}

const InstrucBlock = ({ 
  title, 
  content, 
  section,
  button, 
  t, 
  id,
}: InstrucBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                      <Col key={id} span={8}>
                        <ServiceItem>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <Anchor href={item.link}>{item.install}</Anchor><br /><br />
                          <MinPara>{t(item.content)}</MinPara>
                        </ServiceItem>
                        <ServiceContent>
                          <div>
                            <img src={item.image1} width="350px" alt="" />
                          </div>
                          <MinPara>{t(item.content1)}</MinPara>
                        </ServiceContent>
                        <ServiceContent>
                          <div>
                            <img src={item.image2} height="350px" alt="" />
                          </div>
                          <MinPara>{t(item.content2)}</MinPara>
                        </ServiceContent>
                        <ServiceContent>
                          <div>
                            <img src={item.image3} height="350px" alt="" />
                          </div>
                        </ServiceContent>
                      </Col>
                      );
                    })}
                </Row>
            </ServiceWrapper>
            <Anchor href="https://github.com/sys-bio/vscode-antimony#features">Important Guide for Vscode-Antimony Features</Anchor>
            {/* <Empty />
              {button && (
                // <Button name="Next Installation Steps for All 3 Operating Systems" onClick={() => scrollTo("next steps")}>
                <Button name="Next Installation Steps for All 3 Operating Systems" onClick={() => window.location.href='https://github.com/sys-bio/vscode-antimony/tree/master#steps-below-apply-for-all-operating-systems'}>
                  {t(button)}
                </Button>
              )} */}
            </Col>
            {/* <Col lg={24} md={24} sm={24} xs={24} id="next steps">
              <Content>{t("Next Installation Steps for All 3 Operating Systems")}</Content>
              <Anchor href="https://github.com/sys-bio/vscode-antimony#features">Important Guide for Vscode-Antimony Features</Anchor>
            </Col> */}
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(InstrucBlock);