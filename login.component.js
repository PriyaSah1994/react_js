import React from 'react'

export default class LoginComponent extends React.Component { // inheritence in js; must explicitely call base class constructor; called default type export; 

    // only one compononent can be exported as default but can have multiple named type export

    constructor() {
        super();
    }

    render() { // return VDOM compponent
        return (<table>
            <tr>
                <td>Username</td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td>Password </td>
                <td><input type="password" /></td>
            </tr>
            <tr>
                <td><button>Login</button></td>
                <td><button>Clear</button></td>

            </tr>
        </table>);
    }
}