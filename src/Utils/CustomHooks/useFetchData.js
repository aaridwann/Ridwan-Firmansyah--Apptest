import { addContact, errorFetching } from "../../Redux/slice"
const options = {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
}

export default function UseFetchdata(url, dispatch) {
    return fetch(url, options)
        .then(async (res) => {
            if (res.status < 300) {
                res = await res.json()
                dispatch(addContact(res.data.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1)))
                return true
            }
            res = await res.json()
            dispatch(errorFetching(res.message))
            return false
        })
        .catch(err => {
            dispatch(errorFetching(err.message))
            return false
        })
}