// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	BlockQuote,
	Cite,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Markdown,
	Quote,
	Slide,
	Spectacle,
	Text
} from "spectacle";

import ImageCite from './components/ImageCite.jsx';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
	city: require("../assets/city.jpg"),
	kat: require("../assets/kat.png"),
	logo: require("../assets/formidable-logo.svg"),
	markdown: require("../assets/markdown.png"),

	dir890l: require("../assets/dir-890l.jpg"),
	f117a: require("../assets/f117a.jpg"),
	f117b: require("../assets/f117b.jpg"),
	rt5300u: require("../assets/asus-rt-ac5300u.png"),
	charger: require("../assets/charging_phone.png"),
	smartTv: require("../assets/smart_tv.jpg"),
	tvSticks: require("../assets/tv_sticks.jpg"),
	vr: require("../assets/vr.jpg"),
	ar: require("../assets/ar.jpg"),
	"4k": require("../assets/4k.jpg"),
	drone: require("../assets/drone.jpg"),
	funDrone: require("../assets/drones-fun.jpg"),
	profitDrone: require("../assets/profit-drone.jpg"),
	chatbot: require("../assets/chatbot.jpg"),
	industry: require("../assets/industry.jpg"),
	dataAnalytics: require("../assets/data-analytics.jpg"),
	smartCylinder: require("../assets/smart-cylinder.jpg"),
	lightbulb: require("../assets/lightbulb.jpg"),
	mirai: require("../assets/mirai.jpg"),
	ml: require("../assets/ml.png"),
	ai: require("../assets/AI.jpg"),
	car: require("../assets/car.jpg"),
	magic: require("../assets/magic-trick.jpg")
};

preloader(images);

const theme = createTheme({
	primary: "#000",
	secondary: "#fff"
});
window.theme = theme;
theme.screen.components.quote.color = theme.screen.colors.secondary;
theme.screen.components.quote.borderColor = theme.screen.components.quote.color;

