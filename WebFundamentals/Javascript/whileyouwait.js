function birthday (){
    var daysUntilMyBirthday = 60;

    while (daysUntilMyBirthday >= 30) {
      console.log (daysUntilMyBirthday + 'until im older!')
      daysUntilMyBirthday--;
    }

    while (daysUntilMyBirthday >=5){
      console.log (daysUntilMyBirthday +'until aging complete')
      daysUntilMyBirthday--;
    }

    while (daysUntilMyBirthday >= 1){
      console.log (daysUntilMyBirthday + 'almost aged')
      daysUntilMyBirthday--;
    }

    console.log ('Officially aged, Happy Birthday to me!');
}

birthday();
