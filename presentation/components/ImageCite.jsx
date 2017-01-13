import React from "react";

import { Link } from "spectacle";

export default class ImageCite extends React.Component {

	render() {
		return (
			<Link href={this.props.href} style={{ display: "none" }}>
				{ this.getHostname(this.props.href) }
			</Link>
		);
	}

	getHostname(url) {
		const a = document.createElement("a");
		a.href = url;

		return a.hostname;
	}
}

ImageCite.propTypes = {
	href: React.PropTypes.string.isRequired
};
