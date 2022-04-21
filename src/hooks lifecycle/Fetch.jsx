import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class fetch extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            json:[]
        }
    }
    componentDidMount()
    {
        let url="https://api.github.com/users"
        fetch(url).then((res)=>res.json()).then(data=>this.setState(json.data))
}  render() {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Repo</th>
            </tr>
            {this.state.json.map(data => {
                let { login, avatar_url, type, repo_url } = data;
                return (
                    <>
                        <tr>
                        <td><img src={avatar_url} /></td>
                            <td>{ login}</td>
                            <td>{ type}</td>
                            <td>{ repo_url}</td></tr>
                    </>
                )
            })}

        </table>
    )
  }
}
