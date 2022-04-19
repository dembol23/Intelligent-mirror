window.onload = function() {
   let myiFrame1 = document.getElementById("iFr1");
   let doc1 = myiFrame1.contentDocument;
   doc1.body.innerHTML = doc1.body.innerHTML + '<style>*{font-size:80px;color:#fca311;text-align:center;line-height:150px;font-family:Arial;font-weight: bold;}</style>';
   let myiFrame2 = document.getElementById("iFr2");
   let doc2 = myiFrame2.contentDocument;
   doc2.body.innerHTML = doc2.body.innerHTML + '<style>*{font-size:80px;color:#fca311;text-align:center;line-height:150px;font-family:Arial;font-weight: bold;}</style>';
   let myiFrame3 = document.getElementById("iFr3");
   let doc3 = myiFrame3.contentDocument;
   doc3.body.innerHTML = doc3.body.innerHTML + '<style>*{font-size:80px;color:#fca311;text-align:center;line-height:150px;font-family:Arial;font-weight: bold;}</style>';
}