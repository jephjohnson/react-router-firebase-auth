import React, { PropTypes, Component } from 'react'

class Errors extends React.Component {
  render() {
    const { title } = this.props
    console.log(this.props);
    return ( 
      <div className="well" style={ title ? { display:'block'} : {display : 'none'} } >
        <span className="text-muted">{ title }</span>
      </div>
    )
  }
}

Errors.propTypes = {
  title: PropTypes.string.isRequired
}

Errors.defaultProps = {
  title: null
};

export default Errors



