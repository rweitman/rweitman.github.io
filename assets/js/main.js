$(document).ready(function(e) {

//PREPARATION

	  $imaging = ['image1', 'image2', 'image3', 'image4', 'image5','image6'];

		$storage = $('#backDrop');

		function chance(comp) {
			return comp[Math.floor(Math.random()*comp.length)];
		}

		$chosenImage = chance($imaging);

		console.log($chosenImage);

		$storage.addClass($chosenImage);

    $('img[usemap]').rwdImageMaps();
});
//BOOTCAMP PREPARE

		const $firstBootCamp = $('.first-boot-camp');
		const $secondBootCamp = $('.second-boot-camp');
		const $thirdBootCamp = $('.third-boot-camp');
		const $fourthBootCamp = $('.fourth-boot-camp');
		const $fifthBootCamp = $('.fifth-boot-camp');
		const $sixthBootCamp = $('.sixth-boot-camp');
		const $seventhBootCamp = $('.seventh-boot-camp');
		const $eighthBootCamp = $('.eighth-boot-camp');
		const $ninthBootCamp = $('.ninth-boot-camp');
		const $tenthBootCamp = $('.tenth-boot-camp');

		const $firstBootInfo = $('#first-boot-info');
	  const $secondBootInfo = $('#second-boot-info');
	  const $thirdBootInfo = $('#third-boot-info');
	  const $fourthBootInfo = $('#fourth-boot-info');
	  const $fifthBootInfo = $('#fifth-boot-info');
	  const $sixthBootInfo = $('#sixth-boot-info');
	  const $seventhBootInfo = $('#seventh-boot-info');
	  const $eighthBootInfo = $('#eighth-boot-info');
	  const $ninthBootInfo = $('#ninth-boot-info');
	  const $tenthBootInfo = $('#tenth-boot-info');

		let activeBCInfo = $firstBootInfo;

//KHAN ACADEMY PREPARE

const $firstKhanAcademy = $('.first-khan-academy');
const $secondKhanAcademy = $('.second-khan-academy');
const $thirdKhanAcademy = $('.third-khan-academy');
const $fourthKhanAcademy = $('.fourth-khan-academy');
const $fifthKhanAcademy = $('.fifth-khan-academy');
const $sixthKhanAcademy = $('.sixth-khan-academy');
const $seventhKhanAcademy = $('.seventh-khan-academy');
const $eighthKhanAcademy = $('.eighth-khan-academy');
const $ninthKhanAcademy = $('.ninth-khan-academy');
const $tenthKhanAcademy = $('.tenth-khan-academy');

const $firstKhanInfo = $('#first-khan-info');
const $secondKhanInfo = $('#second-khan-info');
const $thirdKhanInfo = $('#third-khan-info');
const $fourthKhanInfo = $('#fourth-khan-info');
const $fifthKhanInfo = $('#fifth-khan-info');
const $sixthKhanInfo = $('#sixth-khan-info');
const $seventhKhanInfo = $('#seventh-khan-info');
const $eighthKhanInfo = $('#eighth-khan-info');
const $ninthKhanInfo = $('#ninth-khan-info');
const $tenthKhanInfo = $('#tenth-khan-info');

let activeKAInfo = $firstKhanInfo;


//AHCS PREPARE

const $firstAHCS = $('.first-ahcs-button');
const $secondAHCS = $('.second-ahcs-button');
const $thirdAHCS = $('.third-ahcs-button');
const $fourthAHCS = $('.fourth-ahcs-button');

const $firstAHCSInfo = $('#first-ahcs-info');
const $secondAHCSInfo = $('#second-ahcs-info');
const $thirdAHCSInfo = $('#third-ahcs-info');
const $fourthAHCSInfo = $('#fourth-ahcs-info');

let activeAHCSInfo = $firstAHCSInfo;

//CODECADEMY PREPARE

const $firstCC = $('.first-code-cademy');
const $secondCC = $('.second-code-cademy');
const $thirdCC = $('.third-code-cademy');
const $fourthCC = $('.fourth-code-cademy');
const $fifthCC = $('.fifth-code-cademy');
const $sixthCC = $('.sixth-code-cademy');
const $seventhCC = $('.seventh-code-cademy');
const $eighthCC = $('.eighth-code-cademy');
const $ninthCC = $('.ninth-code-cademy');

