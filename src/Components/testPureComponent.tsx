import React from 'react';


class TestPureComponent extends React.PureComponent<{}, { count: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillUpdate(nextProps: any, nextState: any) {
        console.log('Pure Component WillUpdate')
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log('Pure Component DidUpdate')
    }

    render() {
        return (
            <div >
                {this.state.count}
                <br />
                Pure Component:
                <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
            </div>
        );
    }
}
export default TestPureComponent;