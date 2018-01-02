$(document).ready(() => {
  const $firstButton = $('.first-button');
  const $secondButton = $('.second-button');
  const $thirdButton = $('.third-button');
  const $fourthButton = $('.fourth-button');
  const $fifthButton = $('.fifth-button');

  const $firstCategory = $('.first-category');
  const $secondCategory = $('.second-category');
  const $thirdCategory = $('.third-category');
  const $fourthCategory = $('.fourth-category');
  const $fifthCategory= $('.fifth-category');
  const $sixthCategory = $('.sixth-category');
  const $seventhCategory = $('.seventh-category');
  const $eighthCategory = $('.eighth-category');
  const $ninthCategory = $('.ninth-category');
  const $tenthCategory= $('.tenth-category');
  
  const $firstTopic = $('.first-topic');
  const $secondTopic = $('.second-topic');
  const $thirdTopic = $('.third-topic');
  const $fourthTopic = $('.fourth-topic');
  const $fifthTopic= $('.fifth-topic');
  const $sixthTopic = $('.sixth-topic');
  const $seventhTopic = $('.seventh-topic');
  const $eighthTopic = $('.eighth-topic');
  const $ninthTopic = $('.ninth-topic');
  const $tenthTopic= $('.tenth-topic');



  const $uno = $('#uno');
  const $dos = $('#dos');
  const $tres = $('#tres');
  const $cuatro = $('#cuatro');
  const $cinco = $('#cinco');


  const $count1 = $('#count1');
  const $count2 = $('#count2');
  const $count3 = $('#count3');
  const $count4 = $('#count4');
  const $count5 = $('#count5');
  const $count6 = $('#count6');
  const $count7 = $('#count7');
  const $count8= $('#count8');
  const $count9 = $('#count9');
  const $count10 = $('#count10');


  const $counting1 = $('#counting1');
  const $counting2 = $('#counting2');
  const $counting3 = $('#counting3');
  const $counting4 = $('#counting4');
  const $counting5 = $('#counting5');
  const $counting6 = $('#counting6');
  const $counting7 = $('#counting7');
  const $counting8= $('#counting8');
  const $counting9 = $('#counting9');
  const $counting10 = $('#counting10');




  let activeButton = $uno;
  let countButton = $count1;
  let countingButton = $counting1;

  // $uno.hide();
  $dos.hide(); 
  $tres.hide();
  $cuatro.hide(); 
  $cinco.hide(); 
    // $count1.hide();
      $count2.hide();
       $count3.hide();
        $count4.hide();
          $count5.hide();
           $count6.hide();
            $count7.hide();
      $count8.hide();
       $count9.hide();
        $count10.hide();

  // $counting1.hide();
      $counting2.hide();
       $counting3.hide();
        $counting4.hide();
          $counting5.hide();
           $counting6.hide();
            $counting7.hide();
      $counting8.hide();
       $counting9.hide();
        $counting10.hide();
 

  $firstButton.on('click', () => {
   	alert("FIRST ONE!");
   	activeButton.hide();
   	activeButton = $uno;
   	activeButton.show();
  })

    $secondButton.on('click', () => {
   	alert("SECOND ONE!");
   	activeButton.hide();
   	activeButton = $dos;
   	activeButton.show();
  })
      $thirdButton.on('click', () => {
   	alert("THIRD ONE!");
   	activeButton.hide();
   	activeButton = $tres;
   	activeButton.show();
  })
        $fourthButton.on('click', () => {
   	alert("FOURTH ONE!");
   	activeButton.hide();
   	activeButton = $cuatro;
   	activeButton.show();
  })
          $fifthButton.on('click', () => {
   	alert("FIFTH ONE!");
   	activeButton.hide();
   	activeButton = $cinco;
   	activeButton.show();
  })
  
 
  $firstCategory.on('click', () => {
   	alert("FIRST!");
   	countButton.hide();
   	countButton = $count1;
   	countButton.show();
  })

    $secondCategory.on('click', () => {
   	alert("SECOND!");
   countButton.hide();
   	countButton = $count2;
   	countButton.show();
  })
      $thirdCategory.on('click', () => {
   	alert("THIRD!");
countButton.hide();
   	countButton = $count3;
   	countButton.show();
  })
        $fourthCategory.on('click', () => {
   	alert("FOURTH ONE!");
  countButton.hide();
   	countButton = $count4;
   	countButton.show();
  })
          $fifthCategory.on('click', () => {
   	alert("FIFTH ONE!");
  countButton.hide();
   	countButton = $count5;
   	countButton.show();
  })
  
  $sixthCategory.on('click', () => {
   	alert("SIXTH!");
   	countButton.hide();
   	countButton = $count6;
   	countButton.show();
  })

    $seventhCategory.on('click', () => {
   	alert("SEVENTH!");
   countButton.hide();
   	countButton = $count7;
   	countButton.show();
  })
      $eighthCategory.on('click', () => {
   	alert("EIGHTH!");
countButton.hide();
   	countButton = $count8;
   	countButton.show();
  })
        $ninthCategory.on('click', () => {
   	alert("NINTH ONE!");
  countButton.hide();
   	countButton = $count9;
   	countButton.show();
  })
          $tenthCategory.on('click', () => {
   	alert("TENTH ONE!");
  countButton.hide();
   	countButton = $count10;
   	countButton.show();
  })
  



  $firstTopic.on('click', () => {
    alert("one!");
    countingButton.hide();
    countingButton = $counting1;
    countingButton.show();
  })

    $secondTopic.on('click', () => {
    alert("two!");
   countingButton.hide();
    countingButton = $counting2;
    countingButton.show();
  })
      $thirdTopic.on('click', () => {
    alert("three!");
countingButton.hide();
    countingButton = $counting3;
    countingButton.show();
  })
        $fourthTopic.on('click', () => {
    alert("four!");
  countingButton.hide();
    countingButton = $counting4;
    countingButton.show();
  })
          $fifthTopic.on('click', () => {
    alert("five!");
  countingButton.hide();
    countingButton = $counting5;
    countingButton.show();
  })
  
  $sixthTopic.on('click', () => {
    alert("six!");
    countingButton.hide();
    countingButton = $counting6;
    countingButton.show();
  })

    $seventhTopic.on('click', () => {
    alert("seven!");
   countingButton.hide();
    countingButton = $counting7;
    countingButton.show();
  })
      $eighthTopic.on('click', () => {
    alert("eight!");
countingButton.hide();
    countingButton = $counting8;
    countingButton.show();
  })
        $ninthTopic.on('click', () => {
    alert("nine!");
  countingButton.hide();
    countingButton = $counting9;
    countingButton.show();
  })
          $tenthTopic.on('click', () => {
    alert("ten!");
  countingButton.hide();
    countingButton = $counting10;
    countingButton.show();
  })
  








})
