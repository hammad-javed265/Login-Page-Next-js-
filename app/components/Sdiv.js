"use client";
import React from 'react';

class Sdiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { id, title, children } = this.props;
    const { expanded } = this.state;

    return (
      <div
        id={id}
        className={`bg-[#1E6A8E] text-white p-4 w-full sm:w-full md:w-[46%] lg:w-[30.9%] xl:w-[31.4%] ml-6 mt-6 relative ${expanded ? 'expanded' : ''} opacity-80`}
        style={{ height: expanded ? '87%' : '300px', width: expanded ? '97%' : '', position: expanded ? 'fixed' : '', zIndex: expanded ? '999' : '', opacity: expanded ? '1' : '' }}
      >
        {/* <div className='border-b-2 border-white pt-6'> */}
          <div className="absolute top-2 right-4 mt-2 mr-2" onClick={this.toggleExpand}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className='cursor-pointer'>
              <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="absolute top-2 left-4">
            <p className="text-lg font-bold">{title}</p>
          </div>
        {/* </div> */}
        {children}

      </div>
    );
  }
}

export default Sdiv;