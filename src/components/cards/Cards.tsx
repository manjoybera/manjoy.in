import React, { useState } from "react";
import { Github, Linkedin, Mailbox } from "styled-icons/bootstrap";
import { CorporateFare } from "styled-icons/material";
import { useGlobalContext } from "contexts/store";
import { ContactTypes } from "constants/common";

export function Card({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const CardCss = {
    boxShadow: "0 7px 30px -10px rgba(150,170,180,0.5)",
    marginTop: "2rem",
    borderRadius: "0.5rem",
    minWidth: "40vw",
    border: "1px solid #b9da08",
    backgroundColor: "#ffffff4a",
    padding: "1rem",
  };
  return (
    <div style={CardCss} className={"Card"}>
      {children}
    </div>
  );
}

export function ExperienceCard({ experience }: any) {
  const { state } = useGlobalContext();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expandSkills, setExpandSkills] = useState(false);

  const ExperienceImageCss = {
    color: state.Theme.TextColor,
    height: "8rem",
    margin: "0.5rem",
    alignSelf: "flex-start",
    cursor: "pointer",
  };

  const experiencePeriodCss = {
    color: state.Theme.ShowDarkTheme ? "#bbbaba" : "grey",
  };

  const CompanyImage = (
    <a href={experience.CompanyUrl} target="_blank" rel="noreferrer">
      {!imageLoaded && <CorporateFare style={ExperienceImageCss} />}
      <img
        src={experience.CompanyLogoUrl}
        style={!imageLoaded ? { display: "none" } : ExperienceImageCss}
        onLoad={() => setImageLoaded(true)}
        alt={experience.CompanyName}
      />
    </a>
  );

  const trimSkills =
    !expandSkills &&
    experience.JobSkills &&
    experience.JobSkills.length > 50 ? (
      <>
        {experience.JobSkills.substring(0, 50) + "... "}
        <a
          onClick={() => setExpandSkills(true)}
          href="javascript:void(0);"
          style={experiencePeriodCss}
        >
          see more
        </a>
      </>
    ) : (
      experience.JobSkills
    );

  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {CompanyImage}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <div style={{ fontSize: "2rem" }}>{experience.JobTitle}</div>
          <div style={{ fontSize: "1.5rem" }}>
            <b>{experience.CompanyName}</b>, {experience.JobLocation}
          </div>
          <div style={experiencePeriodCss}>{experience.JobPeriod}</div>
          <br />
          <div style={experiencePeriodCss}>
            <b>Skills Learned: </b>
            {trimSkills}
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ProjectCard({ project }: any) {
  const { state } = useGlobalContext();
  const [expandDescription, setExpandDescription] = useState(false);

  const descriptionCss = {
    color: state.Theme.ShowDarkTheme ? "#bbbaba" : "grey",
  };

  const projectLinkCss = {
    color: state.Theme.TextColor,
    cursor: "pointer",
    textDecoration: "none",
  };

  const trimDescription =
    !expandDescription &&
    project.ProjectDescription &&
    project.ProjectDescription.length > 50 ? (
      <>
        {project.ProjectDescription.substring(0, 100) + "... "}
        <a
          onClick={() => setExpandDescription(true)}
          href="javascript:void(0);"
          style={descriptionCss}
        >
          see more
        </a>
      </>
    ) : (
      project.ProjectDescription
    );

  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <a
          href={project.ProjectLink}
          target="_blank"
          rel="noreferrer"
          style={projectLinkCss}
        >
          <div style={{ fontSize: "2rem" }}>{project.ProjectName}</div>
        </a>
        <div style={{ fontSize: "1.5rem" }}>
          <b>{project.ProjectCompany}</b>
        </div>
        <br />
        <div style={descriptionCss}>{trimDescription}</div>
      </div>
    </Card>
  );
}

export function ContactCard({ contact }: any) {
  const { state } = useGlobalContext();

  const ContactIconCss = {
    color: state.Theme.TextColor,
    height: "2rem",
    margin: "0.5rem",
    alignSelf: "flex-start",
  };

  const contactLinkCss = {
    color: state.Theme.TextColor,
    cursor: "pointer",
  };

  const contactIcon =
    contact.ContactPlatform === ContactTypes.Github ? (
      <Github style={ContactIconCss} />
    ) : contact.ContactPlatform === ContactTypes.LinkedIn ? (
      <Linkedin style={ContactIconCss} />
    ) : contact.ContactPlatform === ContactTypes.Email ? (
      <Mailbox style={ContactIconCss} />
    ) : (
      ""
    );

  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {contactIcon}
        <a
          href={contact.ContactUrl}
          target="_blank"
          rel="noreferrer"
          style={contactLinkCss}
        >
          {" "}
          {contact.ContactValue}
        </a>
      </div>
    </Card>
  );
}
