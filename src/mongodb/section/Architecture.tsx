import { makeStyles } from "@material-ui/core";
import * as React from "react";
import { Content } from "../../component/Content";
import { Separator } from "../../component/Separator";
import { List } from "../../component/List";
import { Section } from "../../component/Section";
import { Slide } from "../../component/Slide";
import { Title } from "../../component/Title";
import { JsonBox } from "../../component/JsonBox";
import { DataTable } from "../../component/DataTable";
import { CodeBox } from "../../component/CodeBox";
import { SubTitle } from "../../component/SubTitle";
import { SubContent } from "../../component/SubContent";
import { Cartouche } from "../../component/Cartouche";
import { Horizontal } from "../../component/Horizontal";
import { Details } from "../../component/Details";
import { writeConcernDefault, writeConcernQuery } from "./commands";

const useStyle = makeStyles(theme => ({
  technos: {
    maxWidth: 500,
  },
  cartouches: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
  limitedHeight: {
    height: 450,
  },
}));

const jsonExample = {
  _id: 1,
  first_name: "Paul",
  surname: "McCartney",
  instruments: ["Guitar", "Bass guitar", "Piano"],
  address: {
    street: "20 Forthlin Road",
    city: "LiverPool",
    zip: "United Kingdom",
  },
};

const musiciansJson = [
  {
    first_name: "Louis",
    surname: "Armstrong",
    birthday: "4 août 1901",
  },
  {
    first_name: "Paul",
    surname: "McCartney",
    title: "Sir",
    birthday: "18 June 1942",
  },
  {
    first_name: "Gordon Matthew Thomas",
    surname: "Sumner",
    nickname: "Sting",
    birthday: "2 octobre 1951",
  },
];

const carefullJson = [
  {
    first_name: "Louis",
    surname: "Armstrong",
    birthday: "4 août 1901",
  },
  {
    first_name: 42,
  },
];

const mongoModel = {
  first_name: "Paul",
  surname: "Miller",
  city: "London",
  cars: [
    {
      model: "Bentley",
      year: 1973,
      value: 100000,
    },
    {
      model: "Rolls Royce",
      year: 1965,
      value: 330000,
    },
  ],
};

