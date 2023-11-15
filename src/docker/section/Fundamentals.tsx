import * as React from "react";
import {makeStyles} from "@material-ui/core";
import {Content} from "../../component/Content";
import {Section} from "../../component/Section";
import {Slide} from "../../component/Slide";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";
import {AnimatedImage} from "../../component/AnimatedImage";
import {SubContent} from "../../component/SubContent";
import {DataTable} from "../../component/DataTable";

const useStyle = makeStyles(theme => ({
  images: {
    maxWidth: 500,
  },
  ipAddress: {
    width: 350
  }
}));

export const Fundamentals = () => {
  const classes = useStyle();
  return (
    <>
      <Section>
        <Slide>
          <DockerLogo />
          <Title>Fundamentals</Title>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Virtualization</Title>
          <Content>Emulating a system, within an host system !</Content>
          <img
            src="./images/techno_virtual.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Virtualization</Title>
          <img
            src="./images/inception.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Containerization</Title>
          <Content>Emulating a system, within an host system !</Content>
          <img
            src="./images/techno_container.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Virtualization VS Containerization</Title>
          <img
            src="./images/the-office.gif"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Virtualization VS Containerization</Title>
          <AnimatedImage urls={["virt_vs_cont_1.jpg", "virt_vs_cont_2.jpg"]}/>
        </Slide>
      </Section>
      <Section>
        <Slide>
          <Title>Networking</Title>
          <Content>IP Addresses</Content>
          <img
            src="./images/ip_address.png"
            alt="Drivers"
            className={classes.ipAddress}
          />
        </Slide>
        <Slide>
          <Title>Networking</Title>
          <Content>Messaging</Content>
          <img
            src="./images/ip_messages.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Networking</Title>
          <Content>Loopback</Content>
          <img
            src="./images/ip_loopback.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Networking</Title>
          <Content>DNS</Content>
          <SubContent>Hierarchical and distributed naming system</SubContent>
          <DataTable
            data={[
              ["Name", "IP Address"],
              ["localhost", "127.0.0.1"],
              ["google.com", "142.250.179.110"],
              ["mail.google.com", "142.251.163.17"],
              ["www.telecom-paris.fr", "137.194.22.227"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Networking</Title>
          <Content>DNS</Content>
          <img
            src="./images/ip_dns.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
        <Slide>
          <Title>Networking</Title>
          <Content>Ports</Content>
          <SubContent>A computer / server has multiple network enpoints dédicated to specific protocols</SubContent>
          <DataTable
            data={[
              ["Number","Assignment"],
              ["20","File Transfer Protocol (FTP) Data Transfer"],
              ["22","Secure Shell (SSH) Secure Login"],
              ["25","Simple Mail Transfer Protocol (SMTP) email delivery"],
              ["53","Domain Name System (DNS) service"],
              ["80","Hypertext Transfer Protocol (HTTP) used in the World Wide Web"],
              ["110","Post Office Protocol (POP3)"],
              ["143","Internet Message Access Protocol (IMAP) Management of digital mail"],
              ["161","Simple Network Management Protocol (SNMP)"],
              ["194","Internet Relay Chat (IRC)"],
              ["443","HTTP Secure (HTTPS) HTTP over TLS/SSL"],
            ]}
          />
        </Slide>
        <Slide>
          <Title>Networking</Title>
          <Content>Ports</Content>
          <img
            src="./images/ip_ports.png"
            alt="Drivers"
            className={classes.images}
          />
        </Slide>
      </Section>
    </>
  );
};
