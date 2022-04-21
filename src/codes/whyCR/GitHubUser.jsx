import React, { Component } from 'react'
import Spinner from './Spinner';

export default class GitHubUser extends Component {
    state = {
        users:null
    };
   async componentDidMount() {
       let data = await fetch("https://api.github.com/users").then(res => res.json())
       this.setState({users:data})
    }


    render() {
        let Userdisplay = () => {
            return this.state.users.map((user) => {
            
                return (
                  <>
                    <h3 >{user.login}</h3>
        <img  src={user.avatar_url} alt="" />
                  </>
                );
            })
        }
      
    return (
        <div>{
            (this.state.users) ? <Userdisplay/>:<Spinner/>
        }</div>
    )
  }
}
