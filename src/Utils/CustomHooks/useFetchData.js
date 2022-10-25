import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addContact, startFetching } from "../../Redux/slice"

const options = {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
}

export default function UseFetchdata(url, dispatch) {
    fetch(url, options)
        .then(res => res.json())
        .then(data => dispatch(addContact(data.data)))
        .catch(err => console.log(err))
}