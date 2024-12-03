// Enregistrement de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
//header-animation

gsap.from("header", {
    y: -50, // Le texte commence à 100px à droite
    opacity: 0, // Le texte commence invisible
    duration: 1.2, // Durée de l'animation
    ease:'power2.out'
});
gsap.from(".intro-text", {
    x: -100, // Le texte commence à 100px à droite
    opacity: 0, // Le texte commence invisible
    duration: .8, // Durée de l'animation
    ease:'power3.in'
});




// Cibler toutes les div avec la classe fade-box et les animer
gsap.utils.toArray('.fade-box').forEach(fadeBox => {
  gsap.to(fadeBox, {
    scrollTrigger: {
      trigger: fadeBox, // Chaque fade-box sera son propre déclencheur
      start: "top top", // Commence lorsque le haut de l'élément atteint le milieu de la fenêtre
      end: "bottom top", // Termine lorsque le bas de l'élément quitte le haut de la fenêtre
      scrub: true, // Lier l'animation au défilement
      toggleActions: "play none none reverse" 
    },
    opacity: 0, // Diminuer l'opacité à 0
    duration: .5, // Durée de l'animation
  });
});

// Animer la largeur de .hr lorsque la section entre dans la vue
document.querySelectorAll('.hr').forEach((hr) => {
    gsap.from(hr, {
      width: '0px', // La largeur va s'étendre à 100%
      duration: 3, // Durée de l'animation (ajustée pour une meilleure expérience)
      scrollTrigger: {
        trigger: hr, // Chaque élément .hr est le déclencheur
        start: 'top 80%', // L'animation commence quand le haut de .hr atteint 80% de la hauteur de la fenêtre
        end: 'top top', // L'animation se termine quand le haut de .hr atteint le haut de la fenêtre
        scrub: true, // Lier l'animation au défilement pour un effet fluide
        markers: false, // Afficher les marqueurs pour visualiser le début et la fin de l'animation
        ease: 'power1.inOut', 
      }
    });
});

Highcharts.setOptions({
  colors: Highcharts.getOptions().colors.map(function (color) {
      return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
          ]
      };
  })
});



function createChart3() {
    Highcharts.chart('container3', {
            chart: {
                type: 'column',
                animation: {
                  duration: 2000, // Durée de l'animation en millisecondes
                  easing: 'easeOutExpo' // Type d'effet d'animation
                }
            },
            title: {
                text: 'Evolution du portefeuille de 2022 à 2023 selon les segments',
                align: 'center'
            },
            subtitle: {
                text:
                    'Source: <a target="_blank" ' +
                    'href="https://dgpe.gouv.ci/fr/">DGPE</a>',
                align: 'left'
            },
            xAxis: {
                categories: ['Structures à caractère non commerciale', 'Opérateurs publics de service public', 'Champions nationnaux', 'Opportunité de DSP', 'Gestion patrimoniale', 'Total'],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
               
            },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                        animation: {
                            duration: 1000,
                            easing: 'easeOutBounce',
                        },
                        
                    }
                },
            series: [
                {
                    name: '2022',
                    data: [18, 5, 9, 11, 44, 87],
                    color: '#E89E01'
                },
                {
                    name: '2023',
                    data: [18, 5, 9, 11, 44, 87],
                    color:'#F6C400'
                }
            ]
    });
}






/*CHART CODE PART PUBLIQUE */

function createChart6(){
  Highcharts.chart('container6', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Text exemple'
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            animation: {
              duration: 2000 // Durée de l'animation en millisecondes
            },
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Water',
                    y: 55.02
                },
                {
                    name: 'Fat',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Carbohydrates',
                    y: 1.09
                },
                {
                    name: 'Protein',
                    y: 15.5
                },
                {
                    name: 'Ash',
                    y: 1.68
                }
            ]
        }
    ]
  });
}

