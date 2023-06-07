import { Row, Col } from "antd";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { MiddleBlockSection, Content, ContentWrapper, ServiceWrapper, MinTitle, MinPara, } from "./styles";
import { withTranslation } from "react-i18next";

interface MiddleBlockProps {
  title: string;
  content: string;
  section: any;
  button: string;
  t: any;
  id: string;
}

const MiddleBlock = ({ 
  title, 
  content, 
  section,
  button, 
  t, 
  id,
}: MiddleBlockProps) => {
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
          <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="install instructions" onClick={() => scrollTo("instructions")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);