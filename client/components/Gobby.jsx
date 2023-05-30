import React from "react";
import PropTypes from "prop-types";


const GobbyVid = ({ embedId }) => (
<>

  <div style={{
    overflow: 'hidden',
  paddingBlock: '56.25%',
  position: 'relative',
  height: 0}} >
    <iframe style={{
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    position: 'absolute'
}}
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
  </div>
</>
);

GobbyVid.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default GobbyVid;