import React, { Component } from 'react'
import { firebaseAuth } from '../../config/constants'
import Facebook from '../Facebook'

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Jeph',
      img: []
    }
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.providerData)
        this.setState({
          user: user.displayName,
          img: user.providerData       
        })
      }
    })
  }
  render () {
  	const facebookItem = this.state.img.map((e, index) =>
    	<Facebook key={index} title={this.state.user} img={"https://graph.facebook.com/" + e.uid + "/picture?width=9999"} />
  	);
    return (
      <div>
    	{facebookItem}
        Dashboard. This is a protected route. You can only see this if you're authed.
      </div>
    )
  }
}