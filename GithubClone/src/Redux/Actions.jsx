import { ADD_DETAILS } from "./Reducer";

export const AddDetails = (userName) => {
    return async (dispatch) => {
        const response = await fetch(`https://api.github.com/users/${userName}`, {
            headers: {
                Authorization: "Bearer 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 ",
            },
        });
        const data = await response.json();

        if (data.message) {
            dispatch({
                type: ADD_DETAILS,
                payload: [],
            });
            alert(`user ${data.message}`);
        } else {
            dispatch({
                type: ADD_DETAILS,
                payload: [data],
            });
        }
    };
};
