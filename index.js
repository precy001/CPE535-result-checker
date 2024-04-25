const checkButton = document.querySelector('.check')
const textBox = document.querySelector('.matric') 
//set initials

const courseTitle = ''
const courseCode = 'CPE 535'

let container = document.querySelector('.result-container')
const error = document.querySelector('.error')
const errorMessage = [
    'Result not found for the given matric number',
    'Please input a matric number'
]

/*function findScore(){
    if(textBox.value === '160408034'){
        id = '001'
        fullName = 'IDOWU OLUWAFEMI P';
        matricNo = '160408034';
        ca = 27.0;
        examScore = 18.0;
        totalScore = ca + examScore;  
        container.classList.remove('hide-container')
        error.classList.remove('display-error')

    }else if(textBox.value ==='170408006'){
        id = '002'
        fullName = 'Ogundimu Hezekiah Oluwadamilare';
        matricNo = '170408006';
        ca = 34.0;
        examScore = 42.5;
        totalScore = ca + examScore;  
        container.classList.remove('hide-container')
        error.classList.remove('display-error')

    }else if(textBox.value ==='170408038'){
        id = '003'
        fullName = 'ASONIBARE OLUWATOBI GABRIEL';
        matricNo = '170408038';
        ca = 20.0;
        examScore = 25.5;
        totalScore = ca + examScore; 
        container.classList.remove('hide-container')
        error.classList.remove('display-error') 

    }else if(textBox.value ==='170408043'){
        id = '004'
        fullName = 'ALIYU ISRAEL ADAVIZE';
        matricNo = '170408043';
        ca = 30.0;
        examScore = 30.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')

    }else if(textBox.value ==='170809503'){
        id = '005'
        fullName = 'UZOHO ONYEDIKACHI BEDE';
        matricNo = '170809503';
        ca = 25.0;
        examScore = 20.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408002'){
        id = '006'
        fullName = 'FABIDUN ADEOLUWA SAMUEL';
        matricNo = '180408002';
        ca = 25.0;
        examScore = 22.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }
    
    else if(textBox.value ==='180408003'){
        id = '007'
        fullName = 'UNOKERIEGHAN SARAH UROW';
        matricNo = '180408003';
        ca = 25.5;
        examScore = 35.5;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408005'){
        id = '008'
        fullName = 'NNOROM NONSO PROSPER';
        matricNo = '180408005';
        ca = 25.0;
        examScore = 25.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408008'){
        id = '009'
        fullName = 'SHABI MOYINOLUWA TAIWO';
        matricNo = '180408008';
        ca = 30.0;
        examScore = 41.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408011'){
        id = '010'
        fullName = 'EMEH MATHEW C';
        matricNo = '180408011';
        ca = 27.0;
        examScore = 51.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }
    
    else if(textBox.value ==='180408012'){
        id = '011'
        fullName = 'ADE-OJO BOLUWATIFE PETER';
        matricNo = '180408012';
        ca = 28.0;
        examScore = 25.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408013'){
        id = '012'
        fullName = 'FAROUNBI ABIOLA ESTHER';
        matricNo = '180408013';
        ca = 26.0;
        examScore = 38.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408014'){
        id = '013'
        fullName = 'UTIBE-UBOM DIVINE JUDAH';
        matricNo = '180408014';
        ca = 26.0;
        examScore = 31.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }    

    else if(textBox.value ==='180408015'){
        id = '014'
        fullName = 'ATOBILOYE HIQMAT OLAYINKA';
        matricNo = '180408015';
        ca = 34.0;
        examScore = 51.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408016'){
        id = '015'
        fullName = 'ADEBISI ADEDOLAPO JEREMAI';
        matricNo = '180408016';
        ca = 24.0;
        examScore = 16.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }
    
    else if(textBox.value ==='180408018'){
        id = '016'
        fullName = 'KUYE DAMILOLA HARRY';
        matricNo = '180408018';
        ca = 34.0;
        examScore = 49.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408019'){
        id = '017'
        fullName = 'BISIRIYU GABRIEL O';
        matricNo = '180408019';
        ca = 29.0;
        examScore = 31.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408020'){
        id = '018'
        fullName = 'AHOTIN PESU MAUTIN';
        matricNo = '180408020';
        ca = 32.0;
        examScore = 34.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408021'){
        id = '019'
        fullName = 'BELLO EMMANUEL M';
        matricNo = '180408021';
        ca = 29.0;
        examScore = 47.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408022'){
        id = '020'
        fullName = 'HYEMAN SAMUEL BUBA';
        matricNo = '180408022';
        ca = 27.0;
        examScore = 28.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408023'){
        id = '021'
        fullName = 'ADEYEYE JOHN JESUGBEMI';
        matricNo = '180408023';
        ca = 30.0;
        examScore = 25.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408024'){
        id = '022'
        fullName = 'FAWAZ  ADEMOLA OLALERE';
        matricNo = '180408024';
        ca = 35.0;
        examScore = 29.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408025'){
        id = '023'
        fullName = 'AKPAN EMMANUEL UNWANA';
        matricNo = '180408025';
        ca = 28.0;
        examScore = 37.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408027'){
        id = '024'
        fullName = 'FOUBRI MACDONALD BULOEBI';
        matricNo = '180408027';
        ca = 0.0;
        examScore = 0.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408028'){
        id = '025'
        fullName = 'EHINMOSAN TOLU F.';
        matricNo = '180408028';
        ca = 33.0;
        examScore = 37.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408029'){
        id = '026'
        fullName = 'ANASI CHIGOZIRI ELTREASURE';
        matricNo = '180408029';
        ca = 36.0;
        examScore = 31.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408030'){
        id = '027'
        fullName = 'ONAKOMAIYA BOLUWATIFE VI';
        matricNo = '180408030';
        ca = 29.0;
        examScore = 22.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408031'){
        id = '028'
        fullName = 'UNO GIDEON OBOHO';
        matricNo = '180408031';
        ca = 26.0;
        examScore = 14.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408033'){
        id = '029'
        fullName = 'DARAMOLA EZEKIEL OPEYEMI';
        matricNo = '180408033';
        ca = 32.0;
        examScore = 43.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408034'){
        id = '030'
        fullName = 'ADETONA FAVOUR TAIWO';
        matricNo = '180408034';
        ca = 20.0;
        examScore = 30.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='180408035'){
        id = '031'
        fullName = 'ADULOJU CHARLES OLATUNDE';
        matricNo = '180408035';
        ca = 26.0;
        examScore = 34.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408501'){
        id = '032'
        fullName = 'ERIGO CHIGOZIE N.';
        matricNo = '190408501';
        ca = 27.0;
        examScore = 18.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408502'){
        id = '033'
        fullName = 'ABIDAKUN DOLAPO';
        matricNo = '190408502';
        ca = 30.0;
        examScore = 40.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408503'){
        id = '034'
        fullName = 'MAMAH CHUKWUBUKA V.';
        matricNo = '190408503';
        ca = 34.0;
        examScore = 30.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408504'){
        id = '035'
        fullName = 'AKPOFURE FAITH EMUESIRI';
        matricNo = '190408504';
        ca = 32.0;
        examScore = 38.5;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408506'){
        id = '036'
        fullName = 'ADEGBITE NATHAN OLUWASEY';
        matricNo = '190408506';
        ca = 33.0;
        examScore = 43.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }    

    else if(textBox.value ==='190408507'){
        id = '037'
        fullName = 'KAMORUDEEN AFEEZ';
        matricNo = '190408507';
        ca = 34.0;
        examScore = 43.5;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408508'){
        id = '038'
        fullName = 'EROMO-AIGBEHI OSASUME';
        matricNo = '190408508';
        ca = 34.0;
        examScore = 45.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }    

    else if(textBox.value ==='190408509'){
        id = '039'
        fullName = 'IBEKWE GOZIE IKECHUKWU';
        matricNo = '190408509';
        ca = 30.0;
        examScore = 27.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')
    }

    else if(textBox.value ==='190408510'){
        id = '040'
        fullName = 'ALANA MICHEAL ENIOLA';
        matricNo = '190408510';
        ca = 30.0;
        examScore = 21.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')   
    }

    else if(textBox.value ==='190408512'){
        id = '041'
        fullName = 'OKORO DERRICK C.';
        matricNo = '190408512';
        ca = 23.0;
        examScore = 23.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')   
    }

    else if(textBox.value ==='190408513'){
        id = '042'
        fullName = 'SONTAN OLAJIDE';
        matricNo = '190408513';
        ca = 31.0;
        examScore = 32.0;
        totalScore = ca + examScore;
        container.classList.remove('hide-container')
        error.classList.remove('display-error')   
    }
    
    else if(textBox.value === ''){
        error.innerHTML= `${errorMessage[1]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
    }
    
    else{

        error.innerHTML= `${errorMessage[0]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
    }

       
            container.innerHTML = ` <div class="title2">Result Found:</div>
            <div class="note-2">Full Name: ${fullName}</div>
            <div class="note-2">Matric No: ${matricNo}</div>
            <div class="note-2">Course title: ${courseTitle}</div>
            <div class="note-2">Course code: ${courseCode}</div>
            <div class="note-2">CA: ${ca}</div>
            <div class="note-2">Exam Score: ${examScore}</div>
            <div class="note-2">Total Score: ${totalScore}</div>
            
            `
            
            
        
        
       
    
} */


