export const getApiResourse = async (url) => {
    try {
        const res = await fetch(url)
    
        if (res.ok) {
            return await res.json()
        } else {
            console.log('Could not Fetch', res.status)
            return false
        }
    } catch (error) {
        console.log('Could not fetch', error.message)
    }
}

export const idPerson = (id) => id.replace('person', '')
