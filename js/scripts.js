$(document).ready(function(){
  /*Insert*/
    var $nameInsert = $("#nameInsert").val();
    var $descriptionInsert = $("#descriptionInsert").val();
    var $priceInsert = $("#priceInsert").val();
    $(".nameInsert").html($nameInsert);
    $(".ingrédientInsert").html($descriptionInsert);
    $(".priceInsert").html(arrondi2($priceInsert) +"€");
    
    $("#nameInsert").on("input", function(){

      $(".nameInsert").text($(this).val());
    });
    $("#descriptionInsert").on("input", function(){
      
      $(".ingrédientInsert").text($(this).val());
    });
    $("#priceInsert").on("input", function(){
      
      if($(this).val() === ""){
        $(".priceInsert").text( arrondi2(0) + "€");
      }else{
        
        $(".priceInsert").text(arrondi2($(this).val())+ "€");
      }
    });

    /*Update*/
    var $nameUpdate = $("#nameUpdate").val();
    var $descriptionUpdate = $("#descriptionUpdate").val();
    var $priceUpdate = $("#priceUpdate").val();

    $(".nameUpdate").html($nameUpdate);
    $(".descriptionUpdate").html($descriptionUpdate);
    $(".priceUpdate").html( arrondi2($priceUpdate) + "€");

    $("#nameUpdate").on("input", function(){
      
      $(".nameUpdate").text($(this).val());
    });
    $("#descriptionUpdate").on("input", function(){
      
      $(".descriptionUpdate").text($(this).val());
    });
    $("#priceUpdate").on("input", function(){
      
      if($(this).val() === ""){
        $(".priceUpdate").text( arrondi2(0) + "€");
      }else{
        $(".priceUpdate").text(arrondi2($(this).val())+ "€");
      }
    });

    function arrondi2(x){
      return Number.parseFloat(x).toFixed(2);
    }
  });