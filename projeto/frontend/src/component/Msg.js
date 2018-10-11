import React from 'react'

export const InComing = (props) => {
    return (
        <div class="incoming_msg">
            <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                        <p>{props.msg}</p>
                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                </div>
            </div>
        </div>
    )
}

export const OutComing = (props) => {
    return (
        <div class="outgoing_msg">
            <div class="sent_msg">
                <p>{props.msg}</p>
                <span class="time_date"> 11:01 AM    |    June 9</span>
            </div>
        </div>
    )
}

const Msg = (props) => {
    console.log(`Msg: ${props.msg} - Type: ${props.type}`)
    switch (props.type) {
        case "in":
            return <InComing msg={props.msg}/>
        case "out":
            return <OutComing msg={props.msg}/>
        default:
            break;
    }
}

export default Msg;