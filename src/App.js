import "./App.css";
import { Avatar, Button, Col, Row, Tag, Typography } from "antd";
import profile from "./assets/profile.jpeg";
import { Divider } from "antd";
import { Card } from "antd";
import { FaLaptopCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Steps } from "antd";

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
  ];

  let companies = [
    "https://firebasestorage.googleapis.com/v0/b/community-90e01.appspot.com/o/assets%2FGroup%201085%204.png?alt=media&token=42691fcf-045c-4c79-9c37-dd4f91409325",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnsWy8ajwAzehQ5hngN07Svk9dcnN2G5aW08b-p3SgRzjxnaM9L0-BvQDx7BEvFon2SA&usqp=CAU",
    "https://yt3.googleusercontent.com/7kopIxs3pC9-87UEu-EnEzubeZFKigU9IHXA5SFfD9MU0okrQvERJP21ukynfERhILNZz9uQWw=s900-c-k-c0x00ffffff-no-rj",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPEisEifT_jKS6_OILza2bQi_NhFjHoeDFQ&s",
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/ALTEN_logo.svg/1200px-ALTEN_logo.svg.png",
  ];

  const divider = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60vh" }}>
          <Divider style={{ borderColor: "#d9d9d9" }} />
        </div>
      </div>
    );
  };

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
      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <Steps
          size="small"
          current={1}
          items={[
            {
              title: "AI Engineer",
              status: "finish",
            },
            {
              title: "Founder/Product Managment",
              status: "finish",
            },
            {
              title: "Full Stack Developer",
              status: "finish",
            },
            {
              title: "UI/UX Developer",
              status: "finish",
            },
            {
              title: "Technical Writer",
              status: "finish",
            },
          ]}
        />
      </div>
      {divider()}

      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h1 style={{ color: "#fff", textAlign: "center" }}>Skills</h1>
        <Row gutter={[30, 30]}>
          {skills?.map((item, index) => (
            <Col span={8}>
              <Card
                title={item.name}
                style={{ maxWidth: "60vw", height: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {item?.list?.map((i) => (
                    <Tag style={{ marginBottom: 5 }}>{i}</Tag>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {divider()}

      <div style={{ marginTop: "3rem" }}>
        <h1 style={{ color: "#fff", textAlign: "center" }}>Projects</h1>
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
                    <Tag style={{ marginBottom: 5 }}>{i}</Tag>
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

      {divider()}
      <div style={{ marginTop: "3rem" }}>
        <h1 style={{ color: "#fff", textAlign: "center" }}>Worked With</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "auto",
          }}
        >
          {companies?.map((i) => (
            <Avatar
              style={{ marginLeft: 20, marginRight: 20 }}
              size={60}
              src={i}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <p style={{ color: "#868686", textAlign: "center" }}>
          Chanchala Gorale{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