function createChart9() {
  Highcharts.chart('container9', {
    chart: {
        type: 'column',
        animation: {
          duration: 2000, // Durée de l'animation en millisecondes
          easing: 'easeOutExpo' // Type d'effet d'animation
        }
    },
    title: {
        align: 'left',
        text: 'A périmètre constant, le chiffre connaît une hausse depuis 2020. En 2023 la performance est portée par le secteur hydrocarbure (46%) et le secteur minier (20%).'
    },
    subtitle: {
        align: 'left',
        text: 'Source <a href="#">SEF DGPE</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    },

    series: [
        {
            name: 'CHIFFRE D’AFFAIRES (Mds FCFA)',
            colorByPoint: true,
            data: [
                {
                    name: '2019',
                    y: 5039,
                    color: '#7E9F6C'
                },
                {
                    name: '2020',
                    y: 4813,
                    color: '#7E9F6C'
                },
                {
                    name: '2021',
                    y: 5438,
                    color: '#7E9F6C'
                },
                {
                    name: '2022',
                    y: 7486,
                    color: '#7E9F6C'
                },
                {
                    name: '2023',
                    y: 7792,
                    color: '#7E9F6C'
                },
                
            ]
        }
    ],

});
}

function createChart10(){
  Highcharts.chart('container10', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Les progressions les plus favorables : Roxgold (+62 Mds), SMI et PETROCI (+38 Mds). '
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="#" ' +
            'target="_blank">SEF DGPE</a>'
    },
    xAxis: {
        categories: [
            '2019', '2020', '2021', '2022', '2023'
        ]
    },
    yAxis: {
      title: {
          text: ' '
      }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'RESULTAT D’EXPL. (Mds FCFA)',
        data: [
            508, 634, 794, 1119, 1158
        ],
        color:"#7E9F6C"
    }]
  });

}
function createChart11(){
  Highcharts.chart('container11', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'De 2019 à 2023, le résultat net du portefeuille a plus que doublé.Le résultat net en 2023 est porté par les sociétés PMY, ORANGE CI et la SIR.'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="#" ' +
            'target="_blank">SEF DGPE</a>'
    },
    xAxis: {
        categories: [
            '2019', '2020', '2021', '2022', '2023'
        ]
    },
    yAxis: {
      title: {
          text: ' '
      }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'RESULTAT NET (Mds FCFA)',
        data: [
            399, 488, 531, 804, 851
        ],
        color:"#7E9F6C"
    }]
  });

}
function createChart12(){
  Highcharts.chart('container12', {
    chart: {
        type: 'waterfall'
    },

    title: {
        text: 'Recettes fiscales et non fiscales 2023 (Mds FCFA)'
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: ' '
        }
    },

    legend: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<b> {point.y}</b>'
    },

    series: [{
        data: [{
            name: 'Dividende net Etat',
            y: 65,
            color:"#8EC6A1"
        }, {
            name: 'IRVM',
            y: 81,
            color:"#8EC6A1"
        }, {
            name: 'Impôts et taxes',
            y: 217,
            color:"#969696"
        }, {
            name: 'Impôts BIC',
            y: 295,
            color:"#969696"
        }, {
            name: 'Recettes fisacles et non fiscales',
            y: 658,
            isIntermediateSum: true,
            color:"#4A6A51"
        }],
        dataLabels: {
            enabled: true,
        },
        pointPadding: 0
    }]
  });

}

