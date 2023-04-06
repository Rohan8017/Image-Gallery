import React from 'react';

export default function header({ setToggleDisplay, toggleDisplay,HandleToggleDisplay }) {
  return (
    <div className='header-wrapper'>
      <header>
        <div className='left-icon'>
          Image Gallery
        </div>
        <div>
          <button onClick={HandleToggleDisplay} >Change to {toggleDisplay === 'Grid' ? 'Flex' : 'grid'}</button>
        </div>
      </header>
    </div>
  )
}
