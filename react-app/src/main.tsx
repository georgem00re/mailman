import ReactDOM from "react-dom/client";
import RequestEditor from "./components/misc/RequestEditor";
import ResponseViewer from "./components/misc/ResponseViewer";
import store from "./state/store";
import { Provider } from "react-redux";
import NavigationBar from "./components/misc/NavigationBar";

export default function App() {
	return (
		<div className="grid">
			<NavigationBar/>
			<RequestEditor/>
			<ResponseViewer/>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<App/>
	</Provider>
)