function createChart13() {
  Highcharts.chart('container13', {
    chart: {
        type: 'column',
        animation: {
          duration: 2000, // Durée de l'animation en millisecondes
          easing: 'easeOutExpo' // Type d'effet d'animation
        }
    },
    title: {
        align: 'left',
        text: 'Le repli de 2020, s’explique essentiellement par les chocs COVID, tandis que les pics de 2022 et 2023 s’expliquent par l’embellie du secteur des hydrocarbures avec les effets de la crise ukrainienne.'
    },
    subtitle: {
        align: 'left',
        text: 'Source <a href="#">SEF DGPE</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    },

    series: [
        {
            name: 'CHIFFRE D’AFFAIRES (Mds FCFA)',
            colorByPoint: true,
            data: [
                {
                    name: '2019',
                    y: 2414,
                    color: '#928852'
                },
                {
                    name: '2020',
                    y: 1971,
                    color: '#928852'
                },
                {
                    name: '2021',
                    y: 2752,
                    color: '#928852'
                },
                {
                    name: '2022',
                    y: 4374,
                    color: '#928852'
                },
                {
                    name: '2023',
                    y: 4425,
                    color: '#928852'
                },
                
            ]
        }
    ],

  });
}
function createChart14() {
  Highcharts.chart('container14', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Le résultat d’exploitation des entreprises publiques a connu une progression constante depuis 2019.'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="#" ' +
            'target="_blank">SEF DGPE</a>'
    },
    xAxis: {
        categories: [
            '2019', '2020', '2021', '2022', '2023'
        ]
    },
    yAxis: {
      title: {
          text: ' '
      }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'RESULTAT D’EXPL. (Mds FCFA)',
        data: [
            117, 125, 217, 411, 417
        ],
        color:"#928852"
    }]
  });
}
function createChart15() {
  Highcharts.chart('container15', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Les entreprises publiques enregistrant les résultats nets les plus élevés en 2023 sont : Sir (95 Mds), BNI (35 Mds), PETROCI (21 Mds.)'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="#" ' +
            'target="_blank">SEF DGPE</a>'
    },
    xAxis: {
        categories: [
            '2019', '2020', '2021', '2022', '2023'
        ]
    },
    yAxis: {
      title: {
          text: ' '
      }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'RESULTAT NET (Mds FCFA)',
        data: [
            22, 101, 92, 230, 257
        ],
        color:"#928852"
    }]
  });
}
function createChart16() {
  Highcharts.chart('container16', {
    chart: {
        type: 'waterfall'
    },

    title: {
        text: 'Recettes fiscales et non fiscales 2023 (Mds FCFA)'
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: ' '
        }
    },

    legend: {
        enabled: false
    },

    tooltip: {
        pointFormat: '<b> {point.y}</b>'
    },

    series: [{
        data: [{
            name: 'Dividende net Etat',
            y: 21,
            color:"#E0C580"
        }, {
            name: 'IRVM',
            y: 5,
            color:"#E0C580"
        }, {
            name: 'Impôts et taxes',
            y: 52,
            color:"#B0AFAF"
        }, {
            name: 'Impôts BIC',
            y: 144,
            color:"#B0AFAF"
        }, {
            name: 'Recettes fisacles et non fiscales',
            y: 222,
            isIntermediateSum: true,
            color:"#928852"
        }],
        dataLabels: {
            enabled: true,
        },
        pointPadding: 0
    }]
  });
}


const observerOptions = {
    threshold: 0.5 // Le graphique doit être au moins à moitié visible
};
createChart10();
createChart11();
createChart12();
createChart14();
createChart15();
createChart16();
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const chartId = entry.target.id;
            if (chartId === 'container3') {
              createChart3();
            }else if(chartId ==='container9'){
              createChart9();
            } else if(chartId ==='container10'){
              createChart10();
            }else if(chartId ==='container11'){
              createChart11();
            }else if(chartId ==='container12'){
              createChart12();
            }else if(chartId ==='container13'){
              createChart13();
            }else if(chartId ==='container14'){
              createChart14();
            }else if(chartId ==='container15'){
              createChart15();
            }else if(chartId ==='container16'){
              createChart16();
            }
            /* observer.unobserve(entry.target); */ // Stoppe l'observation après avoir créé le graphique
        }
    });
}, observerOptions);



// Observer les divs
observer.observe(document.getElementById('container3'));
observer.observe(document.getElementById('container9'));
observer.observe(document.getElementById('container10'));
observer.observe(document.getElementById('container11'));
observer.observe(document.getElementById('container12'));
observer.observe(document.getElementById('container13'));
observer.observe(document.getElementById('container14'));
observer.observe(document.getElementById('container15'));
observer.observe(document.getElementById('container16'));



const horizontalSections = gsap.utils.toArray('section.horizontal');

horizontalSections.forEach(function (sec) {
  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
  // Calculer la distance de défilement
  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

  // Animation de défilement horizontal pour chaque section
  gsap.fromTo(thisAnimWrap, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
  }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "power1.inOut", // Utilisation d'un easing pour un défilement fluide
    scrollTrigger: {
      trigger: sec,
      start: "top top",
      end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
      pin: thisPinWrap,
      scrub: 1, // Utiliser scrub pour un défilement fluide
      invalidateOnRefresh: true,
    }
  });

  // Animation supplémentaire sur les div `.box` à l'intérieur
  gsap.fromTo(thisAnimWrap.querySelectorAll('.box'), 
    { opacity: 0, scale: 0.8 }, // Animations de départ
    { 
      opacity: 1, 
      scale: 1, 
      stagger: 0.1, // Délai entre chaque box
      scrollTrigger: {
        trigger: thisAnimWrap, // Déclencheur pour les animations internes
        start: "top 80%", // Début des animations des div
        end: "bottom 20%",
        scrub: 1, // Utiliser scrub pour un défilement fluide
      }
    }
  );
});

