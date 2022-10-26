import { deleteContact, doneFetching, errorFetching, startFethcing } from "../../Redux/slice"
import UseFetchdata from "./useFetchData"


const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
}

export default async function DeleteContact(dispatch, id) {
    dispatch(startFethcing())
    return await (
        fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, options)
            .then(async (res) => {
                if (res.status < 300) {
                    res = await res.json()
                   await UseFetchdata('https://simple-contact-crud.herokuapp.com/contact', dispatch)
                    return true
                }
                res = await res.json()
                dispatch(errorFetching(res.message))
                return false
            })
            .catch((err) => {
                dispatch(errorFetching(err))
                return false
            })
    )
}