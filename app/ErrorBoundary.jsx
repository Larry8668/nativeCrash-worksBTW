import React from 'react';
import { View, Text } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: '', errorInfo: ''};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.log('Error: ' + error);

    console.log('Error Info: ' + JSON.stringify(info));

    this.setState({
      error: error,

      errorInfo: info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <View
          style={{
            flex: 1,

            justifyContent: 'center',

            alignItems: 'center',
          }}>
          <Text>Oops!!! Something went wrong..</Text>

          <Text>Error: {this.state.error.toString()}</Text>

          <Text>Error Info: {JSON.stringify(this.state.errorInfo)}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary