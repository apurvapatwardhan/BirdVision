import React from "react";
import PropTypes from "prop-types"

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state= {
            err: null
        }
    }

    static getDerivedStateFromError(error) {
        return {err: error}
    }

    render() {
        if(this.state.err != null) {
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary

ErrorBoundary.propTypes = {
    children : PropTypes.node
}