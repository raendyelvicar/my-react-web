import Banner from "./pages/Banner/Banner";
import Expertise from "./pages/Expertise/Expertise";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Global from "./styles/Global";
import { Layout } from "./styles/HomeStyles";

function App() {
	return (
		<div className="App">
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