const data = [
  {
    "FULL NAME": "Course Title: Software Engineering",
    "MATRIC": "Course Code: CPE 535",
    "CA/40": "",
    "Total Exam/60": "",
    "Total/100": ""
  },
  {
    "FULL NAME": "NAME",
    "MATRIC": "MATRIC NO",
    "CA/40": "CA/40",
    "Total Exam/60": "Exam/60",
    "Total/100": "Total/100"
  },
  {
    "FULL NAME": "OLOYEDE MARIAM OLUWATOSIN",
    "MATRIC": 170408002,
    "CA/40": 29.5,
    "Total Exam/60": 53.5,
    "Total/100": 83
  },
  {
    "FULL NAME": "OSUALA JUSTIN CALEB",
    "MATRIC": 170408004,
    "CA/40": 24,
    "Total Exam/60": 26,
    "Total/100": 50
  },
  {
    "FULL NAME": "ADEJUMO OMOTOLANI AYOMIDE",
    "MATRIC": 170408005,
    "CA/40": 27.5,
    "Total Exam/60": 44.5,
    "Total/100": 72
  },
  {
    "FULL NAME": "OLATUNJI SHARON DAVID",
    "MATRIC": 170408007,
    "CA/40": 29.5,
    "Total Exam/60": 42.5,
    "Total/100": 72
  },
  {
    "FULL NAME": "OTOKITI FISAYO OLUWABUKOLA",
    "MATRIC": 170408008,
    "CA/40": 29.5,
    "Total Exam/60": 48.5,
    "Total/100": 78
  },
  {
    "FULL NAME": "TAIWO OLUWASEUNBABARA HEPHZIBAH",
    "MATRIC": 170408009,
    "CA/40": 29,
    "Total Exam/60": 35,
    "Total/100": 64
  },
  {
    "FULL NAME": "OLUSANYA OLUWATOBI JOSEPH",
    "MATRIC": 170408010,
    "CA/40": 35,
    "Total Exam/60": 49,
    "Total/100": 84
  },
  {
    "FULL NAME": "ARIMORO OLUWATOBA CALEB",
    "MATRIC": 170408011,
    "CA/40": 29,
    "Total Exam/60": 52,
    "Total/100": 81
  },
  {
    "FULL NAME": "BABATUNDE MUBARAQ OLALEKAN",
    "MATRIC": 170408015,
    "CA/40": 21,
    "Total Exam/60": 49,
    "Total/100": 70
  },
  {
    "FULL NAME": "UDE CHIDERAA EBENEZER",
    "MATRIC": 170408017,
    "CA/40": 29,
    "Total Exam/60": 42,
    "Total/100": 71
  },
  {
    "FULL NAME": "OYAWOLE OLUWADAMILOLA ANUOLUWAPO",
    "MATRIC": 170408019,
    "CA/40": 35,
    "Total Exam/60": 53,
    "Total/100": 88
  },
  {
    "FULL NAME": "OMAKACHUKWU ODINAKACHUKWU",
    "MATRIC": 170408022,
    "CA/40": 27.5,
    "Total Exam/60": 36.5,
    "Total/100": 64
  },
  {
    "FULL NAME": "AKINADE AYOOLUWA AYOADE",
    "MATRIC": 170408023,
    "CA/40": 29.5,
    "Total Exam/60": 48.5,
    "Total/100": 78
  },
  {
    "FULL NAME": "OLUTOMIWA OLAJUMOKE O. ",
    "MATRIC": 170408024,
    "CA/40": 27.5,
    "Total Exam/60": 37.5,
    "Total/100": 65
  },
  {
    "FULL NAME": "ASALU PAUL OPEYEMI ",
    "MATRIC": 170408025,
    "CA/40": 27,
    "Total Exam/60": 45,
    "Total/100": 72
  },
  {
    "FULL NAME": "OLADIPUPO OLUWATOBI",
    "MATRIC": 170408027,
    "CA/40": 23.5,
    "Total Exam/60": 21.5,
    "Total/100": 45
  },
  {
    "FULL NAME": "CHIDI IHECHUKWU JOSE MARIA",
    "MATRIC": 170408028,
    "CA/40": 21.5,
    "Total Exam/60": 49.5,
    "Total/100": 71
  },
  {
    "FULL NAME": "IKUOMOLA OLAMIDE",
    "MATRIC": 170408029,
    "CA/40": 33.5,
    "Total Exam/60": 54.5,
    "Total/100": 88
  },
  {
    "FULL NAME": "EKEKEZIE CHIAZŌR OLUWATOBI",
    "MATRIC": 170408030,
    "CA/40": 28.5,
    "Total Exam/60": 52.5,
    "Total/100": 81
  },
  {
    "FULL NAME": "ADEBIYI SEMINIRE DEBORAH",
    "MATRIC": 170408031,
    "CA/40": 29,
    "Total Exam/60": 52,
    "Total/100": 81
  },
  {
    "FULL NAME": "OLOTON JOSHUA OSAYANEDE",
    "MATRIC": 170408033,
    "CA/40": 32.5,
    "Total Exam/60": 49.5,
    "Total/100": 82
  },
  {
    "FULL NAME": "ABAH SUCCESS MONDAY",
    "MATRIC": 170408034,
    "CA/40": 29.5,
    "Total Exam/60": 40.5,
    "Total/100": 70
  },
  {
    "FULL NAME": "AWOYEMI ABIOLA",
    "MATRIC": 170408037,
    "CA/40": 20.5,
    "Total Exam/60": 49.5,
    "Total/100": 70
  },
  {
    "FULL NAME": "TIJANI ABISOYE DEBORAH",
    "MATRIC": 170408041,
    "CA/40": 35,
    "Total Exam/60": 53,
    "Total/100": 88
  },
  {
    "FULL NAME": "ALIYU ISRAEL ADAVIZE",
    "MATRIC": 170408043,
    "CA/40": 29.5,
    "Total Exam/60": 41.5,
    "Total/100": 71
  },
  {
    "FULL NAME": "BANIRE ADESHINA",
    "MATRIC": 170408044,
    "CA/40": 0,
    "Total Exam/60": 0,
    "Total/100": 0
  },
  {
    "FULL NAME": "MICHAEL OBI EJIOFOR",
    "MATRIC": 170408045,
    "CA/40": 29,
    "Total Exam/60": 45,
    "Total/100": 74
  },
  {
    "FULL NAME": "EDWARD FUMNANYA PROSPER",
    "MATRIC": 170408047,
    "CA/40": 29.5,
    "Total Exam/60": 52.5,
    "Total/100": 82
  },
  {
    "FULL NAME": "OKPARA DANIEL ",
    "MATRIC": 180408501,
    "CA/40": 34.5,
    "Total Exam/60": 48.5,
    "Total/100": 83
  },
  {
    "FULL NAME": "OKEKE EBUBE",
    "MATRIC": 180408502,
    "CA/40": 27.5,
    "Total Exam/60": 45.5,
    "Total/100": 73
  },
  {
    "FULL NAME": "OGUNTOLU DANIEL",
    "MATRIC": 180408503,
    "CA/40": 21.5,
    "Total Exam/60": 38.5,
    "Total/100": 60
  },
  {
    "FULL NAME": "ONWUASOANYA JOSHUA I.",
    "MATRIC": 180408504,
    "CA/40": 27,
    "Total Exam/60": 53,
    "Total/100": 80
  },
  {
    "FULL NAME": "OKOGHENUN CONFIDENCE",
    "MATRIC": 180408505,
    "CA/40": 35,
    "Total Exam/60": 45,
    "Total/100": 80
  },
  {
    "FULL NAME": "EBOZUE HENRY IFEANYI",
    "MATRIC": 180408506,
    "CA/40": 31.5,
    "Total Exam/60": 48.5,
    "Total/100": 80
  },
  {
    "FULL NAME": "OLADIPUPO STEPHEN T.",
    "MATRIC": 180408507,
    "CA/40": 25,
    "Total Exam/60": 45,
    "Total/100": 70
  },
  {
    "FULL NAME": "MORAKINYO ISRAEL OLUWAPELUMI",
    "MATRIC": 180408508,
    "CA/40": 35,
    "Total Exam/60": 38,
    "Total/100": 73
  }
];

  // Sample data structure containing student information