export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["slide", "fade"]} transitionDuration={500}>
					<Slide>
						<Heading fit caps>
							2017 Tech Trends
						</Heading>
						<Heading fit caps>
							You Need to Know
						</Heading>
					</Slide>
					<Slide>
						<Heading caps>
							You Won't Believe These 2017 Tech Trends Aren't What They Want You To Think They Are
						</Heading>
					</Slide>
					<Slide notes="You can even put notes on your slide. How awesome is that?">
						<Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
						<Heading caps fit>
							Wait what?
						</Heading>
					</Slide>
					<Slide>
						<Heading fit caps>
							Stealth Bomber?
						</Heading>
						<Heading fit caps>
							Or Wi-Fi Router?
						</Heading>
					</Slide>
					<Slide bgImage={images.f117a.replace("/", "")}>
						<ImageCite href="https://www.cybermodeler.com/aircraft/f-117/f-117_gallery.shtml" />
					</Slide>
					<Slide bgImage={images.dir890l.replace("/", "")}>
						<ImageCite href="http://ca.dlink.com/products/connect/wireless-ac3200-tri-band-gigabit-router/" />
					</Slide>
					<Slide bgImage={images.f117b.replace("/", "")}>
						<ImageCite href="http://www.airforceworld.com/fighter/eng/f11702.htm" />
					</Slide>
					<Slide bgImage={images.rt5300u.replace("/", "")}>
						<ImageCite href="http://www.theverge.com/2015/9/2/9238057/asus-rt-ac5300u-triband-wireless-router-ifa-2015" />
					</Slide>
					<Slide bgImage={images.charger.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps>
							Wireless Charging
						</Heading>
						<ImageCite href="http://www.technobuffalo.com/2015/06/23/your-qi-wireless-charger-is-going-to-get-a-lot-faster/" />
					</Slide>
					<Slide bgImage={images.smartTv.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps padding="0 0 100% 0">
							Smart TVs
						</Heading>
						<ImageCite href="http://www.samsung.com/us/experience/smart-tv/" />
					</Slide>
					<Slide bgImage={images.tvSticks.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps>
							TV Sticks
						</Heading>
						<ImageCite href="http://www.iphonehacks.com/2014/04/apple-tv-amazon-fire-tv-chromecast.html" />
					</Slide>
					<Slide bgImage={images["4k"].replace("/", "")} bgDarken={0.25}>
						<Heading textSize="8em" caps>
							4K
						</Heading>
						<ImageCite href="http://hdwallpapershdpics.com/download-4k-ultra-hd-wallpapers/" />
					</Slide>
					<Slide bgImage={images.vr.replace("/", "")} bgDarken={0.25}>
						<Heading caps textSize="8em">
							VR
						</Heading>
						<ImageCite href="http://venturebeat.com/2016/05/11/oculus-and-samsung-have-1m-gear-vr-wearing-users/" />
					</Slide>
					<Slide bgImage={images.ar.replace("/", "")} bgDarken={0.25}>
						<Heading caps textSize="8em">
							AR
						</Heading>
						<ImageCite href="http://www.gamespot.com/images/1300-2787338/" />
					</Slide>
					<Slide bgImage={images.drone.replace("/", "")} align="center flex-end" bgDarken={0.25}>
						<Heading caps textSize="8em">
							Drones
						</Heading>
						<ImageCite href="http://www.mwananchi.co.tz/habari/1597578-3392092-vcyjjxz/index.html" />
					</Slide>
					<Slide bgImage={images.funDrone.replace("/", "")} align="flex-start flex-start" bgDarken={0.25}>
						<Heading caps textSize="6em" padding="0 50% 0 0">
							For Fun
						</Heading>
						<ImageCite href="http://www.mikecoleart.com/wp-content/uploads/2016/10/drones-fun.jpg" />
					</Slide>
					<Slide bgImage={images.profitDrone.replace("/", "")} align="center flex-end" bgDarken={0.25}>
						<Heading caps textSize="6em">
							And Profit
						</Heading>
						<ImageCite href="https://www.technologyreview.com/s/602527/delivery-option-drone-arrival-estimate-2020/" />
					</Slide>
					<Slide bgImage={images.ml.replace("/", "")} bgDarken={0.25}>
						<Heading caps textSize="6em">
							AI and ML
						</Heading>
						<ImageCite href="http://microexplosion.com/wp-content/uploads/2015/01/magic-trick.jpg"></ImageCite>
					</Slide>
					<Slide bgImage={images.magic.replace("/", "")} align="flex-start flex-end" bgDarken={0.25}>
						<BlockQuote>
							<Quote textColor="white">Any sufficiently advanced technology is indistinguishable from magic.</Quote>
							<Cite>Arthur C. Clarke</Cite>
						</BlockQuote>
						<ImageCite href="https://www.extremetech.com/wp-content/uploads/2016/01/movidius-machine-intelligence.png"></ImageCite>
					</Slide>
					<Slide bgImage={images.ai.replace("/", "")} bgDarken={0.25}>
						<Heading caps fit>
							Realistic Expectations
						</Heading>
						<ImageCite href="http://www.iqworkforce.com/wp-content/uploads/2015/11/AI.jpg"></ImageCite>
					</Slide>
					<Slide bgImage={images.smartCylinder.replace("/", "")} bgDarken={0.25} align="flex-start">
						<Heading caps textSize="3.5em" textAlign="right">
							Virtual
						</Heading>
						<Heading caps textSize="3.5em" textAlign="right">
							Assistants
						</Heading>
						<ImageCite href="http://www.roboticstrends.com/article/google_home_vs._amazon_echo_which_personal_assistant_is_better" />
					</Slide>
					<Slide bgImage={images.car.replace("/", "")} align="center flex-start" bgDarken={0.25}>
						<Heading caps textSize="3.5em">
							Self-driving Cars
						</Heading>
						<ImageCite href="http://techzulu.com/wp-content/uploads/2016/07/141002-self-driving-car-02_f124b0329691bfb4519f2108e0a10427.jpg" />
					</Slide>

					{/*<Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
						<CodePane
							lang="jsx"
							source={require("raw!../assets/deck.example")}
							margin="20px auto"
						/>
					</Slide>
					<Slide bgImage={images.city.replace("/", "")} bgDarken={0.75}>
						<Appear fid="1">
							<Heading size={1} caps fit textColor="primary">
								Full Width
							</Heading>
						</Appear>
						<Appear fid="2">
							<Heading size={1} caps fit textColor="tertiary">
								Adjustable Darkness
							</Heading>
						</Appear>
						<Appear fid="3">
							<Heading size={1} caps fit textColor="primary">
								Background Imagery
							</Heading>
						</Appear>
					</Slide>
					<Slide bgColor="primary">
						<Heading caps fit>Flexible Layouts</Heading>
						<Layout>
							<Fill>
								<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
									Left
								</Heading>
							</Fill>
							<Fill>
								<Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
									Right
								</Heading>
							</Fill>
						</Layout>
					</Slide>
					<Slide bgColor="black">
						<BlockQuote>
							<Quote>Wonderfully formatted quotes</Quote>
							<Cite>Ken Wheeler</Cite>
						</BlockQuote>
					</Slide>
					<Slide bgColor="tertiary">
						<Heading caps fit size={1} textColor="primary">
							Inline Markdown
						</Heading>
						<Markdown>
							{`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
							`}
						</Markdown>
					</Slide>
					<Slide bgColor="primary">
						<Heading caps fit size={1} textColor="tertiary">
							Smooth
						</Heading>
						<Heading caps fit size={1} textColor="secondary">
							Combinable Transitions
						</Heading>
					</Slide>
					<Slide bgColor="secondary" textColor="primary">
						<List>
							<Appear><ListItem>Inline style based theme system</ListItem></Appear>
							<Appear><ListItem>Autofit text</ListItem></Appear>
							<Appear><ListItem>Flexbox layout system</ListItem></Appear>
							<Appear><ListItem>React-Router navigation</ListItem></Appear>
							<Appear><ListItem>PDF export</ListItem></Appear>
							<Appear><ListItem>And...</ListItem></Appear>
						</List>
					</Slide>
					<Slide bgColor="primary">
						<Heading size={1} caps fit textColor="tertiary">
							Your presentations are interactive
						</Heading>
						<Interactive/>
					</Slide>
					<Slide bgColor="tertiary">
						<Heading size={1} caps fit lineHeight={1.5} textColor="primary">
							Made with love in Seattle by
						</Heading>
						<Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
					</Slide>*/}

					<Slide bgImage={images.chatbot.replace("/", "")} bgDarken={0.25} align="center flex-start">
						<Heading fit caps>
							Chatbots
						</Heading>
						<ImageCite href="http://www.ibtimes.com/mark-zuckerberg-opens-facebook-messenger-third-party-apps-allowing-users-send-gifs-1859124" />
					</Slide>
					<Slide>
						<BlockQuote>
							<Quote>AI is whatever hasn't been done yet.</Quote>
							<Cite>Tesler's Theorem</Cite>
						</BlockQuote>
					</Slide>

					<Slide bgImage={images.industry.replace("/", "")} bgDarken={0.25} notes="Factories, warehouses, and farms">
						<Heading fit caps>
							Industry
						</Heading>
						<ImageCite href="http://www.costmanagement.eu/industries" />
					</Slide>
					<Slide bgImage={images.dataAnalytics.replace("/", "")} bgDarken={0.25}>
						<Heading caps textSize="8em" textAlign="right">
							Data
						</Heading>
						<ImageCite href="http://ise.illinois.edu/research/data-analytics.html" />
					</Slide>
					<Slide bgImage={images.smartCylinder.replace("/", "")} bgDarken={0.25} align="flex-start">
						<Heading caps textSize="4em" textAlign="right">
							Smart
						</Heading>
						<Heading caps textSize="4em" textAlign="right">
							Cylinders
						</Heading>
						<ImageCite href="http://www.roboticstrends.com/article/google_home_vs._amazon_echo_which_personal_assistant_is_better" />
					</Slide>
					<Slide bgImage={images.lightbulb.replace("/", "")} bgDarken={0.25} align="center flex-end">
						<Heading fit caps>
							Smart Home
						</Heading>
						<ImageCite href="http://www.philips.de/a-w/about/news/archive/standard/news/consumerlifestyle/20130710_Vierseitiges_Ambilight_und_Hue_erweitern_das_Philips_Fernseherlebnis.html" />
					</Slide>
					<Slide bgImage={images.mirai.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps>
							Security
						</Heading>
						<ImageCite href="http://mydirectsecurity.com/" />
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}
