import React, { useState, useEffect } from "react";
import { useGlobalContext } from "contexts/store";
import { ServiceUrl } from "constants/serviceurl";
import { actionType } from "contexts/actions";
import { ErrorDiv } from "components/common/ErrorDiv";
import { ProjectCard } from "components/cards/Cards";
import { ContentLoadingPlaceholder } from "components/common/ContentLoadingPlaceholder";
import { ProjectTypes } from "constants/common";

export function Project() {
  const { state, dispatch } = useGlobalContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const projects = (projects: Array<any>) =>
    projects.map((proj: any) => (
      <ProjectCard key={proj.ProjectName} project={proj} />
    ));

  useEffect(() => {
    if (state.App.Projects.length === 0) {
      fetch(ServiceUrl.ProjectsUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);

            // Set the Projetcs
            dispatch({ type: actionType.SetProjects, payload: result });
          },
          (error) => {
            setIsLoaded(true);

            // Set the error message
            dispatch({ type: actionType.SetAppError, payload: error });
          }
        );
    } else {
      setIsLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let workProjects = state.App.Projects.filter(
    (project: any) => project.ProjectType === ProjectTypes.Work
  );

  let personalProjects = state.App.Projects.filter(
    (project: any) => project.ProjectType === ProjectTypes.Personal
  );

  const projectTypeCss = { fontSize: "2rem", paddingTop: "2rem" };

  return (
    <>
      {isLoaded && state.App.Projects.length > 0 ? (
        <>
          <div style={projectTypeCss}>{ProjectTypes.Work}</div>
          {projects(workProjects)}
          <br />
          <br />
          <div style={projectTypeCss}>{ProjectTypes.Personal}</div>
          {projects(personalProjects)}
        </>
      ) : isLoaded ? (
        <ErrorDiv />
      ) : (
        <ContentLoadingPlaceholder />
      )}
    </>
  );
}
