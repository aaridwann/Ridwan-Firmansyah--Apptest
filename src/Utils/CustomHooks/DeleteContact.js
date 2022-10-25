import { deleteContact, errorFetching, startFethcing } from "../../Redux/slice"


const options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
}

export default async function DeleteContact(dispatch, id) {
    dispatch(startFethcing())
    try {
        const res = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, options)
        const data = await res.json()
        console.log(data);
        return dispatch(deleteContact())
    } catch (error) {
        console.log(error);
        // return dispatch(errorFetching(error.message))
    }
}