export const Architecture = () => {
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
          <Title>Architecture</Title>
          <SubTitle>09/12/2022</SubTitle>
        </Slide>
      </Section>
      <Slide>
        <Title>Journaling</Title>
        <img src="./images/journaling.png" alt="Journaling" />
      </Slide>
      <Section>
        <Slide>
          <Title>Replication</Title>
          <Content centered> Replica Set</Content>
          <Content>
            A group of mongod processes that contain the same data set.
          </Content>
          <Details>
            Can be a standalone instance (not in production)
          </Details>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
          <Horizontal>
            <Cartouche src="./images/rs_presentation.png" />
            <div>
              <Content>Two copies or more</Content>
              <Content>Master / Slave</Content>
              <Content>Automatic Failover</Content>
              <Content>Purpose</Content>
              <List
                elements={["High Availability", "Data Recovery", "Maintenance"]}
              />
            </div>
          </Horizontal>
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
          <Title>Replica Set</Title>
          <Content>Operation Management</Content>
          <img
            src="./images/rs_architecture.png"
            className="print-with-background"
            alt="Replica Set"
          />
        </Slide>
        <Slide>
          <Title>Replica Set</Title>
          <Content>Synchronization</Content>
          <img
            src="./images/rs_organisation.png"
            className="print-with-background"
            alt="Replica Set"
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
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
              "stores (idempotent) high-level operation that modify the database",
              "kept on the master and used for replication",
            ]}
          />
          <SubContent>
            <a
              href="https://docs.mongodb.org/manual/core/read-isolation-consistency-recency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation here
            </a>
          </SubContent>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
          <Content>
            MongoDB proposes a replica set tutorial in the{" "}
            <a
              href="https://docs.mongodb.com/manual/administration/replica-set-deployment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
          </Content>
          <Content>
            The full documentation is{" "}
            <a
              href="https://docs.mongodb.com/manual/replication/"
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
          <Title>Replica Set</Title>
          <Content centered>Write semantics</Content>
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
          <Title>Replica Set</Title>
          <Content centered>Write semantics</Content>
          <Cartouche src="./images/crud-write-concern-w2.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
          <Content centered>Write semantics</Content>
          <Content>At the query level</Content>
          <CodeBox code={writeConcernQuery}/>
          <Content>Default value</Content>
          <CodeBox code={writeConcernDefault}/>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
          <Content centered>Read preference</Content>
          <Content>primary (default)</Content>
          <List elements={["read from the current replica set primary."]}/>
          <Content>primaryPreferred</Content>
          <List elements={["read from primary (or secondary if no primary)"]}/>
          <Content>secondary</Content>
          <List elements={["read from secondary members"]}/>
          <Content>secondaryPreferred</Content>
          <List elements={["read from secondary(or primary if no primary)"]}/>
          <Content>nearest</Content>
          <List elements={["read from the member with the least network latency"]}/>
        </Slide>
        <Slide>
          <Title>Replica Set</Title>
          <Content centered>Read preference</Content>
          <Content>Example</Content>
          <Cartouche src="./images/replica-set-read-preference.png" />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica Set</Title>
          <Content centered>Read preference</Content>
          <Content>Usecase:</Content>
          <Content>Maximize Consistency ={">"} primary</Content>
          <Content>Maximize Availability ={">"} primaryPreferred</Content>
          <Content>Minimize Latency ={">"} nearest</Content>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Replica Set</Title>
          <Content>Failover</Content>
          <img
            src="./images/rs_failover.png"
            className="print-with-background"
            alt="Replica Set"
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Replica set</Title>
          <Content>Election strategy </Content>
          <List
            elements={[
              "odd number of node",
              "cannot be elected with one vote",
              "member’s priority"
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
          <Content>Arbiters </Content>
          <List elements={["cannot be elected", "has no dataset"]} />
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
              Documentation here
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
              Documentation here
            </a>
          </SubContent>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Distribution</Title>
          <Content centered> Sharding</Content>
          <Content>
            Splitting data set across multiple instances
          </Content>
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Config Server</Content>
          <Separator />
          <Content>Contains cluster metadatas</Content>
          <List
            elements={[
              "1 instance in dev, 3 in production",
              "Contains intervals definitions (chunks)",
              "Maintenance",
            ]}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Query Router (mongos)</Content>
          <Separator />
          <Content>Contains cluster metadatas</Content>
          <List
            elements={[
              "Behaves identically to mongod",
              "Query router",
              "Load Balancer",
              "Dedicated or shared",
            ]}
          />
        </Slide>
        <Slide>
          <Title>Sharding</Title>
          <Content>Architecture</Content>
          <img
            src="./images/sharding_architecture.png"
            className="print-with-background"
            alt="Architecture"
          />
        </Slide>
        <Slide>
          <Title>Sharding</Title>
          <Content>Shard = Cluster Node</Content>
          <img
            src="./images/sharding_presentation.png"
            alt="Chunk"
            className={classes.limitedHeight}
          />
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Sharding</Title>
          <Content>Balancing</Content>
          <img
            src="./images/sharding_balancing.png"
            className="print-with-background"
            alt="Chunks"
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Sharding Key</Content>
          <Separator />
          <Content>Requirement :</Content>
          <List
            elements={[
              "Immutablility (key/value)",
              "Big cardinality",
              "Distributed",
              "Should be indexed",
              "Limited to 512 octets",
            ]}
          />
        </Slide>
        <Slide alignItems="flex-start">
          <Title>Sharding</Title>
          <Content centered>Chunk</Content>
          <Separator />
          <Content>Requirement :</Content>
          <List
            elements={[
              "Split if bigger than 64Mo",
              "Split & Moved",
              "Split only between 2 différent values",
              "Moved Automatically",
            ]}
          />
          <Content centered>
            <img
              src="./images/sharding_chunk.png"
              className="print-with-background"
              alt="Chunks"
            />
          </Content>
        </Slide>
      </Section>
    </>
  );
};
