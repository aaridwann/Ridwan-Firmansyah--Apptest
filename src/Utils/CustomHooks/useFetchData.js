import { addContact, errorFetching } from "../../Redux/slice"
const options = {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
}

export default async function UseFetchdata(url, dispatch) {
    return await fetch(url, options)
        .then(async (res) => {
            if (res.status < 300) {
                res = await res.json()
                const data = res.data.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1)
                dispatch(addContact(data))
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