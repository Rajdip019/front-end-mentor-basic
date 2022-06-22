"use strict";

const shareImgBtn = document.getElementsByClassName('author-share-image');
const getwhiteBtn = document.getElementsByClassName('author-share-image-desktop-active');
const shareImageMenuBtn = document.getElementsByClassName('share-img');
const allInfo_m = document.getElementsByClassName('author-info-m');
const allInfo_d = document.getElementsByClassName('author-info-d');
const allInfo_black = document.getElementsByClassName('black-icon');
const allShareMenu = document.getElementsByClassName('popup-footer');
const getTraingle = document.getElementsByClassName('point-traingleDown');
const clickAnywhere = document.body;
const removeAuthorInfo_m = () => allInfo_m[0].classList.toggle('hide');
const toggleAuthorInfo_m = () => allInfo_m[0].classList.remove('hide');
const removeHideSection = () => allShareMenu[0].classList.toggle('hide');
const toggleShowSection = () => allShareMenu[0].classList.remove('hide');
const removeNormalShareIcon = () => shareImgBtn[1].classList.toggle('hide');
const toggleWhiteShareIcon = () => allInfo_black[0].classList.remove('author-share-image-desktop-active-hidden');
const toggleWhiteShareIcon_bring = () => allInfo_black[0].classList.toggle('author-share-image-desktop-active');
const bringBackTraingle = () => getTraingle[0].classList.remove('hide');

const toggleBringWhiteShareIcon = () => allInfo_black[0].classList.toggle('author-share-image-desktop-active-hidden');
const RemoveWhiteShareIcon_bring = () => allInfo_black[0].classList.remove('author-share-image-desktop-active');
const removeBackTraingle = () => getTraingle[0].classList.toggle('hide');
const bringNormalShareIcon = () => shareImgBtn[1].classList.remove('hide');

shareImgBtn[0].addEventListener("click", function(){
    toggleShowSection();
    removeAuthorInfo_m();
    
}) ;

shareImgBtn[1].addEventListener("click", function(){
    toggleShowSection();
    removeNormalShareIcon();
    toggleWhiteShareIcon();
    toggleWhiteShareIcon_bring();
    bringBackTraingle();
}) ;

allInfo_black[0].addEventListener("click", function(){ 
    removeBackTraingle();
    removeHideSection();
    RemoveWhiteShareIcon_bring();
    toggleBringWhiteShareIcon();
    bringNormalShareIcon();
    
    
});
// clickAnywhere.addEventListener("click", function(){
//     toggleBringWhiteShareIcon();
//     RemoveWhiteShareIcon_bring();

// });

shareImageMenuBtn[0].addEventListener("click", function(){
    toggleAuthorInfo_m();
    removeHideSection();
}) ;



