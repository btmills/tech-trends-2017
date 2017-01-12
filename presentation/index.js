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
};

preloader(images);

const theme = createTheme({
	primary: "#ff4081"
});

export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["slide", "fade"]} transitionDuration={500}>
					<Slide bgColor="primary">
						<Heading size={1} fit caps textColor="black">
							2017 Tech Trends
						</Heading>
						<Heading size={1} fit caps>
							You Need to Know
						</Heading>
					</Slide>
					<Slide>
						<Heading caps>
							You Won't Believe These 2017 Tech Trends Aren't What They Want You To Think They Are
						</Heading>
					</Slide>
					<Slide bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
						<Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
						<Heading size={2} caps fit textColor="primary" textFont="primary">
							Wait what?
						</Heading>
					</Slide>
					<Slide>
						<Heading fit caps textColor="black">
							Stealth Bomber?
						</Heading>
						<Heading fit caps>
							Or Wi-Fi Router?
						</Heading>
					</Slide>
					<Slide bgImage={images.f117a.replace("/", "")}>
						<Link href="https://www.cybermodeler.com/aircraft/f-117/f-117_gallery.shtml">
							cybermodeler.com
						</Link>
					</Slide>
					<Slide bgImage={images.dir890l.replace("/", "")}>
						<Link href="http://ca.dlink.com/products/connect/wireless-ac3200-tri-band-gigabit-router/">
							dlink.com
						</Link>
					</Slide>
					<Slide bgImage={images.f117b.replace("/", "")}>
						<Link href="http://www.airforceworld.com/fighter/eng/f11702.htm">
							airforceworld.com
						</Link>
					</Slide>
					<Slide bgImage={images.rt5300u.replace("/", "")}>
						<Link href="http://www.theverge.com/2015/9/2/9238057/asus-rt-ac5300u-triband-wireless-router-ifa-2015">
							theverge.com
						</Link>
					</Slide>
					<Slide bgImage={images.charger.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps>
							Wireless Charging
						</Heading>
						<Link href="http://www.technobuffalo.com/2015/06/23/your-qi-wireless-charger-is-going-to-get-a-lot-faster/">
							technobuffalo.com
						</Link>
					</Slide>
					<Slide bgImage={images.smartTv.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps padding="0 0 100% 0">
							Smart TVs
						</Heading>
						<Link href="http://www.samsung.com/us/experience/smart-tv/">
							samsung.com
						</Link>
					</Slide>
					<Slide bgImage={images.tvSticks.replace("/", "")} bgDarken={0.25}>
						<Heading fit caps>
							TV Sticks
						</Heading>
						<Link href="http://www.iphonehacks.com/2014/04/apple-tv-amazon-fire-tv-chromecast.html">
							iphonehacks.com
						</Link>
					</Slide>
					<Slide bgImage={images["4k"].replace("/", "")} bgDarken={0.25}>
						<Heading textSize="8em" caps>
							4K
						</Heading>
						<Link href="http://hdwallpapershdpics.com/download-4k-ultra-hd-wallpapers/">
							hdwallpapershdpics.com
						</Link>
					</Slide>
					<Slide bgImage={images.vr.replace("/", "")} bgDarken={0.25}>
						<Heading caps textSize="8em">
							VR
						</Heading>
						<Link href="http://venturebeat.com/2016/05/11/oculus-and-samsung-have-1m-gear-vr-wearing-users/">
							venturebeat.com
						</Link>
					</Slide>
					<Slide bgImage={images.ar.replace("/", "")} bgDarken={0.25}>
						<Heading caps textSize="8em">
							AR
						</Heading>
						<Link href="http://www.gamespot.com/images/1300-2787338/">
							gamespot.com
						</Link>
					</Slide>

					<Slide bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
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
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}
