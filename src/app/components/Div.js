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
    const { id, title, children, length } = this.props;
    const { expanded } = this.state;
    return (
      <div
        id={id}
        className={`bg-[#1E6A8E] text-white p-4 w-full sm:w-full md:w-[46%] ${length} ml-6 mt-6 relative ${expanded ? 'expanded' : ''} opacity-80`}
        style={{ height: expanded ? '87%' : '300px', width: expanded ? '97%' : '', position: expanded ? 'fixed' : '', zIndex: expanded ? '999' : '', opacity: expanded ? '1' : '' }}
      >
        <div
          className="absolute top-2 right-4 mt-2 mr-2 cursor-pointer" onClick={this.toggleExpand}>
          <FontAwesomeIcon icon={faExpand} />
        </div>
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
