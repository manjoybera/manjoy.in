import React from "react";
import { ErrorDiv } from "./ErrorDiv";

export class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  //   componentDidUpdate(previousProps: any, previousState: any) {
  //     if (previousProps.children !== this.props.children)
  //       this.setState({ hasError: false });
  //   }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const ErrorBoundaryCss = {
      fontSize: "3rem",
      color: "grey",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      height: "100vh",
      //   background: "#282c34",
    } as React.CSSProperties;

    if (this.state.hasError) {
      // render any custom fallback UI
      return (
        <div style={ErrorBoundaryCss}>
          <ErrorDiv />
        </div>
      );
    }

    return this.props.children;
  }
}
