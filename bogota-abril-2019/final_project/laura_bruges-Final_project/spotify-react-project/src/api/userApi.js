import API from './index'

export async function fetchUser(accessToken){
    const data = await API.get('/me',{headers:{Authorization: `Bearer ${accessToken}` }}) 
    return data 
}

// axios.get(USER_INFO_URL, { headers: { Authorization: `Bearer ${accessToken}` } })
//     .then((response) => {
//         let userInfo = response.data;
//         dispatch(fetchUser(userInfo));
//     });