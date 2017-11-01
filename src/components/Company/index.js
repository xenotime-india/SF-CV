import React from 'react';
import './style.scss';
import Project from './../Project';

class Company extends React.Component {

  render() {
    const { projects, info } = this.props;
    console.log(this.props);
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <div className="page-sections">

        <div className="info-section">
          <h5 className="no-bottom-margin sub-heading designation">{info.title}</h5>
          <h6 className="no-bottom-margin sub-heading-0">{info.name}</h6>
          <div className="sub-heading-1 block-left">{info.date}</div>
          <div className="sub-heading-1 block-right">{info.location}</div>
          <div className="clear-fix"></div>
        </div>


        <ul className="project">
          {
            projects.map((project, i) => {
              return <li key={i} >
                <Project {...project.file}/>
              </li>;
            })
          }
        </ul>
      </div>
    )
  }
}

export default Company
