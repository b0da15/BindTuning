
'use strict';

const AboutContent = React.createClass({
  render() {
    return (
    	<div className="content-container">
      	<div className="content about-page">
      		<h1 className="heading">About</h1>
      		<p className="about-content">The HackerNews site is created using <a href="https://github.com/HackerNews/API">API</a> provided by <a href="https://github.com/HackerNews">HackerNews</a>.
      		</p>

      		<h1 className="heading">Contributor</h1>
      		<p className="about-content"><a href="http://pedrohenriqueribeiro.wepulsedigital.pt/">Pedro Ribeiro</a></p>

	     	</div>
      </div>
    );
  }
});

module.exports = AboutContent;