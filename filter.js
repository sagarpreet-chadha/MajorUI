// function blur() {
//   var blur = $("#blur").slider("value");
//   var grayscale = $("#grayscale").slider("value");
//   var brightness = $("#brightness").slider("value");
//   var contrast = $("#contrast").slider("value");
//   var rotate = $("#rotate").slider("value");
//   var invert = $("#invert").slider("value");
//   var opacity = $("#opacity").slider("value");
//   var saturate = $("#saturate").slider("value");
//   var sepia = $("#sepia").slider("value");
//   $("#gaborimage").css("-webkit-filter", "blur(" + blur + "px)" + "brightness(" + brightness + "%)" + "grayscale(" + grayscale + "%)" + "hue-rotate(" + rotate + "deg)" + "contrast(" + contrast + "%)" + "invert(" + invert + "%)" + "opacity(" + opacity + "%)" + "saturate(" + saturate + ")" + "sepia(" + sepia + "%)");

// }

function convertToGrayScale() {
  var src = localStorage.getItem('mySrc') ;
  $('#grayscalediv').prepend('<img id="grayscaleimage" src='+src+' />') ;
  $("#grayscaleimage").css("-webkit-filter","grayscale(100%)" + "blur(1px)") ;
  $('#button_grayscale').attr('disabled',true) ;


  $('#div_gabor').css("display", "block") ;

}

function useGaborFilter(){
  var src = localStorage.getItem('mySrc') ;
  $('#gabordiv').prepend('<img id="gaborimage" src='+src+' />') ;
  $('#button_gabor').attr('disabled',true) ;
  $("#gaborimage").css("-webkit-filter","grayscale(100%)" + "blur(0px)") ;
}

function requestdata() {
           var self = this;
                (function() {
                    var zoom = self._map.getZoom(), northeast = self._map.getBounds().getNorthEast() , southwest = self._map.getBounds().getSouthWest() ;
                    var $ = window.jQuery;
                    var url = "https://majorproject.org/api/" ;
                    // if(typeof self._map.spin === 'function'){
                    //     self._map.spin(true) ;
                    // }
                    $.getJSON(url , function(data){
                            self.parseData(data) ;
                       
                    });
                })();
}

function parseData(data) {
  this.data = data ; 
  convertToGrayScale() ;
  useGaborFilter()
}



//***********SLIDERS*************//

// $(function() {
//   $("#blur").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 25,
//     value: 0,
//     slide: blur 
//   });
//   $("#grayscale").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 100,
//     value: 0,
//     slide: blur 
//   });
//   $("#brightness").slider({
//     orientation: "horizontal",
//     min: 100,
//     max: 1000,
//     value: 0,
//     slide: blur
//   });

//   $("#contrast").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 1000,
//     value: 100,
//     slide: blur
//   });
//   $("#rotate").slider({
//     orientation: "horizontal",
//     min: -180,
//     max: 180,
//     value: 0,
//     slide: blur
//   });

//   $("#saturate").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 100,
//     value: 1,
//     slide: blur
//   });

//   $("#sepia").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 100,
//     value: 0,
//     slide: blur
//   });

//   $("#opacity").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 100,
//     value: 100,
//     slide: blur
//   });

//   $("#invert").slider({
//     orientation: "horizontal",
//     min: 0,
//     max: 100,
//     value: 0,
//     slide: blur
//   });
// });