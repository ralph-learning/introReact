import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if(this.state.hasError) return (<h1>Something it wrongs!</h1>);

    return this.props.children;
  }
}
