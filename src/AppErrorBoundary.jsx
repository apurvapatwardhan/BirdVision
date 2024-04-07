import React from "react"
import PropTypes from "prop-types"
class AppErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = {
            err: null
        }
    }

    static getDerivedStateFromError(error) {
        return {
            err: error
        }
    }

    render() {
        if(this.state.err) {
            <div>Something Went Wrong</div>
        }
        return this.props.children;
    }
    
}

export default AppErrorBoundary

AppErrorBoundary.propTypes = {
    children : PropTypes.node
}