const $firstCCInfo = $('#first-codecademy-info');
const $secondCCInfo = $('#second-codecademy-info');
const $thirdCCInfo = $('#third-codecademy-info');
const $fourthCCInfo = $('#fourth-codecademy-info');
const $fifthCCInfo = $('#fifth-codecademy-info');
const $sixthCCInfo = $('#sixth-codecademy-info');
const $seventhCCInfo = $('#seventh-codecademy-info');
const $eighthCCInfo = $('#eighth-codecademy-info');
const $ninthCCInfo = $('#ninth-codecademy-info');


let activeCCInfo = $firstCCInfo;

//BANDMANS PREPARE

const $firstBAND = $('.first-band-button');
const $secondBAND = $('.second-band-button');
const $thirdBAND = $('.third-band-button');
const $fourthBAND = $('.fourth-band-button');

const $firstBANDInfo = $('#first-band-info');
const $secondBANDInfo = $('#second-band-info');
const $thirdBANDInfo = $('#third-band-info');
const $fourthBANDInfo = $('#fourth-band-info');

let activeBANDInfo = $firstBANDInfo;


//UDEMY PREPARE

const $firstUDEMY = $('.first-udemy-button');
const $secondUDEMY = $('.second-udemy-button');
const $thirdUDEMY = $('.third-udemy-button');
const $fourthUDEMY = $('.fourth-udemy-button');

const $firstUDEMYInfo = $('#first-udemy-info');
const $secondUDEMYInfo = $('#second-udemy-info');
const $thirdUDEMYInfo = $('#third-udemy-info');
const $fourthUDEMYInfo = $('#fourth-udemy-info');

let activeUDEMYInfo = $firstUDEMYInfo;

//FREE CODE CAMP PREPARE

const $firstFCC = $('.first-fcc-button');
const $secondFCC = $('.second-fcc-button');
const $thirdFCC = $('.third-fcc-button');

const $firstFCCInfo = $('#first-fcc-info');
const $secondFCCInfo = $('#second-fcc-info');
const $thirdFCCInfo = $('#third-fcc-info');

let activeFCCInfo = $firstFCCInfo;

//FISHING PREPARE

const $firstFish = $('.first-fish-button');
const $secondFish = $('.second-fish-button');

const $firstFishInfo = $('#first-fish-info');
const $secondFishInfo = $('#second-fish-info');

let activeFishInfo = $firstFishInfo;


//HIDING BOOTCAMP ELEMENTS

		$secondBootInfo.hide();
	  $thirdBootInfo.hide();
	  $fourthBootInfo.hide();
	  $fifthBootInfo.hide();
	  $sixthBootInfo.hide();
	  $seventhBootInfo.hide();
	  $eighthBootInfo.hide();
	  $ninthBootInfo.hide();
	  $tenthBootInfo.hide();

//HIDING KHAN ACADEMY ELEMENTS

$secondKhanInfo.hide();
$thirdKhanInfo.hide();
$fourthKhanInfo.hide();
$fifthKhanInfo.hide();
$sixthKhanInfo.hide();
$seventhKhanInfo.hide();
$eighthKhanInfo.hide();
$ninthKhanInfo.hide();
$tenthKhanInfo.hide();

//HIDING AHCS ELEMENTS

$secondAHCSInfo.hide();
$thirdAHCSInfo.hide();
$fourthAHCSInfo.hide();

//HIDING CODECADEMY ELEMENTS

$secondCCInfo.hide();
$thirdCCInfo.hide();
$fourthCCInfo.hide();
$fifthCCInfo.hide();
$sixthCCInfo.hide();
$seventhCCInfo.hide();
$eighthCCInfo.hide();
$ninthCCInfo.hide();

//HIDING BANDMANS ELEMENTS

$secondBANDInfo.hide();
$thirdBANDInfo.hide();
$fourthBANDInfo.hide();

//HIDING UDEMY ELEMENTS

$secondUDEMYInfo.hide();
$thirdUDEMYInfo.hide();
$fourthUDEMYInfo.hide();

// HIDING FREE CODE CAMP

$secondFCCInfo.hide();
$thirdFCCInfo.hide();

// HIDING FISH ELEMENTS

$secondFishInfo.hide();

