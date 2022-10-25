import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addContact, errorFetching, startFetching } from "../../Redux/slice"

const options = {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
}

export default function UseFetchdata(url, dispatch) {
    return fetch(url, options)
        .then(async (res) => {
            if (res.status < 300) {
                res = await res.json()
                data = res.data.sort((a,b) => a.firstName - b.firstName)
                dispatch(addContact(data))
                return true
            }
            res = await res.json()
            dispatch(errorFetching(res.message))
            return false
        })
        .catch(err => {
            console.log(err)
            dispatch(errorFetching(err.message))
            return false
        })
    // .then(res => res.json())
    // .then(data => dispatch(addContact(data.data)))
}