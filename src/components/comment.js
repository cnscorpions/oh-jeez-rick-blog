import React from "react";
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css'

const Comment = () => (
	<GitalkComponent options={{
		clientID: "0c3c97f6ad71b3e27520",
		clientSecret: "477badce0ad0847d26ccb74c1ec1c2deca618b0e",
		repo: "https://github.com/cnscorpions/oh-jeez-rick-blog",
		owner: "cnscorpions",
		admin: ["cnscorpions"]
	}} />	
);

export default Comment;