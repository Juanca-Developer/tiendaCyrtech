export const getDocDataAndId = doc => {
    return ({ ...doc.data(), id: doc.id })
}
