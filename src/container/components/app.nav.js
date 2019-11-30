import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HOME = 'app_HOME';

export default function AppNavTop(props) {
  return (
    <nav className='App-TopNav navbar navbar-dark fixed-top d-flex align-items-center justify-content-between'>
      <div
        className='media App-TopNav-Home w-media-topnav'
        onClick={e => props.changeState({ active: HOME })}
      >
        {/* <i className='fab fa-react align-self-center' /> */}
        <FontAwesomeIcon
          icon={['fas', 'keyboard']}
          className='align-self-center'
          size='lg'
        />
        <div className='media-body'>
          <p className='m-0 w-media-margin w-media-title'>John Desjardins</p>
        </div>
      </div>
      <div className='App-TopNav-Right d-flex flex-row-reverse' />
    </nav>
  );
}
