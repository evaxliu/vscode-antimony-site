import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import InstructContent from "../../content/InstructContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import InstrucBlock from "../../components/InstrucBlock";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="antimony.svg"
        id="intro"
      />
      <MiddleBlock
        title={InstructContent.title}
        content={InstructContent.text}
        button={InstructContent.button}
        id="about"
      />
      <InstrucBlock
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        button=""
        id="instructions"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
