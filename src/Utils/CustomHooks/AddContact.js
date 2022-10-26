import { doneFetching, errorFetching, startFethcing } from "../../Redux/slice";
import UseFetchdata from "./useFetchData";

export default async function AddContact(data, dispatch) {
    dispatch(startFethcing())
    data.firstName = data.firstName.trim()
    data.lastName = data.lastName.trim()
    let options = { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }

    return await fetch('https://simple-contact-crud.herokuapp.com/contact', options)
        .then(async (res) => {
            if (res.status >= 300) {
                res = await res.json()
                dispatch(errorFetching(res.message))
                return false
            }
            res = await res.json()
            dispatch(doneFetching())
            await UseFetchdata('https://simple-contact-crud.herokuapp.com/contact', dispatch)
            return true
        })
        .catch(err => {
            dispatch(errorFetching(err.message))
            return false
        })
}