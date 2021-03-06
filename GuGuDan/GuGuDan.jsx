import React, { Component, } from 'react'

class GuGuDan extends Component {
    // constructor(props) { 실무에서는 constructor 잘 안 쓴다고 한다
        // super(props)
        // this.state = {
        state = {
            first : Math.ceil(Math.random() * 9),
            second : Math.ceil(Math.random() * 9),
            value : '',
            result: '',
        }
    // }
    // } 
    onSubmit = (e) => { // 메소드의 경우 function으로 쓰면 this가 달라진다. 그래서 ()=> 로 !! 
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState((prevState) => { // 이전 state 을 사용할 경우 함수로 만들어 이전값을 사용 가능하다 
                return {                   // this.state 가 setState 객체 안에 들어갈때는 함수로 쓰는걸로 
                    first : Math.ceil(Math.random() * 9),
                    second : Math.ceil(Math.random() * 9),
                    value : '',
                    result: '정답:'+ prevState.value //(this.state.value)
                }
            })
            this.input.focus();
        } else {
            this.setState({
                value : '',
                result: '땡떙떙',
            });
            this.input.focus();
        }
    }
    onChange = (e) => {
        this.setState({value : e.target.value})
    }
    onRefInput = (c) => {this.input = c}

    input; // "input, 위 ref의  this."input"과 위 this."input".focus()이 같으면 된다.

    render() {
        // setState 할때마다 render() 함수가 실행됩니다.
        return (
            // <React.Fragment> = <></> , <></> 은 현재 바벨 버전에서 지원을 하지않아 <React.Fragment>로 작업
            <React.Fragment> 
                <div>{this.state.first} 곱하기 {this.state.second} 는 ?</div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="number" 
                        value={this.state.value} 
                        onChange={this.onChange}
                        ref={this.onRefInput}   // 돔에 직접 접근 하고 싶을때 
                    />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </React.Fragment>
        )

    }
}

export default GuGuDan
// module.exports = GuGuDan;