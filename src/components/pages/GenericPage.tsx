import React from "react";
import { useGlobalContext } from "contexts/store";
import ReactMarkdown from "react-markdown";
import { ContentLoadingPlaceholder } from "components/common/ContentLoadingPlaceholder";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { Contact } from "./Contact";
import { SectionTypes } from "constants/common";

export function GenericPage(props: any) {
  const { state } = useGlobalContext();

  let sectionData = state.App.Sections.filter(
    (section: any) => section.SectionName === props.SectionNane
  )[0];
  return (
    // <div style={{ whiteSpace: "pre-line" }}>{sectionData.SectionContent}</div>

    props.isLoaded || props.SectionNane ? (
      <>
        <ReactMarkdown>{sectionData.SectionContent}</ReactMarkdown>
        {props.SectionNane === SectionTypes.Experience ? <Experience /> : ""}
        {props.SectionNane === SectionTypes.Projects ? <Project /> : ""}
        {props.SectionNane === SectionTypes.Contact ? <Contact /> : ""}
      </>
    ) : (
      <ContentLoadingPlaceholder />
    )
  );
}
