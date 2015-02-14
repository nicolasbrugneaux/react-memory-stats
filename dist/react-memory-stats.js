"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var MemoryStats = _interopRequire(require("memory-stats"));

// shim
require("requestanimationframe");

var stats = new MemoryStats();
stats.domElement.style.position = "fixed";
stats.domElement.style.right = "0";
stats.domElement.style.bottom = "0";

requestAnimationFrame(function update() {
    stats.update();
    requestAnimationFrame(update);
});

var ReactMemoryStats = React.createClass({
    displayName: "ReactMemoryStats",
    propTypes: {
        enabled: React.PropTypes.bool.isRequired },

    getInitialState: function () {
        return {
            enabled: this.props.enabled
        };
    },
    render: function () {
        return this.state.enabled ? React.createElement("div", { dangerouslySetInnerHTML: { __html: stats.domElement.outerHTML } }) : null;
    }
});

module.exports = ReactMemoryStats;

