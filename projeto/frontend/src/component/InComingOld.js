import React, { Component } from 'react'

class InComing extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div class="incoming_msg">
            <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                        <p>{this.props.msg}</p>
                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                </div>
            </div>
        </div>
    };
};

export default InComingOld;
