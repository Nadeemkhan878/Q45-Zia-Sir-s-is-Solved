//Q18:
//  seeing the wold: think of at least places in the wold you'd like to visit.
//  store the location in a array. make sure the arrey is not in alphabetical order.
//  print your arrey in its orignal order.
//  print your arrey in alphabetical order without modifying the actual list.
//  show that your arrey is still in its orignal order by printing it.
//  print your arrey in reverse alphabetical order without changing the order of ther orignal list.
//  show that your arrey is still in its orignal order by printing it again
//  reverse the order of your list.print the arrey to show that its order has changed.
//  reverse the order of your list again.print the list to show it's back to its orignal order.
//  sort your arrey so it's stored in alphabetical order.print the arrey to show that its order has been changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 18
var places = ["Karachi", "Hydrabad", "Balochistan", "Multan", "Punjab",];
console.log("orignal  " + places);
// print your arrey in alphabetical order without modifying the actual list.
console.log("copy " + __spreadArray([], places, true).sort());
//  show that your arrey is still in its orignal order by printing it.
console.log("orignal  " + places);
//  print your arrey in reverse alphabetical order without changing the order of ther orignal list.
console.log("copy  " + __spreadArray([], places, true).sort().reverse());
//  show that your arrey is still in its orignal order by printing it again
console.log("copy  " + __spreadArray([], places, true).sort().reverse());
//  reverse the order of your list.print the arrey to show that its order has changed.
console.log("orignal  " + places.sort());
//  reverse the order of your list again.print the list to show it's back to its orignal order.
console.log("orignal  " + places.sort().reverse());
