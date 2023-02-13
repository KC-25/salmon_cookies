
'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('sales-table');

// TODO:  create a comment below describing how this Constructor function works
// The function is figuring out the amount of cookies being sold and the amount of customers each hour in total.

// - what makes it a constructor function?
// Its a constructor function because it is a created object and it gives out puts by the given data inputed function.

// - what do you think the CookieStand.all.push(all) method is doing?
// What I think CookieStand.all.push(all) is pushing all of the this. into the function at the sametime.

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
 this.locationName = locationName;
 this.minCustomersPerHour = minCustomersPerHour;
 this.maxCustomersPerHour = maxCustomersPerHour;
 this.avgCookiesPerSale = avgCookiesPerSale;
 this.customersEachHour = [];
 this.cookiesEachHour = [];
 this.totalDailyCookies = 0;
 CookieStand.all.push(this);
}

// TODO: create a comment describing the method below
// - what does prototype mean?
// Prototype is an added thing to a function and can be chosen to be put into the function or not.

CookieStand.prototype.calcCustomersEachHour = function() {
 for (let i = 0; i < hours.length; i++) {
   this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
 }
};
CookieStand.prototype.calcCookiesEachHour = function() {
 this.calcCustomersEachHour();
 for (let i = 0; i < hours.length; i++) {
   const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
   this.cookiesEachHour.push(oneHour);
   this.totalDailyCookies += oneHour;
 }
};

CookieStand.prototype.render = function() {
 this.calcCookiesEachHour();
 const tableRow = document.createElement('tr');
 let tableDataElement = document.createElement('td');
 tableDataElement.textContent = this.locationName;
 tableRow.appendChild(tableDataElement);

 for (let i = 0; i < hours.length; i++) {
   tableDataElement = document.createElement('td');
   tableDataElement.textContent = this.cookiesEachHour[i];
   tableRow.appendChild(tableDataElement);
 }

 const tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = this.totalDailyCookies;
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
};

CookieStand.all = [];

// TODO: instantiate a new CookieStand object (with sample data) for Dubai, Paris, and Lima

new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 34, 67, 20.5);
new CookieStand('Dunai', 8, 34, 12.1);
new CookieStand('Paris', 19, 70, 29.9);
new CookieStand('Lima', 5, 19, 4.7);
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeaderRow() {
 const tableRow = document.createElement('tr');
 let tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Locations';
 tableRow.appendChild(tableHeaderElement);
 for (let i = 0; i < hours.length; i++) {
   tableHeaderElement = document.createElement('th');
   tableHeaderElement.textContent = hours[i];
   tableRow.appendChild(tableHeaderElement);
 }
 tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Location Totals';
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
}
// TODO: create a series of comments in this function where you are confused with what's happening
// - what about the code is confusing?
// - can you guess what it does?

function makeFooterRow() {
 const tableRow = document.createElement('tr');
 let tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = 'Hourly Totals for All Locations';
 tableRow.appendChild(tableHeaderElement);
//  This function is creating a table row and header for Hourly Totals for All Locations 

 let totalOfTotals = 0;
 for (let i = 0; i < hours.length; i++) {
   let hourlyTotal = 0;
//    An equation figuring out the totoal of hours in each of the table rows

   for (let j = 0; j < CookieStand.all.length; j++){
     hourlyTotal += CookieStand.all[j].cookiesEachHour[i];
     totalOfTotals += CookieStand.all[j].cookiesEachHour[i];
   }
//   I'm not really sure what j is meant for and why it is called j. But this adding the hourally total of all the hours in the table row.  
   tableHeaderElement = document.createElement('th');
   tableHeaderElement.textContent = hourlyTotal;
   tableRow.appendChild(tableHeaderElement);
 }
//  Creating a table header and putting in the houraly total.
 tableHeaderElement = document.createElement('th');
 tableHeaderElement.textContent = totalOfTotals;
 tableRow.appendChild(tableHeaderElement);
 tableElement.appendChild(tableRow);
}
// Creating a table header and putting the overall total into it.
(function renderTable() {
 makeHeaderRow();

 for(let i = 0; i < CookieStand.all.length; i++){
   CookieStand.all[i].render();
 }
 makeFooterRow();
})();
// I think that this is adding the total amount of cookies between all the stands.

const ocean = document.getElementById('ocean'),
 waveWidth = 10,
 waveCount = Math.floor(window.innerWidth/waveWidth),
 docFrag = document.createDocumentFragment();
//  Im assuming that this is the water animation for the salmon. But im not sure why a math function is placed in it and what document fragment is.

for(let i = 0; i < waveCount; i++){
 const wave = document.createElement('div');
 wave.className += ' wave';
 docFrag.appendChild(wave);
 wave.style.left = i * waveWidth + 'px';
 wave.style.webkitAnimationDelay = (i/100) + 's';
}
ocean.appendChild(docFrag);
// This is creating the wave. But I dont understand why the webkitAnimationDelay is crossed out and again why a math function is placed into it.
