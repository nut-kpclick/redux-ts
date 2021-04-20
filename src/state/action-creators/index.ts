import { ActionType } from '../action-types'
import { Action } from '../action'
import { Dispatch } from 'redux'
import axios from 'axios'

const searchRepositores = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })
        try {
            const { data } = await axios.get('https://registry.nmpjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })
            const names = data.opbjects.map((result: any) => {
                return result.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    }
}