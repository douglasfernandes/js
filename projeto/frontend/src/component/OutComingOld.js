import React, { Component } from 'react'

class OutComing extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div class="outgoing_msg">
            <div class="sent_msg">
                <p>{this.props.msg}</p>
                <span class="time_date"> 11:01 AM    |    June 9</span>
             </div>
        </div>
    };
};

export default OutComingOld;
