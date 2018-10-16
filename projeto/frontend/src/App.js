import React, { Component } from 'react';
import './App.css';
import Celula from './component/chat_list active_chat.js';
import Msg from './component/Msg';

class App extends Component {
  render() {
    return (
      <div class="container">
        <h3 class=" text-center">Messaging</h3>
        <div class="messaging">
              <div class="inbox_msg">
                <div class="inbox_people">
                  <div class="headind_srch">
                    <div class="recent_heading">
                      <h4>Recent</h4>
                    </div>
                    <div class="srch_bar">
                      <div class="stylish-input-group">
                        <input type="text" class="search-bar"  placeholder="Search" />
                        <span class="input-group-addon">
                        <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                        </span> </div>
                    </div>
                  </div>
                  <div class="inbox_chat">

                    <Celula nome='Sunil 1'/>
                    <Celula nome='Sunil 2'/>
                    <Celula nome='Sunil 3'/>

                  </div>
                </div>
                <div class="mesgs">
                  <div class="msg_history">
                  <Msg type='in' msg='Uma msg in 1'/>
                  <Msg type='out' msg='Uma msg out 1'/>
                  <Msg type='out' msg='outro out'/>

                  </div>

                  <div class="type_msg">
                    <div class="input_msg_write">
                      <input type="text" class="write_msg" placeholder="Type a message" />
                      <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </div>
                  </div>
                  
                </div>
              </div>

              <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>
              
      </div></div>
    );
  }
}

export default App;
