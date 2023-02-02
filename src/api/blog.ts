import http from "./http";


export function GetTag(){
    return http.request({
        url:"/tag",
        method:"Get",
    })
}


export function AddTag(data:any){
    return http.request({
        url:"/tag",
        method:"Post",
        data
    })
}


export function DelTag(data:any){
    return http.request({
        url:"/tag",
        method:"Delete",
        data
    })
}


export function GetClass(){
    return http.request({
        url:"/class",
        method:"Get",
    })
}


export function AddClass(data:any){
    return http.request({
        url:"/class",
        method:"Post",
        data
    })
}


export function DelClass(data:any){
    return http.request({
        url:"/class",
        method:"Delete",
        data
    })
}

export function GetMarkdown(){
    return http.request({
        url:"/markdown",
        method:"Get",
    })
}

export function AddMarkdown(data:any){
    return http.request({
        url:"/markdown",
        method:"Post",
        data
    })
}

export function PutMarkdown(data:any){
    return http.request({
        url:"/markdown",
        method:"Put",
        data
    })
}


export function DelMarkdown(data:any){
    return http.request({
        url:"/markdown",
        method:"Delete",
        data
    })
}
