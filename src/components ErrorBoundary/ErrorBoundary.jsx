import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError:false
    }
    static getDerivedStateFromError(err) {
        return {hasError: true
    }
    }
    componentDidCatch(err, errinfo) {
        console.log(err);
        console.log(errinfo);
    }
    render() {
        if (this.state.hasError) {
            return <h1 style={{color:'red'
        }
    } >Somthing Went Wrong!!!</h1>
        }
        
    
    else
    {
    return (this.props.children)
    }
}}
