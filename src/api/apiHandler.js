import { isArray } from "lodash";

export const apiHandler = (url, method, data) => {

    console.log("data", data)

    let formData = new FormData();
    Object.keys(data).forEach((key, index) => {
        if(isArray(data[key]))
            formData.append(`${key}[]`, data[key]);
        else
            formData.append(key, data[key]);
    })

    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            body: formData,
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            }
        })
            .then(response => {
                return response.json();
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject("Internal Server Error!");
            });
    });
};
