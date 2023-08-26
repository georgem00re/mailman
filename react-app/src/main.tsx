import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import RequestEditor from "./components/misc/RequestEditor";
import ResponseViewer from "./components/misc/ResponseViewer";
import store from "./state/store";
import { Provider, useDispatch } from "react-redux";
import { fetchExampleResponse } from "./services/data.service";
import { updateResponse } from "./state/actions";
import NavigationBar from "./components/misc/NavigationBar";

export default function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		fetchExampleResponse().then((res) => {
			console.log(res);
			dispatch(updateResponse(res));
		}).catch((err) => {
			dispatch(updateResponse(err))
		})
	});

	return (
		<div className="grid">
			<NavigationBar/>
			<RequestEditor/>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<Provider store={store}>
		<App/>
	</Provider>
)
