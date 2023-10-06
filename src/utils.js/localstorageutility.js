export const insertstep= (obj) => {
    const jsonstoredData = JSON.parse(localStorage.getItem("data"));    
    // Check if items.chatstorage is an array or initialize it as an empty array if it doesn't exist
    const storage = Array.isArray(jsonstoredData?.chatstorage) ? [...jsonstoredData.chatstorage] : [];
    storage.push(obj);
    const updatedObject = { ...jsonstoredData, chatstorage:storage};
    localStorage.setItem("data", JSON.stringify(updatedObject));
}

export const insertdata=(key,value)=>{
    let storedData = localStorage.getItem('data');
    let jsonstoredData=JSON.parse(storedData)
    const updatedObject = { ...jsonstoredData, info:{...jsonstoredData.info,[key]: value }};
    localStorage.setItem('data', JSON.stringify(updatedObject));
}


export const getdata=(key)=>{
    let storedData = localStorage.getItem('data');
    let jsonstoredData=JSON.parse(storedData)
    let infodata=jsonstoredData.info
    return infodata[key]


}

export const getchoice=()=>{
    let storedData = localStorage.getItem('data');
    let jsonstoredData=JSON.parse(storedData)
    return jsonstoredData.choice
}