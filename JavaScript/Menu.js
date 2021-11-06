//Data Item.....
const menuDataItem = {
  account: "My Account",
  about: "About",
  Support: "Support",
  logOut: "Log Out",
  itemOne: "Item-1",
  itemTwo: "Item-2",
  itemThree: "Item-3",
};

const body = document.body;

//Create Element.....
const wrapperDiv = document.createElement("div");
const menuUi = document.createElement("ui");

const menuLiOne = document.createElement("li");
const menuLiOneA = document.createElement("a");
const menuLiOneDiv = document.createElement("div");
const menuLiOneDivA_One = document.createElement("a");
const menuLiOneDivA_Two = document.createElement("a");
const menuLiOneDivA_Three = document.createElement("a");

const menuLiTwo = document.createElement("li");
const menuLiTwoA = document.createElement("a");
const menuLiTwoDiv = document.createElement("div");
const menuLiTwoDivA_One = document.createElement("a");
const menuLiTwoDivA_Two = document.createElement("a");

const menuLiThree = document.createElement("li");
const menuLiThreeA = document.createElement("a");
const menuLiThreeDiv = document.createElement("div");
const menuLiThreeDivA_One = document.createElement("a");

const menuLiFour = document.createElement("li");
const menuLiFourA = document.createElement("a");

//Appending Element into Tree.....
body.appendChild(wrapperDiv);
wrapperDiv.appendChild(menuUi);
menuUi.append(menuLiOne, menuLiTwo, menuLiThree, menuLiFour);

menuLiOne.append(menuLiOneA, menuLiOneDiv);
menuLiOneDiv.append(menuLiOneDivA_One, menuLiOneDivA_Two, menuLiOneDivA_Three);

menuLiTwo.append(menuLiTwoA, menuLiTwoDiv);
menuLiTwoDiv.append(menuLiTwoDivA_One, menuLiTwoDivA_Two);

menuLiThree.append(menuLiThreeA, menuLiThreeDiv);
menuLiThreeDiv.append(menuLiThreeDivA_One);

menuLiFour.append(menuLiFourA);

//Assigning Data value into proper field.....
menuLiOneA.innerHTML =
  "<i class='fas fa-user-circle'></i>" + menuDataItem.account;
menuLiOneDivA_One.innerHTML = menuDataItem.itemOne;
menuLiOneDivA_Two.innerHTML = menuDataItem.itemTwo;
menuLiOneDivA_Three.innerHTML = menuDataItem.itemThree;

menuLiTwoA.innerHTML =
  "<i class='fas fa-address-card'></i>" + menuDataItem.about;
menuLiTwoDivA_One.innerHTML = menuDataItem.itemOne;
menuLiTwoDivA_Two.innerHTML = menuDataItem.itemTwo;

menuLiThreeA.innerHTML = '<i class="fas fa-info"></i>' + menuDataItem.Support;
menuLiThreeDivA_One.innerHTML = menuDataItem.itemOne;

menuLiFourA.innerHTML =
  '<i class="fas fa-sign-out-alt"></i>' + menuDataItem.logOut;

//Assigning Class & Id for styling...
wrapperDiv.className = "wrapper";
menuUi.className = "mainMenu";

menuLiOne.className = "item";
menuLiOne.id = "account";
menuLiOneA.className = "btn";
menuLiOneDiv.className = "subMenu";

menuLiTwo.className = "item";
menuLiTwo.id = "about";
menuLiTwoA.className = "btn";
menuLiTwoDiv.className = "subMenu";

menuLiThree.className = "item";
menuLiThree.id = "support";
menuLiThreeA.className = "btn";
menuLiThreeDiv.className = "subMenu";

menuLiFour.className = "item";
menuLiFourA.className = "btn";

menuLiOneA.setAttribute("href", "#account");
menuLiTwoA.setAttribute("href", "#about");
menuLiThreeA.setAttribute("href", "#support");
menuLiFourA.setAttribute("href", "#");

menuLiOneDivA_One.setAttribute("href", "");
menuLiOneDivA_Two.setAttribute("href", "");
menuLiOneDivA_Three.setAttribute("href", "");

console.log(wrapperDiv);
