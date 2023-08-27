import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * A React component that serves as an error boundary to
 * catch and handle errors in its children. Displays an error message
 * if an error occurs within its child components.
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Error: ", errorInfo);
    this.setState({ hasError: true, error });
  }

  render() {
    // Display error message
    if (this.state.hasError) {
      return <div>Error: {this.state.error?.message}</div>;
    }

    // Render wrapped content
    return this.props.children;
  }
}

export default ErrorBoundary;
