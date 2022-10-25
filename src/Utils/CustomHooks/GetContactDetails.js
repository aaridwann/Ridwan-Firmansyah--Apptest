import { doneFetching, startFethcing } from "../../Redux/slice"

export default function GetContactDetail(id, dispatch, dispatchDetails) {
    dispatch(startFethcing())
    fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, { method: 'GET' })
        .then(async (res) => {
            if (res.ok) {
                res = await res.json()
                dispatch(doneFetching())
                dispatchDetails({ type: 'ADD_DATA_DETAILS', payload: res.data })
                return true
            }
            res = await res.json()
            dispatch(errorFetching(res.message))
            return false
        })
        .catch(err => {
            throw new Error('Something went wrong')
        })
}