/* function searchStudent() {
  const student = data.find(student => student.matricNumber == textBox.value);

  if (student) {
    console.log("Test Score:", student.testScore);
    console.log("Exam Score:", student.examScore);

    container.innerHTML = ` <div class="title2">Result Found:</div>
            <div class="note-2">Full Name: ${student["FULL NAME"]}</div>
            <div class="note-2">Matric No: ${student.MATRIC}</div>
            <div class="note-2">Course title: ${courseTitle}</div>
            <div class="note-2">Course code: ${courseCode}</div>
            <div class="note-2">CA: ${student["CA/40"]}</div>
            <div class="note-2">Exam Score: ${student["Total Exam/60"]}</div>
            <div class="note-2">Total Score: ${student["Total/100"]}</div>`
  } else {
    console.log("Student not found.");
  }
}
 */

/* function searchStudent(){
  /* for(let i = 0; i<data.length; i++){
    if(textBox.value == data[i].MATRIC){
      container.innerHTML = ` <div class="title2">Result Found:</div>
      <div class="note-2">Full Name: ${data[i]["FULL NAME"]}</div>
      <div class="note-2">Matric No: ${data[i].MATRIC}</div>
      <div class="note-2">Course title: ${courseTitle}</div>
      <div class="note-2">Course code: ${courseCode}</div>
      <div class="note-2">CA: ${data[i]["CA/40"]}</div>
      <div class="note-2">Exam Score: ${data[i]["Total Exam/60"]}</div>
      <div class="note-2">Total Score: ${data[i]["Total/100"]}</div>`

      container.classList.remove('hide-container')
      error.classList.remove('display-error')
    }else if(textBox.value == ''){
      error.innerHTML= `${errorMessage[1]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
    }
    
    else{

        error.innerHTML= `${errorMessage[0]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
    }
  } 

  for(let i = 0; i < data.length; i++){
    if(textBox.value == data[i].MATRIC){
      console.log(data[i]["FULL NAME"])

      container.innerHTML = ` <div class="title2">Result Found:</div>
      <div class="note-2">Full Name: ${data[i]["FULL NAME"]}</div>
      <div class="note-2">Matric No: ${data[i].MATRIC}</div>
      <div class="note-2">Course title: ${courseTitle}</div>
      <div class="note-2">Course code: ${courseCode}</div>
      <div class="note-2">CA: ${data[i]["CA/40"]}</div>
      <div class="note-2">Exam Score: ${data[i]["Total Exam/60"]}</div>
      <div class="note-2">Total Score: ${data[i]["Total/100"]}</div>`
    }else if(textBox.value == ''){
        error.innerHTML= `${errorMessage[1]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
    }else{
        error.innerHTML= `${errorMessage[0]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
    };
  };
};*/

