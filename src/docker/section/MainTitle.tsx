import * as React from "react";
import {Slide} from "../../component/Slide";
import {SubTitle} from "../../component/SubTitle";
import {Title} from "../../component/Title";
import {DockerLogo} from "./DockerLogo";

export const MainTitle = () => (
    <Slide>
        <DockerLogo />
        <Title>Develop faster - Run anywhere</Title>
        <SubTitle>Geoffrey Berard / <a href="https://www.linkedin.com/in/geoffrey-berard-a21b9347">@geofberard</a></SubTitle>
        <SubTitle>geoffrey.berard@gmail.com</SubTitle>
        <SubTitle><a href="http://bit.ly/3SHpELP">http://bit.ly/3SHpELP - <a href="./docker.pdf" target="_blank"> pdf</a></a></SubTitle>
    </Slide>
);
