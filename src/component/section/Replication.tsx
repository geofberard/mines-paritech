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
  installToolsMacOs1,
  installToolsMacOs2,
  installToolsMacOs3,
  writeConcernQuery,
  writeConcernDefault,
} from "./commands";
import { SubContent } from "../SubContent";
import { PracticalPart1 } from "./practical/PracticalPart1";
import { PracticalPart2 } from "./practical/PracticalPart2";
import { PracticalPart3 } from "./practical/PracticalPart3";
import { List } from "../List";
import { Cartouche } from "../Cartouche";
import { DataTable } from "../DataTable";

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

export const Replication = () => {
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
          <Title>Replication</Title>
        </Slide>
      </Section>
      <Slide>
        <Title>MongoDB write path</Title>
        <img src="./images/journaling.png" alt="Journaling" />
      </Slide>
      <Slide alignItems="flex-start">
        <Title>MongoDB</Title>
        <Content centered> Journal vs Oplog</Content>
        <Content>Journal </Content>
        <List
          elements={[
            "low level log of an operation for crash recovery (can be turned off)",
          ]}
        />
        <Content>Oplog (similar to RDBMS binlog)</Content>
        <List
          elements={[
            "stores (idemopotent) high-level transactions that modify the database",
            "kept on the master and used for replication",
          ]}
        />
        <SubContent>
          <a
            href="https://docs.mongodb.org/manual/core/read-isolation-consistency-recency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.mongodb.org/manual/core/read-isolation-consistency-recency/
          </a>
        </SubContent>
      </Slide>
      <Section>
        <Slide>
          <Title>Replica set</Title>
          <Content>
            A group of mongod processes that provide redundancy and high
            availability
          </Content>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content centered>Members</Content>
          <Content>Primary </Content>
          <List
            elements={[
              "acceptes all writes and reads",
              "1 primary per replica set",
            ]}
          />
          <Content>Secondaries </Content>
          <List
            elements={[
              "replicates data",
              "can serve reads",
              "can be hidden (priority 0)",
            ]}
          />
          <Content>Arbiters </Content>
          <List elements={["at most 1", "break ties"]} />
        </Slide>
        <Slide>
          <Title>Replica set</Title>
          <Content>Read &amp; Write </Content>
          <Cartouche src="./images/replica-set-read-write-operations-primary.png" />
        </Slide>
        <Slide>
          <Title>Replica set</Title>
          <Content>Replication Flow </Content>
          <Cartouche src="./images/replica-set-primary-with-two-secondaries.png" />
        </Slide>
        <Slide>
          <Title>Replica set</Title>
          <Content>Automatic Failover </Content>
          <Cartouche src="./images/replica-set-trigger-election.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>Election strategy </Content>
          <List
            elements={[
              "member’s priority",
              "latest optime in the oplog",
              "uptime",
              "break the tie rules",
            ]}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>Priority 0 </Content>
          <List
            elements={[
              "cannot become primary",
              "cannot trigger elections",
              "can vote in elections",
              "copy of data + accepts reads",
            ]}
          />
          <Cartouche src="./images/replica-set-three-members-geographically-distributed.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>Hidden </Content>
          <List elements={["Priority 0 members that don’t accept reads"]} />
          <Cartouche src="./images/replica-set-hidden-member.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>Delayed </Content>
          <List elements={["must be priority 0", "must hidden"]} />
          <Cartouche src="./images/replica-set-delayed-member.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>Election </Content>
          <List
            elements={["Odd number of node", "Cannot be elected with one vote"]}
          />
          <Cartouche src="./images/replica-set-trigger-election.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content centered>Arbiters </Content>
          <Cartouche src="./images/replica-set-four-members-add-arbiter.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>No primary:</Content>
          <List
            elements={["writes no longer possible", "reads still accepted"]}
          />
          <Content>Fault tolerance: </Content>
          <SubContent>
            Number of members that can become unavailable and still be able to
            elect a primary
          </SubContent>
          <DataTable
            data={[
              ["Nb of members", "Majority required", "Fault tolerance"],
              ["3", "2", "1"],
              ["4", "3", "1"],
              ["5", "3", "2"],
              ["6", "4", "2"],
            ]}
          />
          <SubContent>
            <a
              href="https://docs.mongodb.org/manual/core/replica-set-architectures/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://docs.mongodb.org/manual/core/replica-set-architectures/
            </a>
          </SubContent>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content centered>Rollback</Content>
          <Content>
            What if the primary is lost right after accepting write operation ?
          </Content>
          <Content>
            Some omerations may have not been replicatated on secondaries
          </Content>
          <Content>Issues </Content>
          <List
            elements={[
              "some entries will be lost",
              "some client could have read those data before they where lost",
            ]}
          />
          <Content>Solution </Content>
          <List
            elements={[
              "manually apply rollbacks",
              "change write configuration (semantics)",
            ]}
          />
          <SubContent>
            <a
              href="https://docs.mongodb.com/manual/core/replica-set-rollbacks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://docs.mongodb.com/manual/core/replica-set-rollbacks/
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Write semantics</Title>
          <Content>w:1 </Content>
          <List elements={["Acknowledging the write after the local write"]} />
          <Content>w:N </Content>
          <List
            elements={["Waitings for N members to write before acknowledging"]}
          />
          <Content>w:majority </Content>
          <List
            elements={[
              "Waiting for the majority of members to write before acknowledging",
            ]}
          />
          <Content>wtimeout (optional)</Content>
          <List
            elements={["Prevent blocking if write concern cannot be reached"]}
          />
        </Slide>
        <Slide>
          <Title>Write semantics</Title>
          <Cartouche src="./images/crud-write-concern-w2.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Changing write semantics</Title>
          <Content>At the query level</Content>
          <CodeBox code={writeConcernQuery}/>
          <Content>Default value</Content>
          <CodeBox code={writeConcernDefault}/>
        </Slide>
      </Section>
      <Section>
        <Slide alignItems="flex-start">
          <Title>Read preference</Title>
          <Content>primary (default)</Content>
          <List elements={["read from the current replica set primary."]}/>
          <Content>primaryPreferred</Content>
          <List elements={["read from primary (or secondary iff no primary)"]}/>
          <Content>secondary</Content>
          <List elements={["read from secondary members"]}/>
          <Content>secondaryPreferred</Content>
          <List elements={["read from secondary(or primary iff no primary)"]}/>
          <Content>nearest</Content>
          <List elements={["read from the member with the least network latency"]}/>
        </Slide>
        <Slide>
          <Title>Read preference</Title>
          <Content>Example</Content>
          <Cartouche src="./images/replica-set-read-preference.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Read preference</Title>
          <Content centered>Usecase</Content>
          <Content>Maximize Consistency</Content>
          <List elements={["primary"]}/>
          <Content>Maximize Availability</Content>
          <List elements={["primaryPreferred"]}/>
          <Content>Minimize Latency</Content>
          <List elements={["nearest"]}/>
        </Slide>
      </Section>
      <PracticalPart3/> 
    </>
  );
};
