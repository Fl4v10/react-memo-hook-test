import React from 'react';


class TestClassComponent extends React.Component<{}, { count: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log('Component componentWillUpdate')
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log('Component componentDidUpdate')

    }
    render() {
        return (
            <div >
                {this.state.count}
                <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
            </div>
        );
    }
}
export default TestClassComponent;