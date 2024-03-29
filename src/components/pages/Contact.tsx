import React, { useState, useEffect } from "react";
import { useGlobalContext } from "contexts/store";
import { ServiceUrl } from "constants/serviceurl";
import { actionType } from "contexts/actions";
import { ErrorDiv } from "components/common/ErrorDiv";
import { ContactCard } from "components/cards/Cards";
import { ContentLoadingPlaceholder } from "components/common/ContentLoadingPlaceholder";

export function Contact() {
  const { state, dispatch } = useGlobalContext();
  const [isLoaded, setIsLoaded] = useState(false);

  const contacts = (contacts: Array<any>) =>
    contacts.map((contact: any) => (
      <ContactCard key={contact.ContactPlatform} contact={contact} />
    ));

  useEffect(() => {
    if (state.App.Contacts.length === 0) {
      fetch(ServiceUrl.ContsactsUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);

            // Set the Contacts
            dispatch({ type: actionType.SetContacts, payload: result });
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
      {isLoaded && state.App.Contacts.length > 0 ? (
        contacts(state.App.Contacts)
      ) : isLoaded ? (
        <ErrorDiv />
      ) : (
        <ContentLoadingPlaceholder />
      )}
    </>
  );
}
