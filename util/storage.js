const todoStorageKey = 'TODOS'
export default {
    get() {
        return JSON.parse(localStorage.getItem(todoStorageKey)) || []
    },
    set(todos) {
        localStorage.setItem(todoStorageKey, JSON.stringify(todos))
    }
}