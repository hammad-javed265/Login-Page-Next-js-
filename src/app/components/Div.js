"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

class Div extends React.Component {
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
    const { id, title, children, length, child1, heig } = this.props;
    const { expanded } = this.state;
    return (
      <div
        id={id}
        className={`bg-[#0A2357] text-white p-4 w-full sm:w-full md:w-[46%]  max-sm:ml-0 ml-6 mt-6 relative ${expanded ? 'expanded' : '', expanded ? 'h-[87%]' : `h-[${heig}]`} opacity-80 ${length} ${heig}`}
        style={{
          width: expanded ? '97%' : '',
          position: expanded ? 'fixed' : '',
          zIndex: expanded ? '999' : '',
          opacity: expanded ? '1' : '',
          boxShadow: 'inset 0 0 20px 10px rgb(1, 88, 189)', // Add inner box shadow when expanded
        }}
      >
        <>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset 5px 5px 4px -1px #02F1F5'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset -5px 5px 4px -1px #02F1F5'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset 5px -5px 4px -1px #02F1F5'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '35px',
              height: '20px',
              boxShadow: 'inset -5px -5px 4px -1px #02F1F5'
            }}
          ></div>
        </>
        <div
          className="absolute top-2 right-4 mt-2 mr-2 cursor-pointer" onClick={this.toggleExpand}>
          <FontAwesomeIcon icon={faExpand} />
        </div>
        {child1}
        <div
          className="absolute top-2 left-4">
          <p
            className="text-lg font-bold">
            {title}
          </p>
        </div>
        {children}
      </div>
    );
  }
}

export default Div
