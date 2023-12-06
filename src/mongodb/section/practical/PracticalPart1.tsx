import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../../../component/CodeBox";
import { Content } from "../../../component/Content";
import { Section } from "../../../component/Section";
import { Slide } from "../../../component/Slide";
import { Title } from "../../../component/Title";
import {
  runWithDocker1,
  runWithDocker2,
  runWithDocker3,
  runWithDocker4,
  runWithDocker5,
  installMacOs1,
  installMacOs2,
  installMacOs3,
  installMacOs4,
  installMacOs5,
  installWindows1,
  installWindows2,
  installWindows3,
  installWindows4,
  installToolsMacOs1,
  installToolsMacOs2,
  installToolsMacOs3,
} from "../commands";
import { SubContent } from "../../../component/SubContent";
import {SubTitle} from "../../../component/SubTitle";

const useStyle = makeStyles(theme => ({
  limitHeight: {
    height: 450,
  },
  simpleArchi: {
    height: 200,
  },
  focused: {
    color: "#5ca831",
  },
}));

const identifier = {
  _id: 1,
  first_name: "Victor",
  surname: "Hugo",
  groups: ["Writer", "Painter"],
};

export const PracticalPart1 = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <Title>Architecture</Title>
          <img
            src="./images/tp1_archi_1.png"
            alt="Relational Model"
            className={classes.simpleArchi}
          />
        </Slide>
        <Slide>
          <Title>Architecture</Title>
          <img
            src="./images/tp1_archi_2.png"
            alt="Relational Model"
          />
        </Slide>
        <Slide>
          <Title>Architecture</Title>
          <img
            src="./images/tp1_archi_3.png"
            alt="Relational Model"
          />
        </Slide>
        <Slide>
          <Title>Architecture</Title>
          <img
            src="./images/tp1_archi_4.png"
            alt="Relational Model"
            className={classes.simpleArchi} 
          />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Setup MongoDB<SubTitle>(using Docker)</SubTitle></Title>
          <Content>Create container and start MongoDB Server</Content>
          <CodeBox code={runWithDocker1} />
          <Content>Restart server</Content>
          <CodeBox code={runWithDocker2} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Setup MongoDB<SubTitle>(using Docker)</SubTitle></Title>
          <Content>Start MongoShell client (in another terminal)</Content>
          <CodeBox code={runWithDocker3} />
          <Content centered>Run with Docker</Content>
          <Content>Import a json file (ex: <a href="./data-set/enron.json">enron.json</a>) in the container (in another terminal)</Content>
          <CodeBox code={runWithDocker4} />
          <Content>Load the file into the database (in another terminal)</Content>
          <CodeBox code={runWithDocker5} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Install natively</Title>
          <Content>In case you cannot run the lab with docker :</Content>
          <Content>
            Documentation to install on Linux and MacOS{" "}
            <a
              href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
          <Content>
            Documentation to install on Windows{" "}
            <a
              href="https://docs.mongodb.com/database-tools/installation/installation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Mongo Shell</Title>
          <Content>Emails</Content>
          <SubContent>
            I.1. Import the <a href="./data-set/enron.json">enron.json</a> in
            the collection &quot;emails&quot;{" "}
            <span className={classes.focused}>[Shell command]</span>
          </SubContent>
          <SubContent>
            I.2. What is the total amount of emails ?{" "}
            <span className={classes.focused}>[Query + Result]</span>
          </SubContent>
          <SubContent>
            I.3. What is the amount of emails in inbox ?{" "}
            <span className={classes.focused}>[Query + Result]</span>
          </SubContent>
          <SubContent>
            I.4. List the emails sent from domain yahoo.com{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            I.5. How long took the last request{" "}
            <span className={classes.focused}>[Request + Time]</span>
          </SubContent>
        </Slide>

        <Slide alignItems="flex-start">
          <Title>Mongo Shell</Title>
          <Content>Emails</Content>
          <SubContent>
            I.6. Add an index the right field to make the last request run
            faster <span className={classes.focused}>[Index Query]</span>
          </SubContent>
          <SubContent>
            I.7. How long took the last request with the index{" "}
            <span className={classes.focused}>[Time]</span>
          </SubContent>
          <SubContent>
            I.8. Find only dates and subjects of all messages sent by
            mike.mcconnell@enron.com{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            I.9. Remove rosalee.fleming@enron.com from all the email recipient{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            I.10. Add rob.bradley@enron.com as recipient <br />
            to all emails sent by rosalee.fleming@enron.com{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
        </Slide>

        <Slide alignItems="flex-start">
          <Title>Mongo Shell</Title>
          <Content>ZIP Codes</Content>
          <SubContent>
            Import the <a href="./data-set/zips.json">zips.json</a> in the
            collection &quot;zips&quot;{" "}
            <span className={classes.focused}>[Shell command]</span>
          </SubContent>
          <SubContent>
            II.1. List the 10 most populated zones in California and Louisiana{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            II.2. Then most populated zones in California and Louisiana ranked
            10 to 20 <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            II.3. Add a field country with the value USA to all the zips{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            II.4. List all zones with more than 100 000 inhabitants located on
            the east of meridian -110.{" "}
            <span className={classes.focused}>[Query]</span>
          </SubContent>
          <SubContent>
            II.5. What is the closest zones to coordonates -73.996705, 40.74838{" "}
            <span className={classes.focused}>[Query + Answer]</span>
          </SubContent>
          <SubContent>
            II.6. The cities that are less than 5km away from -73.996705,
            40.74838: <span className={classes.focused}>[Query + Answer]</span>
          </SubContent>
          <SubContent>
            II.7. The cities that have more than 500 000 inhabitants.{" "}
            <span className={classes.focused}>[Query + Answer]</span>
          </SubContent>
        </Slide>
      </Section>
    </>
  );
};