document.querySelectorAll('.hr2').forEach((hr) => {
  gsap.from(hr, {
    width: '0px', // La largeur va s'étendre à 100%
    duration: 3, // Durée de l'animation (ajustée pour une meilleure expérience)
    scrollTrigger: {
      trigger: hr, // Chaque élément .hr est le déclencheur
      start: 'top 80%', // L'animation commence quand le haut de .hr atteint 80% de la hauteur de la fenêtre
      end: 'bottom top', // L'animation se termine quand le haut de .hr atteint le haut de la fenêtre
      scrub: true, // Lier l'animation au défilement pour un effet fluide
      markers: false, // Afficher les marqueurs pour visualiser le début et la fin de l'animation
      ease: 'power1.inOut', 
    }
  });
});
document.querySelectorAll('.hr3').forEach((hr) => {
  gsap.from(hr, {
    width: '0px', // La largeur va s'étendre à 100%
    duration: 3, // Durée de l'animation (ajustée pour une meilleure expérience)
    scrollTrigger: {
      trigger: hr, // Chaque élément .hr est le déclencheur
      start: 'top 80%', // L'animation commence quand le haut de .hr atteint 80% de la hauteur de la fenêtre
      end: 'bottom top', // L'animation se termine quand le haut de .hr atteint le haut de la fenêtre
      scrub: true, // Lier l'animation au défilement pour un effet fluide
      markers: false, // Afficher les marqueurs pour visualiser le début et la fin de l'animation
      ease: 'power1.inOut', 
    }
  });
});








gsap.defaults({overwrite: 'auto'});

// Configurer les éléments de contenu dans la section gauche
gsap.set(".left-content > *", { xPercent: -50, yPercent: -50 });

// Créer un ScrollTrigger pour épingler la section de gauche
const ST = ScrollTrigger.create({
  trigger: ".content-container",
  start: "top 10%",
  end: "bottom bottom",
  onUpdate: getCurrentSection,
  pin: ".left-content",

});

// Sélectionner tous les éléments marqués comme contenu
const contentMarkers = gsap.utils.toArray(".contentMarker");

// Configurer les animations pour les images et les textes
contentMarkers.forEach(marker => {
  marker.content = document.querySelector(`#${marker.dataset.markerContent}`);
  
  if (marker.content.tagName === "IMG") {
    gsap.set(marker.content, { transformOrigin: "center" });
    
    marker.content.enter = function() {
      gsap.fromTo(marker.content, { autoAlpha: 0, rotateY: -30 }, { duration: 0.3, autoAlpha: 1, rotateY: 0 });
    }
  } else if (marker.content.tagName === "VIDEO") {
    gsap.set(marker.content, { transformOrigin: "left center" });
    
    marker.content.enter = function() {
      gsap.fromTo(marker.content, { autoAlpha: 0, rotateY: 50 }, { duration: 0.3, autoAlpha: 1, rotateY: 0 });
    }
  }
  
  marker.content.leave = function() {
    gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
  }
});

// Fonction pour gérer la section courante en fonction du défilement
let lastContent;
function getCurrentSection() {
  let newContent;
  const currScroll = window.scrollY;
  
  // Trouver la section actuelle en fonction de la position de défilement
  contentMarkers.forEach(marker => {
    if (currScroll > marker.offsetTop - window.innerHeight/3) {
      newContent = marker.content;
    }
  });
  
  // Si la section actuelle est différente de la précédente, lancer l'animation
  if (newContent && (!lastContent || !newContent.isSameNode(lastContent))) {
    // Cacher l'ancienne section
    if (lastContent) {
      lastContent.leave();
    }
    
    // Afficher la nouvelle section
    newContent.enter();
    
    lastContent = newContent;
  }
}

// Désactiver ScrollTrigger sur les petits écrans
const media = window.matchMedia("screen and (max-width: 600px)");
ScrollTrigger.addEventListener("refreshInit", checkSTState);
checkSTState();

function checkSTState() {
  if (media.matches) {
    ST.disable();
  } else {
    ST.enable();
  }
}

// Sélectionner tous les éléments marqués comme contenu
const markers = gsap.utils.toArray(".contentMarker.animate");

