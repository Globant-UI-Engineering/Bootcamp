import NProgress from 'nprogress';
const API_URL = 'http://images.bobba.io/hof_furni/';
const IMAGER_URL = 'http://api.bobba.io:1212/furni?name=';

export const fetchFurnidata = () => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
        };

        fetch(API_URL + "furnidata.json", options)
            .then(response => {
                NProgress.done();
                return response.json();
            })
            .then(data => resolve(data))
            .catch(err => {
                NProgress.done();
                return reject(err);
            });
    });
};

export const searchOnFurnidata = (furnidata, search) => {
    const suggestions = [];
    if (search.length > 2) {
        search = search.trim().toLowerCase();
        for (let itemTypes in furnidata) {
            for (let itemId in furnidata[itemTypes]) {
                const item = furnidata[itemTypes][itemId];
                if (item.classname.toLowerCase().indexOf(search) !== -1 || item.name.toLowerCase().indexOf(search) !== -1) {
                    suggestions.push(item);
                }
            }
        }
    }
    return suggestions;
};

export const getImageUrl = furniName => {
    return IMAGER_URL + furniName;
};