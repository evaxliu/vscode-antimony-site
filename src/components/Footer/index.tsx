import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Label,
  SocialContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Contact")}</Title>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:joseph.hellerstein@gmail.com">
                <Chat>{t(`Contact Us`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>`
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Social")}</Title>
              <SocialLink
                  href="https://github.com/sys-bio/vscode-antimony"
                  src="github.svg"
                />
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Organization")}</Title>
              <Large left="true" href="https://reproduciblebiomodels.org/">
                {t("About")}
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <p>
              Copyright 2016-2022 Center for Reproducible Biomedical Modeling | All Rights Reserved
            </p>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
