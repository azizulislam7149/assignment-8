import { json } from "react-router-dom";

const getStoredList = ()=>{

    const storedStr= localStorage.getItem('card-list')
if(storedStr){
    const storeList= JSON.parse(storedStr);
return storeList;
}
else{
return [];
}

}
const addToGetStore = (id)=>{
const storeList = getStoredList();

if(storeList.includes(id)){
console.log(id,'alredy add to cart')

}
else{
    storeList.push(id);
    const storedStr= JSON.stringify(storeList);
    localStorage.setItem('card-list',storedStr);
}
}
export {addToGetStore, getStoredList,}