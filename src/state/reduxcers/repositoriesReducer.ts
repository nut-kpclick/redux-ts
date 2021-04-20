
interface RepositoriesState {
    loading: boolean
    error: string | null;
    data: string[]
}

const reducer = (state: RepositoriesState, action: any) => {
    switch (action.type) {
        case 'serch_repositories':
            return { loading: true, error: null, data: [] }
        case 'search_repositories_success':
            return { loading: true, error: null, data: action.payload }
        case 'search_repositories_error':
            return { loading: true, error: action.payload, data: [] }
        default:
            return state
    }
}

export default reducer