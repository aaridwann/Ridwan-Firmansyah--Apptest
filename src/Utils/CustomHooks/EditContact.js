import { doneFetching, errorFetching, startFethcing } from "../../Redux/slice"
import UseFetchdata from "./useFetchData"



export default async function EditContact(data, dispatch) {
    const body = { ...data }
    delete body.id

    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    }
    dispatch(startFethcing())
    return fetch(`https://simple-contact-crud.herokuapp.com/contact/${data.id}`, options)
        .then(async (res) => {
            if (res.status < 300) {
                // dispatch(doneFetching())
               await UseFetchdata('https://simple-contact-crud.herokuapp.com/contact', dispatch)
                return true
            }
            res = await res.json()
            dispatch(errorFetching(res.message))
            return false
        })
        .catch((err) => {
            dispatch(errorFetching(err.message))
            return false
        })
}