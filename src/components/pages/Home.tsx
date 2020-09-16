import React, { Component } from 'react'
import { Button } from 'antd';
interface homeProps{
    state: {age: number},
    setTodo: Function,
}
class Home extends Component<homeProps, any> {
    componentDidMount() {
        console.log(this.props, 'home');
    }
    add = () => {
        let { setTodo } = this.props;
        let { age } = this.props.state;
        age+=1
        setTodo({age})
    }
    render() {
        let { age } = this.props.state;
        return (
            <React.Fragment>
                home:{`年龄${age}`}
                <Button type='primary' onClick={this.add}>add</Button>
            </React.Fragment>
        )
    }
}

export default Home
