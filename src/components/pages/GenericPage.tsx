import React from "react";
import { useGlobalContext } from "contexts/store";
// import { actionType } from "contexts/actions";
// import { ProjectTypes } from "constants/serviceurl";
// import { Contact } from "components/pages/Contact";
// import { About } from "components/pages/About";
// import { Calculator } from "components/tools/Calculator";
import ReactMarkdown from "react-markdown";
import { ContentLoadingPlaceholder } from "components/common/ContentLoadingPlaceholder";

export function GenericPage(props: any) {
  const { state } = useGlobalContext();

  let sectionData = state.App.Sections.filter(
    (section: any) => section.SectionName === props.SectionNane
  )[0];
  return (
    // <div style={{ whiteSpace: "pre-line" }}>{sectionData.SectionContent}</div>

    props.isLoaded || props.SectionNane ? (
      <ReactMarkdown>{sectionData.SectionContent}</ReactMarkdown>
    ) : (
      <ContentLoadingPlaceholder />
    )
  );
}
