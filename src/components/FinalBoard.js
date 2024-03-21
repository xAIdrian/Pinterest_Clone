import React from 'react';
import RandomPin from './RandomPin.js';
import Pin from './Pin.js';
import Modal from './Modal.js';
import OpenPin from './OpenPin.js';
import Header from './Header';
import { Guidelines, FinalBoardSteps } from './Guidelines.js';
import LoadingIcon from './LoadingIcon';
import ReactJoyride from 'react-joyride';
import { deletePinBackend, fetchPinsBackend } from '../firebase_setup/DatabaseOperations.js';
import { Tooltip } from 'antd';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

import '../styles/final_board_styles.css';

import autoAnimate from '@formkit/auto-animate';
import { useState } from 'react';

class FinalBoard extends React.Component {


  constructor(props) {
    super(props);
    this.animate = React.createRef();

    this.state = {
      pinsFromDb: [],
      pinsToShow: [],
      show_modal: false,
      show_open_pin: false,
      show_guidelines: false,
      show_loading: false,
      show_dialog: false,
    };

    this.containerStyle = {
      fontFamily: 'Arial, sans-serif',
    };
  
    this.boxStyle = {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '16px',
      padding: '20px',
    };
  
    this.titleStyle = {
      color: '#333',
      fontSize: '24px',
      margin: '0 0 10px 0',
    };
  
    this.descriptionStyle = {
      color: '#666',
      fontSize: '16px',
      margin: '0',
    };
  }

  componentDidMount() {
    this.fetchPins();
    this.animate.current && autoAnimate(this.animate.current);
  }

  fetchPins = async () => {
    let pinsArray = [];
    let fetchedPins = await fetchPinsBackend().catch((error) => console.error(error));
    fetchedPins.forEach((p) => {
      pinsArray.push(<Pin pinDetails={p} key={p.id} openPin={this.openPin} deletePin={this.deletePin} />);
    });
    this.setState((_state) => {
      return {
        ..._state,
        pinsFromDb: pinsArray,
        pinsToShow: pinsArray,
      };
    });
  };

  refreshPins = async () => {
    this.setState({ show_modal: false });
    await this.fetchPins();
  };

  openPin = (pinDetails) => {
    this.pinDetails = pinDetails;
    this.setState({ show_open_pin: true });
  };

  deletePin = async (pinDetails) => {
    //todo: add loading mode and/or transition state (blur the pin, fade it out etc)
    await deletePinBackend(pinDetails);
    await this.fetchPins();
    this.setState({ show_open_pin: false });
  };

  generateRandomPin = async (event) => {
    this.setState({ show_loading: true });
    await RandomPin(event);
    await this.fetchPins();
    this.setState({ show_loading: false });
  };

  filterPins = (filteredPins) => {
    this.setState({ pinsToShow: filteredPins });
  };

  render() {
    return (
      <div style={{ overflow: 'hidden' }} ref={this.windowRef}>
        <Popup
          trigger={<button className="button"> Get My Content! </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <h1> From Your Creators Today </h1>
              <strong>Click the content you like and we'll create content for you</strong>
              <div className="content">
                <div style={this.containerStyle}>
                  <div style={this.boxStyle} onClick={close}>
                    <h2 style={this.titleStyle}>The Manipulation Expert: You're Being Manipulated! Use Jealousy To Manipulate People! Robert Greene</h2>
                    <p style={this.descriptionStyle}>Robert Greene is a New York Times bestselling author, whose books include, ‘The 48 Laws of Power’, ’The Art of Seduction’, and ’The 33 Strategies of War’.</p>
                    <h3>The Diary of a CEO</h3>
                  </div>
                  <div style={this.boxStyle} onClick={close}>
                    <h2 style={this.titleStyle}>watch this if you feel lost in life</h2>
                    <p style={this.descriptionStyle}>Why does life need to be meaningful?  It doesn't a lot of gold metal athletes are depressed right after they win the gold because like, "now what?"</p>
                    <h3>Alex Hormozi</h3>
                  </div>
                  <div style={this.boxStyle} onClick={close}>
                    <h2 style={this.titleStyle}>How to Differentiate Yourself With Marketing</h2>
                    <p style={this.descriptionStyle}>Original content. I would start a podcast, a twitch steam.  You know, just showing you standing at work all day doing what you do best. Content, content, content, content, content.</p>
                    <h3>Gary V</h3>
                  </div>
                  <div style={this.boxStyle} onClick={close}>
                    <h2 style={this.titleStyle}>The Ultimate Social Media Marketing Strategy</h2>
                    <p style={this.descriptionStyle}>Doing what you love doing is one thing but getting paid to market is something entirely new in the 21st century.  Here's how you can make millions with your mouth.</p>
                    <h3>Gary V</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>
        <div class='header_container' id='header_bar'>
          <Header pinsToFilter={this.state.pinsFromDb} filterPins={this.filterPins} />
        </div>
        <div className='navigation_bar' id='navigation_bar'>
          <Tooltip title='Add new Pin'>
            <div onClick={() => this.setState({ show_modal: true })} className='pint_mock_icon_container' id='add_pin'>
              <img src='./images/add.png' alt='add_pin' className='pint_mock_icon' />
            </div>
          </Tooltip>
          <Tooltip title='Generate random Pin'>
            <div onClick={(event) => this.generateRandomPin(event)} className='pint_mock_icon_container add_pin'>
              <img src='./images/shuffle.png' alt='random' className='pint_mock_icon' />
            </div>
          </Tooltip>
          <Tooltip title='Refresh Pins'>
            <div onClick={() => this.refreshPins()} className='pint_mock_icon_container add_pin'>
              <img src='./images/refresh.png' alt='refresh' className='pint_mock_icon' />
            </div>
          </Tooltip>
          <Tooltip title='Show guidelines'>
            <div onClick={() => this.setState({ show_guidelines: true })} className='pint_mock_icon_container add_pin'>
              <img src='./images/help.png' alt='help' className='pint_mock_icon' />
            </div>
          </Tooltip>
        </div>
        <div className='pin_container' ref={this.animate} id='pin_container'>
          {this.state.pinsToShow}
        </div>
        <div onClick={(event) => (event.target.className === 'add_pin_modal' ? this.setState({ show_modal: false }) : null)} className='add_pin_modal_container'>
          {this.state.show_modal ? <Modal refreshPins={this.refreshPins} /> : null}
        </div>
        <div onClick={(event) => (event.target.className === 'open_pin_modal' ? this.setState({ show_open_pin: false }) : null)} className='open_pin_modal_container'>
          {this.state.show_open_pin ? <OpenPin pinDetails={this.pinDetails} deletePin={this.deletePin} /> : null}
        </div>
        <div onClick={(event) => (event.target.className === 'guidelines_modal' ? this.setState({ show_guidelines: false }) : null)} className='guidelines_modal_container'>
          {this.state.show_guidelines ? <Guidelines /> : null}
        </div>
        {this.state.show_loading ? <LoadingIcon /> : null}
        <ReactJoyride
          continuous
          hideCloseButton
          scrollToFirstStep
          disableScrolling={true}
          showProgress
          showSkipButton
          steps={FinalBoardSteps}
          styles={{
            options: {
              primaryColor: '#ff0400',
              textColor: '#004a14',
              zIndex: 1000,
            },
          }}
        />
      </div>
    );
  }
}

export default FinalBoard;
