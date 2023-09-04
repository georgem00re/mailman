
export function calcQueryString(params) {
	const selectedParams = params?.filter((element, index) => {
		return element.selected == true
	})
	if (selectedParams == undefined || selectedParams == null || selectedParams == []) return ""
	var baseStr = "?"
	params.forEach((element, index) => {
		const str = `&${element.keyStr}=${element.value}`
		if (element.selected == true) baseStr += str
	})
	return baseStr.replace("&", "")
}