// Configurer les animations pour chaque élément `contentMarker`
markers.forEach(marker => {
  gsap.fromTo(marker, 
    {
      opacity: 0 // Départ avec une opacité de 0
    },
    {
      opacity: 1, // Arrivée avec une opacité de 1
      duration: 1, // Durée de l'animation
      scrollTrigger: {
        trigger: marker,
        start: "top center", // L'animation commence quand le centre de l'élément atteint le centre de l'écran
        end: "bottom bottom", // L'animation se termine également au centre pour qu'elle se produise une seule fois
        scrub: true, // Pas de défilement fluide, l'animation se joue normalement
        once: false, // L'animation ne se joue qu'une seule fois
        markers: false // Afficher les marqueurs pour le débogage (facultatif)
      }
    }
  );
});

//MAISON DE LA STRATEGIE
gsap.fromTo('.triangle-up', 
  {
    opacity: 0 // Départ avec une opacité de 0
  },
  {
    opacity: 1, // Arrivée avec une opacité de 1
    duration: 1,
    scrollTrigger: {
      trigger: '.triangle-up',
      start: "top bottom", // L'animation commence quand le haut de l'élément atteint le centre de l'écran
      end: "bottom 80%", // L'animation se termine quand le bas de l'élément atteint le centre de l'écran
      scrub: 1, // Animation synchronisée au défilement
      once: false, // Animation se joue une seule fois
      markers: false // Activer pour déboguer
    }
  }
);


gsap.fromTo('.floor1', 
  {
    opacity: 0, // Départ avec une opacité de 0
    x:-100
  },
  {
    opacity: 1, // Arrivée avec une opacité de 1
    x:0,
    duration: 1,
    scrollTrigger: {
      trigger: '.triangle-up',
      start: "top center", // L'animation commence quand le haut de l'élément atteint le centre de l'écran
      end: "bottom center", // L'animation se termine quand le bas de l'élément atteint le centre de l'écran
      scrub: 1, // Animation synchronisée au défilement
      once: false, // Animation se joue une seule fois
      markers: false // Activer pour déboguer
    }
  }
);
gsap.fromTo('.floor2', 
  {
    opacity: 0, // Départ avec une opacité de 0
    x:100
  },
  {
    opacity: 1, // Arrivée avec une opacité de 1
    x:0,
    duration: 1,
    scrollTrigger: {
      trigger: '.floor1',
      start: "top center", // L'animation commence quand le haut de l'élément atteint le centre de l'écran
      end: "bottom 80%", // L'animation se termine quand le bas de l'élément atteint le centre de l'écran
      scrub: 1, // Animation synchronisée au défilement
      once: false, // Animation se joue une seule fois
      markers: false // Activer pour déboguer
    }
  }
);
gsap.fromTo('.floor3', 
  {
    opacity: 0, // Départ avec une opacité de 0
    x:-100
  },
  {
    opacity: 1, // Arrivée avec une opacité de 1
    x:0,
    duration: 2,
    scrollTrigger: {
      trigger: '.floor2',
      start: "top center", // L'animation commence quand le haut de l'élément atteint le centre de l'écran
      end: "bottom 80%", // L'animation se termine quand le bas de l'élément atteint le centre de l'écran
      scrub: 1, // Animation synchronisée au défilement
      once: false, // Animation se joue une seule fois
      markers: false // Activer pour déboguer
    }
  }
);

/* const floors = gsap.utils.toArray(".floor");
floors.forEach(floor => {
  gsap.fromTo(floor, 
    {
      opacity: 0, // Départ avec une opacité de 0
      y: 100 // Position de départ légèrement en dessous
    },
    {
      opacity: 1, // Arrivée avec une opacité de 1
      y: 0, // Position finale
      duration: .8, // Durée de l'animation
      scrollTrigger: {
        trigger: floor, // Utiliser chaque `floor` comme déclencheur
        start: "top center", // L'animation commence quand le haut de l'élément atteint le centre de l'écran
        end: "bottom center", // L'animation se termine quand le bas de l'élément atteint le centre
        scrub: true, // Animation synchronisée avec le défilement
        once: true, // L'animation se joue une seule fois
        markers: true // Afficher les marqueurs pour le débogage (facultatif)
      }
    }
  );
}); */


//VIDEO AUTOPLAY

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}


