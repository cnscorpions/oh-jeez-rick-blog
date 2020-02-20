import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Comment extends Component {

	componentDidMount() {

		const gitalk = new Gitalk({
			clientID: "0c3c97f6ad71b3e27520",
			clientSecret: "477badce0ad0847d26ccb74c1ec1c2deca618b0e",
			repo: "https://github.com/cnscorpions/oh-jeez-rick-blog",
			owner: "cnscorpions",
			admin: ["cnscorpions"]
		});

		gitalk.render('gitalk-container')
		
	}

	render() {

		return (
			<React.Fragment>
			    <Helmet>
		        	 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css" />
  					 <script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js" />
	        	</Helmet>
	        	<div id="gitalk-container"></div>
			</React.Fragment>
		);
	}
}

export default Comment;