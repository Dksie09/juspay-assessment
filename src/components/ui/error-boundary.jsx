"use client";

import React from "react";
import { z } from "zod";

const ErrorBoundaryProps = z.object({
  children: z.any(),
  fallback: z.any().optional(),
  onError: z.function().optional(),
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Call optional onError callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback component
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="flex flex-col items-center justify-center p-8 bg-background rounded-lg border">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-destructive mb-2">
              Something went wrong
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              An error occurred while rendering this component.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-4 p-4 bg-muted rounded text-left">
                <summary className="cursor-pointer font-medium">
                  Error Details
                </summary>
                <pre className="mt-2 text-xs whitespace-pre-wrap overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Validate props
const ErrorBoundaryWrapper = (props) => {
  const validatedProps = ErrorBoundaryProps.parse(props);
  return <ErrorBoundary {...validatedProps} />;
};

export default ErrorBoundaryWrapper;