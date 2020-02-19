/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import twitterIcon from "../../content/assets/twitter.png"
import githubIcon from "../../content/assets/github.png"
import componentStyle from "./components.module.css";
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in China as a
        web developer building useful things.
        {` `}
        <a className={ componentStyle.resetLink } href={`https://twitter.com/${social.twitter}`} target="_blank">
          <img src={twitterIcon} style={{ width: "32px" }} />
        </a>
        <a className={ componentStyle.resetLink } href={`https://github.com/${social.github}`} target="_blank">
          <img src={githubIcon} style={{ width: "32px" }} />
        </a>
      </p>
    </div>
  )
}

export default Bio