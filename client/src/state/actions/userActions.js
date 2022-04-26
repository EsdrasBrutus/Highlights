import * as api from "../../api";
import { SIGN_IN, SIGN_UP } from "./actionTypes";

export const signIn = (data, navigate) => async (dispatch) => {
	// try {
	// 	const result = await api.signIn(data);
	// 	dispatch({
	// 		type: SIGN_IN,
	// 		payload: result,
	// 	});
		navigate("/");
	// } catch (err) {
	// 	console.log(err);
	// }
};

export const signUp = (data, navigate) => async (dispatch) => {
	// try {
    //     const result = await api.signUp(data);
    //     dispatch({
    //         type: SIGN_UP,
    //         payload: result,
    //     });
        navigate("/");
    // } catch (err) {
    //     console.log(err);
    // }
};
