import { Slide } from "spectacle";

export default class TimedSlide extends Slide{
	componentDidMount() {
		super.componentDidMount();

		if (this.props.showFor > 0) {
			this.state.timer = window.setTimeout(() => {
				const btns = document.querySelectorAll('button');
				btns[btns.length - 1].click();
			}, this.props.showFor);
		}
	}

	componentWillUnmount() {
		window.clearTimeout(this.state.timer);
	}
}
