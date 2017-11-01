import React from 'react';
import './style.scss';
import Rating from './../Rating';
import Info from './../Info';

class LeftPanel extends React.Component {

  render() {
    const { skills, infos } = this.props;
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <div className="left-col">
        <img
          src={pathPrefix + '/img/profile-pic.jpg'}
          alt="user-pic"
          className="img-circle"
        />

        <div className="info-col">
          <ul>
            {
              infos.map((data, i) => {
                return <li key={i}><Info {...data.info}/></li>
              })
            }
          </ul>
        </div>

        <div className="skill-container">
          <div className="main-heading">
            <h2 className="">
              <span className="heading-text">Skills</span>
            </h2>
          </div>
          {
            skills.map((data, i) => {
              return <Rating {...data.skill} key={i}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default LeftPanel
