import { doneFetching, errorFetching, startFethcing } from "../../Redux/slice";
import UseFetchdata from "./useFetchData";

export default async function AddContact(data, dispatch) {
    dispatch(startFethcing())
    let options = { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }

    return await fetch('https://simple-contact-crud.herokuapp.com/contact', options)
        .then(async (res) => {
            console.log(res);
            if (res.status >= 300) {
                res = await res.json()
                dispatch(errorFetching(res.message))
                console.log(res);
                return false
            }
            res = await res.json()
            dispatch(doneFetching())
            UseFetchdata('https://simple-contact-crud.herokuapp.com/contact', dispatch)
            return true
        })
        .catch(err => {
            dispatch(errorFetching(err.message))
            console.log('hollaa')
            return false
        })
}