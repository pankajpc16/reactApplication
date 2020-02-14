import React, { Component } from 'react';
class Counter extends Component {

    state={
        count:1,
        imageUrl:'https://picsum.photos/200',
        tags:['tag1','tag2','tag3']
    }
    styles={
        fontSize:20
    }
    render() {
    
        return (
            <div className="container">
                {/* <span style={this.styles} className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button style={{fontSize:30}} className="btn btn-secondary btn-sm">Increment</button> */}
                <ul>
        {this.state.tags.map(tag_1 => <li key={tag_1}>{tag_1}</li>)}
                </ul>
            </div>
        );
    }

    // getBadgeClass() {
    //     let classes = "badge m-2";
    //     classes += this.state.count === 0 ? " badge-warning" : " badge-primary";
    //     return classes;
    // }

    // formatCount(){
    //     const {count}=this.state;
    //     return count === 0 ? "Zero": count;
    // }
}

export default Counter;