import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Aldo'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Aldo'
            })
        }, 2000)
    }

    render() {
        console.log('***************************Parent component rendered***********************************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/*<RegularComp name={this.state.name}/>*/}
                {/*<PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComp
