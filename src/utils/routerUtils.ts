import { parse } from "querystring";

export const parseLocationSearchQSParams = (paramsString: string) => {
	if (paramsString) {
		const noQuestionMarkString = paramsString.substring(1);
		return parse(noQuestionMarkString);
	}
	return null;
};

export const isNumeric = (value: string) => {
	return /^\d+$/.test(value);
};
