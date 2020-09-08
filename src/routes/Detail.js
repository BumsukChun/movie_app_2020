import React from 'react'

// function Detail(props) {
//    console.log(props);
//    return <span>hello</span>;
//  }

// 생명주기 함수를 사용하기 위해 클래스형으로 변경
class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state == undefined){
            history.push('/'); // go to Home
        }
    }

    render() {
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null; // null 반환 후 componentDidMount() 동작
        }
    }
}


export default Detail;