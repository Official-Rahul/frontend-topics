import React, { Component } from 'react'

export class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = { 
            buttonText: 'Click me!',
            data:[]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('https://run.mocky.io/v3/344bd879-8bad-4a02-b5d6-173e8c8e1af0')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res
                })
            })
    }
    
    handleClick(){
        this.setState({
            buttonText:'I am clicked!'
        })
    }

    render() {
        const {buttonText,data}=this.state;
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <ul>
                    {data.map(entry=>(
                        <li key={entry.title}>{entry.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ButtonComponent
