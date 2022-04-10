import React from "react";
import { useGlobalContext } from "contexts/store";
// import { actionType } from "contexts/actions";
// import { ProjectTypes } from "constants/serviceurl";
// import { Contact } from "components/pages/Contact";
// import { About } from "components/pages/About";
// import { Calculator } from "components/tools/Calculator";
import ReactMarkdown from "react-markdown";

export function GenericPage(props: any) {
  const { state } = useGlobalContext();

  let sectionData = state.App.Sections.filter(
    (section: any) => section.SectionName === props.SectionNane
  )[0];
  return (
    // <div style={{ whiteSpace: "pre-line" }}>{sectionData.SectionContent}</div>
    <ReactMarkdown>{sectionData.SectionContent}</ReactMarkdown>
  );
}