//BOOTCAMP PROJECT SELECTING

  $firstBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $firstBootInfo;
   	activeBCInfo.show();
  })

  $secondBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $secondBootInfo;
   	activeBCInfo.show();
  })

  $thirdBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $thirdBootInfo;
   	activeBCInfo.show();
  })

  $fourthBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $fourthBootInfo;
   	activeBCInfo.show();
  })

  $fifthBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $fifthBootInfo;
   	activeBCInfo.show();
  })

  $sixthBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $sixthBootInfo;
   	activeBCInfo.show();
  })

  $seventhBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $seventhBootInfo;
   	activeBCInfo.show();
  })

  $eighthBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $eighthBootInfo;
   	activeBCInfo.show();
  })

  $ninthBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $ninthBootInfo;
   	activeBCInfo.show();
  })

  $tenthBootCamp.on('click', () => {
    activeBCInfo.hide();
   	activeBCInfo = $tenthBootInfo;
   	activeBCInfo.show();
  })

//KHAN ACADEMY PROJECT SELECTING


  $firstKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $firstKhanInfo;
   	activeKAInfo.show();
  })

  $secondKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $secondKhanInfo;
   	activeKAInfo.show();
  })

  $thirdKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $thirdKhanInfo;
   	activeKAInfo.show();
  })

  $fourthKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $fourthKhanInfo;
   	activeKAInfo.show();
  })

  $fifthKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $fifthKhanInfo;
   	activeKAInfo.show();
  })

  $sixthKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $sixthKhanInfo;
   	activeKAInfo.show();
  })

  $seventhKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $seventhKhanInfo;
   	activeKAInfo.show();
  })

  $eighthKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $eighthKhanInfo;
   	activeKAInfo.show();
  })

  $ninthKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $ninthKhanInfo;
   	activeKAInfo.show();
  })

  $tenthKhanAcademy.on('click', () => {
    activeKAInfo.hide();
   	activeKAInfo = $tenthKhanInfo;
   	activeKAInfo.show();
  })

	//AHCS SKILLSET SELECTING

	$firstAHCS.on('click', () => {
    activeAHCSInfo.hide();
   	activeAHCSInfo = $firstAHCSInfo;
   	activeAHCSInfo.show();
  })

  $secondAHCS.on('click', () => {
    activeAHCSInfo.hide();
   	activeAHCSInfo = $secondAHCSInfo
   	activeAHCSInfo.show();
  })

  $thirdAHCS.on('click', () => {
    activeAHCSInfo.hide();
   	activeAHCSInfo = $thirdAHCSInfo
   	activeAHCSInfo.show();
  })

  $fourthAHCS.on('click', () => {
    activeAHCSInfo.hide();
   	activeAHCSInfo = $fourthAHCSInfo;
   	activeAHCSInfo.show();
  })

//CODECADEMY SKILLSET SELECTING

$firstCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $firstCCInfo;
	activeCCInfo.show();
})

$secondCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $secondCCInfo;
	activeCCInfo.show();
})

$thirdCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $thirdCCInfo;
	activeCCInfo.show();
})

$fourthCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $fourthCCInfo;
	activeCCInfo.show();
})

$fifthCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $fifthCCInfo;
	activeCCInfo.show();
})

$sixthCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $sixthCCInfo;
	activeCCInfo.show();
})

$seventhCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $seventhCCInfo;
	activeCCInfo.show();
})

$eighthCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $eighthCCInfo;
	activeCCInfo.show();
})

$ninthCC.on('click', () => {
	activeCCInfo.hide();
	activeCCInfo = $ninthCCInfo;
	activeCCInfo.show();
})

//BANDMANS SKILLSET SELECTING

$firstBAND.on('click', () => {
	activeBANDInfo.hide();
	activeBANDInfo = $firstBANDInfo;
	activeBANDInfo.show();
})

$secondBAND.on('click', () => {
	activeBANDInfo.hide();
	activeBANDInfo = $secondBANDInfo;
	activeBANDInfo.show();
})

$thirdBAND.on('click', () => {
	activeBANDInfo.hide();
	activeBANDInfo = $thirdBANDInfo;
	activeBANDInfo.show();
})

$fourthBAND.on('click', () => {
	activeBANDInfo.hide();
	activeBANDInfo = $fourthBANDInfo;
	activeBANDInfo.show();
})

//UDEMY LANGUAGES SELECTING

$firstUDEMY.on('click', () => {
	activeUDEMYInfo.hide();
	activeUDEMYInfo = $firstUDEMYInfo;
	activeUDEMYInfo.show();
})