function searchStudent() {
  const matricNumber = textBox.value.trim(); // Remove leading/trailing whitespace
  const student = data.find(student => student.MATRIC === parseInt(matricNumber));

  if (student) {
    console.log("Test Score:", student["CA/40"]);
    console.log("Exam Score:", student["Total Exam/60"]);

    container.innerHTML = `
      <div class="title2">Result Found:</div>
      <div class="note-2">Full Name: ${student["FULL NAME"]}</div>
      <div class="note-2">Matric No: ${student.MATRIC}</div>
      <div class="note-2">Course title: ${courseTitle}</div>
      <div class="note-2">Course code: ${courseCode}</div>
      <div class="note-2">CA: ${student["CA/40"]}</div>
      <div class="note-2">Exam Score: ${student["Total Exam/60"]}</div>
      <div class="note-2">Total Score: ${student["Total/100"]}</div>
    `;
    container.classList.remove('hide-container');
    error.classList.remove('display-error');
  }else if(textBox.value === ''){
        error.innerHTML= `${errorMessage[1]}`
        error.classList.add('display-error')
        container.classList.add('hide-container')
  }
  
  else {
    error.innerHTML = errorMessage[0];
    error.classList.add('display-error');
    container.classList.add('hide-container');
  }

  textBox.value = ''
}
