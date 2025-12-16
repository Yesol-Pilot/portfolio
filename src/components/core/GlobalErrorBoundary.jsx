import React from 'react';

class GlobalErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', color: '#ff0033', backgroundColor: 'black', height: '100vh', fontFamily: 'monospace' }}>
                    <h1>SYSTEM CRITICAL FAILURE</h1>
                    <h2 style={{ color: 'white' }}>Metaverse OS has encountered a fatal error.</h2>
                    <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px', color: '#888' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        onClick={() => window.location.reload()}
                        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#333', color: 'white', border: '1px solid #ff0033', cursor: 'pointer' }}
                    >
                        REBOOT SYSTEM
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;
