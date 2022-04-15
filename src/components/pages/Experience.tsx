import React, { useState, useEffect } from "react";
import { useGlobalContext } from "contexts/store";
import { ServiceUrl } from "constants/serviceurl";
import { actionType } from "contexts/actions";
import { ErrorDiv } from "components/common/ErrorDiv";
import { ExperienceCard } from "components/cards/Cards";
import { ContentLoadingPlaceholder } from "components/common/ContentLoadingPlaceholder";

export function Experience() {
  const { state, dispatch } = useGlobalContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const experiences = (experiences: Array<any>) =>
    experiences.map((exp: any) => (
      <ExperienceCard key={exp.CompanyName} experience={exp} />
    ));

  useEffect(() => {
    if (state.App.Experience.length === 0) {
      fetch(ServiceUrl.ExperienceUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);

            // Set the Experience
            dispatch({ type: actionType.SetExperience, payload: result });
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

  return (
    <>
      {isLoaded && state.App.Experience.length > 0 ? (
        experiences(state.App.Experience)
      ) : isLoaded ? (
        <ErrorDiv />
      ) : (
        <ContentLoadingPlaceholder />
      )}
    </>
  );
}
