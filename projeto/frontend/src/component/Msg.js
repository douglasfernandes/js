import React from 'react'
import Time from 'react-time'

export const InComing = (props) => {
    let now = new Date()
    return (
        <div class="incoming_msg">
            <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                        <p>{props.msg}</p>
                        <span class="time_date"> 
                            <Time value={now} format="HH:mm:ss" /> | <Time value={now} format="DD/MM/YYYY" />
                        </span></div>
                </div>
            </div>
        </div>
    )
}

export const OutComing = (props) => {
    let now = new Date()
    return (
        <div class="outgoing_msg">
            <div class="sent_msg">
                <p>{props.msg}</p>
                <span class="time_date"> 
                    <Time value={now} format="HH:mm:ss" /> | <Time value={now} format="DD/MM/YYYY" />
                </span>
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