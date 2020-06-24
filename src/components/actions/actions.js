export function remove_features(id){
    return {
        type: "REMOVE_FEATURES",
        payload: id
    }

}

export function add_features(id){
    return {
        type:"ADD_FEATURES",
        payload: id
    }

}