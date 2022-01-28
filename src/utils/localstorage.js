export const getTodoFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);

    let todoItems = null;

    try {
        const farsedJSON = JSON.parse(value);

        if (Array.isArray(farsedJSON)){
            todoItems = farsedJSON;
        }
    } catch (error) {
        // jika tidak valid, maka set array kosong
        todoItems = [];
    }

    return todoItems;
}

// save todo ke local storage
export const saveTodoToLocalStorage = (key, data) => localStorage.getItem(key, JSON.stringify(data));