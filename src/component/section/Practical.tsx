import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { CodeBox } from "../CodeBox";
import { Content } from "../Content";
import { Section } from "../Section";
import { Slide } from "../Slide";
import { Title } from "../Title";
import {
  installMacOs1,
  installMacOs2,
  installMacOs3,
  installMacOs4,
  installMacOs5,
  installWindows1,
  installWindows2,
  installWindows3,
  installWindows4,
} from "./commands";
import { SubContent } from "../SubContent";

const useStyle = makeStyles(theme => ({
  limitHeight: {
    height: 450,
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

export const Practical = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <img
            src="./images/mongodb_logo.png"
            alt="MongoDB Logo"
            className="print-with-background"
          />
          <Title>Practical</Title>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Install MongoDB</Title>
          <Content centered>Linux &amp; MacOS</Content>
          <Content>
            Documentation{" "}
            <a
              href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
          <Content>
            Download mongodb zip{" "}
            <a
              href="https://www.mongodb.com/download-center#community"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
          <Content>Unzip and go in the file</Content>
          <CodeBox code={installMacOs1} />
          <Content>Create the storage directory</Content>
          <CodeBox code={installMacOs2} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Install MongoDB</Title>
          <Content centered>Linux &amp; MacOS</Content>
          <Content>Go to the directory</Content>
          <CodeBox code={installMacOs3} />
          <Content>Run MongoDB Daemon (server)</Content>
          <CodeBox code={installMacOs4} />
          <Content>Run MongoShell (client) in an other shell</Content>
          <CodeBox code={installMacOs5} />
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Install MongoDB</Title>
          <Content centered>Windows</Content>
          <Content>
            Documentation{" "}
            <a
              href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows-unattended/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
          <Content>
            Download mongodb zip{" "}
            <a
              href="https://www.mongodb.com/download-center#community"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </Content>
          <Content>Install it</Content>
          <Content>Create the storage directory </Content>
          <CodeBox code={installWindows1} />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Install MongoDB</Title>
          <Content centered>Windows</Content>
          <Content>Go to the directory</Content>
          <CodeBox code={installWindows2} />
          <Content>Run MongoDB Daemon (server)</Content>
          <CodeBox code={installWindows3} />
          <Content>Run MongoShell (client) in an other cmd</Content>
          <CodeBox code={installWindows4} />
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
            I.10. Add rob.bradley@enron.com as recipient <br/>to all emails sent by
            rosalee.fleming@enron.com{" "}
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
            the east of meridian 110.{" "}
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
