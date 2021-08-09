import Banner from "./pages/Banner/Banner";
import Expertise from "./pages/Expertise/Expertise";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Global from "./styles/Global";
import { Layout } from "./styles/HomeStyles";
import { Helmet } from "react-helmet";

function App() {
	return (
		<div className="App">
			<Helmet>
                <meta charSet="utf-8" />
                <title>Web Portfolio | Raendy Andhika El Vicar</title>
            </Helmet>
			<Global />
			<Layout>
				<Banner />
			</Layout>
			<Expertise />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
