import React, { PropTypes, Component } from 'react'

class Facebook extends React.Component {
  render() {
    const { title, img } = this.props
    console.log(this.props);
    return ( 
      <div className="well" style={ title ? { display:'block'} : {display : 'none'} } >
        <img className="img-circle" src={ img } />
        <h1 className="text-muted">{ title }</h1>
      </div>
    )
  }
}

Facebook.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string
}

Facebook.defaultProps = {
  title: null,
  img: null
};

export default Facebook



