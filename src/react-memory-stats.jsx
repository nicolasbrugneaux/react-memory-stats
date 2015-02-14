"use strict";

import React from "react";
import MemoryStats from "memory-stats";
// shim
import "requestanimationframe";

var stats = new MemoryStats();
stats.domElement.style.position = "fixed";
stats.domElement.style.right    = "0";
stats.domElement.style.bottom   = "0";

requestAnimationFrame( function update()
{
    stats.update();
    requestAnimationFrame( update );
} );

var ReactMemoryStats = React.createClass(
{
    propTypes :
    {
        enabled : React.PropTypes.bool.isRequired,
    },

    getInitialState : function()
    {
        return {
            enabled : this.props.enabled
        };
    },
    render : function()
    {
        return this.state.enabled ?
            <div dangerouslySetInnerHTML={{__html: stats.domElement.outerHTML}}/>
            : null;
    }
} );

export default ReactMemoryStats;
