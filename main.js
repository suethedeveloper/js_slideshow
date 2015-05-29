$(document).ready(function(){  

  //Set up initial slide
  var listId = 0;
  $("div.pic").append(data[listId].image);
  $("div.name").append(data[listId].name);
  $("div.desc").append(data[listId].desc);

  //get number of <li>s depends on how many datas in data.js file
  for (var i = 0; i < data.length; i++) {
    $("ul").append("<li class='carousel-buttons' id='"+ data[i].id + "'> "+ data[i].id + " </li>");
  }
  $("ul li")[0].className += " active";

  //slides with delay of 5000ms
  var qIndex = 0;
  function showSlides() {
      ++qIndex;
      if (qIndex >= data.length) 
          qIndex = 0;

      $("div.pic").html("");
      $("div.name").html("");
      $("div.desc").html("");
      $("ul li").removeClass("active");
      $("div.pic").append(data[qIndex].image);
      $("div.name").append(data[qIndex].name);
      $("div.desc").append(data[qIndex].desc);
      var getList = $('ul li');
      getList[qIndex].className += " active";
  }

  var intervalID = setInterval(showSlides, 5000);

  //populate datas
  $("ul li").on("click", function(e){
    e.preventDefault();
    clearInterval(intervalID); //when a dot is clicked, stop the slide show
    $("div.pic").html("");
    $("div.name").html("");
    $("div.desc").html("");
    listId = $(this).attr("id");
    $("ul li").removeClass("active");
    $(this).addClass("active");
    var indexNum = listId-1;

    $("div.pic").append(data[indexNum].image);
    $("div.name").append(data[indexNum].name);
    $("div.desc").append(data[indexNum].desc);
  });

});