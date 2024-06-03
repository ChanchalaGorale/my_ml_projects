import "./App.css";
import { Avatar, Button, Col, Row, Tag, Typography } from "antd";
import profile from "./assets/profile.jpeg";
import { Divider } from "antd";
import { Card } from "antd";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const { Title } = Typography;

function App() {
  let projects = [
    {
      github:
        "https://github.com/hypothesistribetechnology/second-hand-car-price",
      app: "https://car-price-calculator-a722d18f141c.herokuapp.com/",
      name: "Secondhand Car Price Calculator",
      skills: ["tensorflow", "pickle", "matplotlib", "seaborn", "numpy"],
    },
    {
      github: "https://github.com/hypothesistribetechnology/language_detector",
      app: "https://cmg-language-detector-6fa65cd6319b.herokuapp.com/",
      name: "Language Detector",
      skills: ["sklearn", "pickle", "matplotlib", "seaborn", "pandas"],
    },
  ];

  let skills = [
    {
      name: "Artificial Intelligence",
      list: [
        "Machine learning",
        "Deep learning",
        "Natural language processing",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "TensorFlow",
        "Scikit-Learn",
        "Transformer",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebook",
      ],
    },
    {
      name: "Languages",
      list: ["Python", "JavaScript", "HTML", "CSS", "MarkDown", "SQL"],
    },
    {
      name: "Database , Cloud Hosting, & Version Control",
      list: [
        "MongoDb",
        "SQLite",
        "AWS",
        "AZURE",
        "GitHub",
        "Heroku",
        "Netlify",
        "GoDaddy",
      ],
    },
    {
      name: "Frameworks/Libraries",
      list: ["React.Js", "Node.Js", "Redux", "ReactNative.Js", "Flask"],
    },
    {
      name: "UI Frameworks & Icon Libraries",
      list: [
        "Bootstrap",
        "Material UI",
        "ANTD",
        "React Icon",
        "React Native Icons",
      ],
    },

    {
      name: "Project Management",
      list: ["JIRA", "Slack", "Confluence", "Notion", "Agile/Scrum"],
    },

    // Machine Learning . Deep Learning . TensorFlow . Scikit-Learn . Transformer. Flask . Pandas . NumPy . Matplotlib . Seaborn .  jupyter notebook
    // Data Collection . Data Cleaning . Feature analysis . Creating a Model . Testing Model . Deploying Model
    //  Javascript . React (Redux) + React-Native + Node.JS . Express .  RESTful APIs . MongoDB/SQL .Testing
    // GitHub . Responsive Design. Bootstrap/ANTD/Material UI . Figma .  UI/UX Design Principles
    // JIRA . Slack . Notion . Confluence . Agile development . Canva . Google Analytics . Meta
  ];

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
          marginTop: 40,
        }}
      >
        <Avatar
          style={{
            border: "#023595 10px solid ",
            boxShadow: "-3px 1px -3px #ffffff",
          }}
          size={180}
          src={profile}
        />
      </div>

      <Title style={{ textAlign: "center", color: "#fff" }}>
        Chanchala Gorale
      </Title>

      <Divider style={{ borderColor: "#d9d9d9" }} />

      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h1 style={{ color: "#fff" }}>Skills</h1>
        <Row gutter={[30, 30]}>
          {skills?.map((item, index) => (
            <Col span={8}>
              <Card title={item.name} style={{ maxWidth: "60vw" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {item?.list?.map((i) => (
                    <Tag>{i}</Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ borderColor: "#d9d9d9" }} />

      <div style={{ marginTop: "3rem" }}>
        <h1 style={{ color: "#fff" }}>Projects</h1>
        <Row gutter={[30, 30]}>
          {projects?.map((item, index) => (
            <Col span={8}>
              <Card title={item.name} style={{ maxWidth: "60vw" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {item?.skills?.map((i) => (
                    <Tag>{i}</Tag>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: 20,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    type="primary"
                    style={{
                      marginRight: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      window.open(item?.app, "_blank");
                    }}
                  >
                    <FaLaptopCode style={{ marginRight: 5 }} />
                    Live App
                  </Button>
                  <Button
                    size="large"
                    type="primary"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      window.open(item?.github, "_blank");
                    }}
                  >
                    <FaGithub style={{ marginRight: 5 }} /> Github Repo
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;
