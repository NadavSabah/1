'use strict'

var gTrans = {
    title: {
        en: 'welcome to nadav\'s shop',
        ch: '納達夫的商店',
        he: 'החנות של נדב'
    },
    "add-btn": {
        en: 'Add Book',
        ch: '加一本書',
        he: 'הוסף ספר',
    },
    'book-name': {
        en: 'Book Name',
        ch: '這本書的標題',
        he: 'שם הספר',
    },
    'book-price': {
        en: 'Book Price',
        ch: '預訂價格',
        he: 'מחיר הספר'
    },
    'book-dis': {
        en: 'Discription',
        ch: '描述',
        he: 'תאור',
    },
  
    'book-action': {
        en: 'Take Action',
        ch: '採取行動',
        he: 'תפעל,לא להתבייש',
    },
    'btn-close': {
        en: 'Close',
        ch: '關閉',
        he: 'סגור',
    },
   
}
var gCurrLang = 'en';



function setLang(lang) {
    gCurrLang = lang;
}
doTrans()
function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        // var transKey = el.getAttribute('data-trans');
        var transKey = el.dataset.trans;
        console.log('transKey',transKey)
        var txt = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}

