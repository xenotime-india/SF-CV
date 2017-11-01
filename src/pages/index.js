import React from 'react'
import get from 'lodash/get'

import Header from '../components/Header';
import Project from '../components/Project';
import Page1LeftPanel from '../components/Page1LeftPanel';
import Page2LeftPanel from '../components/Page2LeftPanel';
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')
    const projects = get(this, 'props.data.projects.files')
    const skills = get(this, 'props.data.jsonSkillData.skills')
    const info = get(this, 'props.data.jsonInfoData.infos')
    const certifications = get(this, 'props.data.jsonCertificationsCert.certifications')

    console.log(certifications);
    return (
      <div className="wrapper">
        <Helmet
          title={get(site, 'title')}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: `@${get(site, 'twitter')}` },
            { property: 'og:title', content: get(site, 'title') },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: get(site, 'description') },
            { property: 'og:url', content: get(site, 'url') },
            {
              property: 'og:image',
              content: `${get(site, 'url')}/img/profile-pic.jpg`,
            },
          ]}
        />
        <div className="container body-container">
          <div className="row-container page">
            <Page1LeftPanel skills={skills} infos={info}/>
            <div className="right-col">
              <Header/>
              <div className="resume-main-content">
                <div className="main-heading">

                  <h2 className=""><span className="icon"><i className="fa fa-briefcase" aria-hidden="true"></i></span><span
                    className="heading-text">Work Experience</span></h2>
                </div>

                <div className="page-sections">

                  <div className="info-section">
                    <h5 className="no-bottom-margin sub-heading designation">Principle Consultant</h5>
                    <h6 className="no-bottom-margin sub-heading-0">Appirio India Private Limited</h6>
                    <div className="sub-heading-1 block-left">12/2013 – Present</div>
                    <div className="sub-heading-1 block-right">Jaipur, India</div>
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
              </div>
            </div>
          </div>
          <div className="row-container page">
            <Page2LeftPanel certifications={certifications}/>
            <div className="right-col">
              <div className="resume-main-content">
                <div className="page-sections">

                  <div className="info-section">
                    <h5 className="no-bottom-margin sub-heading designation">Principle Consultant</h5>
                    <h6 className="no-bottom-margin sub-heading-0">Appirio India Private Limited</h6>
                    <div className="sub-heading-1 block-left">12/2013 – Present</div>
                    <div className="sub-heading-1 block-right">Jaipur, India</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
        twitter
      }
    }
    jsonSkillData: allSkillsJson {
      skills:edges {
        skill:node {
          rating
          skillName
        }
      }
    }
    jsonInfoData: allInfoJson {
      infos:edges {
        info:node {
          string
          type
          link
          icon
        }
      }
    }
    jsonCertificationsCert: allCertificationsJson {
      certifications:edges {
        certification:node {
          string
          link
          icon
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(src/docs/projects)//i"}}
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      files: edges {
        file: node {
          html
          fileAbsolutePath
          frontmatter {
            order
            url
            company
            companySiteUrl
          }
        }
      }
    }
  }
`
