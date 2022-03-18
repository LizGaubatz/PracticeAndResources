// REVERSE ARRAY FUNCTION

const { range } = require("express/lib/request");

// const array = [A, B, C, D, E];

// function reverse(array) {
//     for (i = array.length - 1; i >= 0; i--)
//         temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//     return temp;
// }
// console.log(reverse(array));



// DISPLAY LISTINGS 


// Create Array 
const listingId = [];
// Message for empty array search
const noItem = "No items yet!"

const len = listingId.length - 1;


// Get Closet (slowly)
function getCloset(listingId) {
    // for each iteration console.log a listing
    for (let i = 0; i < listingId.length; i++) {
    // and make a pause after it
        (function(i){
            setTimeout(() => {
                console.log(listingId[i])
            }, 1500 * (i + 1));
        })(i);
    }
}


// Get index id / "Share"
function share(listingId, id) {

    // Are there items to show?
    if (listingId.length > 0) {
        // Find index of searched item
        id = listingId.indexOf(id)
        // Does that item exist?
        if (id === -1) {
            console.log("Not an item!")
        } else {
        // If that item exists, move it to the array[0], call on rotation function
            let front = listingId.splice(id, 1)
            listingId.unshift(front[0])
            return console.log(listingId[0])
            // return rotate(listingId)
        }
        return
    } else {
        return console.log(noItem)
    }
}


// 60 second interval rotation
function rotate(listingId) {
    // Are there items to show?
    if (listingId.length < 1) {
        console.log(noItem)
    // If there is only 1 listing, just show that
    } else if (listingId.length = 1) {
        console.log(listingId[0])
    // If there are multiple listings...
    } else {
        console.log(listingId)
        setInterval(function () {
            share = listingId.splice(len, 1)
            listingId.unshift(share[0])
            console.log(listingId);

        // Use 6000 for 60 second intervals
        }, 60000);

        // Use 1500 to do quick tests
        // }, 1500);
    }
    return
}


// TESTING

// Inititalize listings
listingId.push("A");
listingId.push("B");
listingId.push("C");
listingId.push("D");

// Get Closet (slowly)
// getCloset(listingId)


// "Share"
// Will Work
// share(listingId, "A")
// share(listingId, "B")
// share(listingId, "C")
// share(listingId, "D")
// Will Not Work
// share(listingId, "Z")
// share(listingId, "Input")
// share(listingId, "")

// Add new listing
// listingId.push("E");



// Rotating Array
// rotate(listingId);