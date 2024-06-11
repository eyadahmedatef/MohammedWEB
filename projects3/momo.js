var mealArray =[]

function addMeal() {
    var newMeal = document.getElementById("mealInput").value;
    if (newMeal =="") {
    alert("please enter valid name");
    }else{
        mealArray.push(newMeal);
        document.getElementById("mealInput").value="";
        getItemsCount();
        
    }

}

function listMeal () {
    var parent = document.getElementById("mealList");

    if (mealArray.length == 0) {
        alert("no data found")
    } else {
        clearList();
        for (let index = 0; index < mealArray.length; index++) {
            var listItem = document.createElement("li");
            listItem.innerText =mealArray[index];

            parent.appendChild(listItem);
        }
    }
}

function clearList() {
    var parent = document.getElementById("mealList");
    parent.innerHTML="";
}

function removeList() {
    clearList();
    mealArray=[];
    getItemsCount();

}

function getItemsCount() {
    var itemsCount =document.getElementById("itemsCount");
    itemsCount.innerText = mealArray.length;
}