$secondUDEMY.on('click', () => {
	activeUDEMYInfo.hide();
	activeUDEMYInfo = $secondUDEMYInfo;
	activeUDEMYInfo.show();
})

$thirdUDEMY.on('click', () => {
	activeUDEMYInfo.hide();
	activeUDEMYInfo = $thirdUDEMYInfo;
	activeUDEMYInfo.show();
})

$fourthUDEMY.on('click', () => {
	activeUDEMYInfo.hide();
	activeUDEMYInfo = $fourthUDEMYInfo;
	activeUDEMYInfo.show();
})

//FREE CODE CAMP MODALS

$firstFCC.on('click', () => {
	activeFCCInfo.hide();
	activeFCCInfo = $firstFCCInfo;
	activeFCCInfo.show();
})
$secondFCC.on('click', () => {
	activeFCCInfo.hide();
	activeFCCInfo = $secondFCCInfo;
	activeFCCInfo.show();
})
$thirdFCC.on('click', () => {
	activeFCCInfo.hide();
	activeFCCInfo = $thirdFCCInfo;
	activeFCCInfo.show();
})



//FISHING MODALS

$firstFish.on('click', () => {
	activeFishInfo.hide();
	activeFishInfo = $firstFishInfo;
	activeFishInfo.show();
})
$secondFish.on('click', () => {
	activeFishInfo.hide();
	activeFishInfo = $secondFishInfo;
	activeFishInfo.show();
})



//OPENING AND CLOSING MODALS

function openModal(num) {

	if (num == 'AHCS') {
		$('#advantageHCS').show();
		$('#categoryImage').addClass('invisible');

	}
	else if (num == 'CODECADEMY') {

	$('#codeCademy').show();
	$('#categoryImage').addClass('invisible');

	}
	else if (num == 'CODING BOOT CAMP') {

		$('#codingBootCamp').show();
		$('#categoryImage').addClass('invisible');


	}
	else if (num == '4') {

		$('#khanAcademy').show();
		$('#categoryImage').addClass('invisible');

	}
	else if (num == 'BANDMANS') {
		$('#bandMans').show();
		$('#categoryImage').addClass('invisible');

	}
	else if (num == 'UDEMY') {
		$('#udemyModal').show();
		$('#categoryImage').addClass('invisible');

	}
	else if (num == 'FREE CODE CAMP') {

		$('#fccModal').show();
		$('#categoryImage').addClass('invisible');

	}
	else if (num == 'BUSINESS') {

		$('#busyModal').show();
		$('#categoryImage').addClass('invisible');
	}
	else if (num == 'GAME HISTORY') {

		$('#gameModal').show();
		$('#categoryImage').addClass('invisible');
	}
	else if (num == 'FISHING') {

		$('#fishModal').show();
		$('#categoryImage').addClass('invisible');
	}
	else if (num == 'COVER LETTER') {

		$('#coverLetter').show();
		$('#categoryImage').addClass('invisible');
	}
}
function closeModal(num) {

	if (num == 'AHCS') {
		$('#categoryImage').removeClass('invisible');
		$('#advantageHCS').hide();
	}
	else if (num == 'CODECADEMY') {
		$('#categoryImage').removeClass('invisible');
	$('#codeCademy').hide();

	}
	else if (num == 'CODING BOOT CAMP') {
		$('#categoryImage').removeClass('invisible');
		$('#codingBootCamp').hide();

	}
	else if (num == '4') {
		$('#categoryImage').removeClass('invisible');
		$('#khanAcademy').hide();

	}
	else if (num == 'BANDMANS') {

		$('#categoryImage').removeClass('invisible');
		$('#bandMans').hide();
}
 else if (num == 'UDEMY') {

	 $('#categoryImage').removeClass('invisible');
	 $('#udemyModal').hide();

 }
 else if (num == 'FREE CODE CAMP') {

	$('#categoryImage').removeClass('invisible');
	$('#fccModal').hide();

 }
 else if (num == 'BUSINESS') {

	 $('#categoryImage').removeClass('invisible');
	 $('#busyModal').hide();

 }
 else if (num == 'GAME HISTORY') {

	 $('#categoryImage').removeClass('invisible');
	 $('#gameModal').hide();
 }
 else if (num == 'FISHING') {

	$('#categoryImage').removeClass('invisible');
	$('#fishModal').hide();
 }
 else if (num == 'COVER LETTER') {

 $('#categoryImage').removeClass('invisible');
 $('#coverLetter').hide();
 }
}
