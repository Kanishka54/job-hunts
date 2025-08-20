import React, { useContext } from 'react'
import {Context} from "../../main.jsx"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Kanishka.</div>
<div>
  <Link to={'https://github.com/Kanishka54'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/Kanishka5__/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'www.linkedin.com/in/kanishka-bhutani-082934204'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
 
</div>
      
    </footer>
  )
}

export default Footer