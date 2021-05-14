export const getDocDataAndId = doc => {
    return {id: doc.id,...doc.data()}
}