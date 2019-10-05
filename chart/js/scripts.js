
$( document ).ready(function() {
  createCharts();
});

function createCharts(){
  var chart = c3.generate({
    bindto:'#expectancy-chart',
    data: {
        x: 'x',
        columns: [
            ['x', '2010', '2011', '2012', '2013', '2014', '2015','2016','2017','2018'],
            ['US', 78.54, 78.64, 78.74, 78.74, 78.84, 78.69, 78.69,78.6,78.7],
            ['Canada', 81.2, 81.45, 81.58, 81.77, 81.95, 82.13, 82.30,82.47,82.8]
        ]
    },
    axis: {
      y: {
        min:77,
        max:85,
        }
      }


});

var piechart = c3.generate({
    bindto:'#cause-chart',
    data: {
        // iris data from R
        columns: [
            ['Heart disease', 647457],
            ['Cancer', 599108],
            ['Accidents', 169936],
            ['Chronic lower respiratory diseases', 160201],
            ['Stroke', 146383],
            ['Alzheimer’s disease', 121404],
            ['Diabetes', 83564],
            ['Influenza and Pneumonia', 55672],
            ['Nephritis, nephrotic syndrome and nephrosis', 50633],
            ['Suicide', 47173]

        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var chart = c3.generate({
    bindto:'#child-chart',
    data: {

        columns: [
          ['Annual Number of Deaths',62412,62033,54342,49705,44769,44523,43942,20385,15630,13699,10831,8535,8407,8120,8047,7286,6818,6157,5909,1906,1235,927]

        ],
      type:'bar'
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Road accidents', 'Cancers','Malaria','Drowning','HIV/AIDS','Diarrheal diseases','Lower respiratory infections','Digestive diseases','Cardiovascular disease','Tuberculosis','Homicide','Nutritional deficiencies','Liver disease','Suicide','Kidney disease','Protein-energy malnutrition','Respiratory disease','Hepatitis','Fire','Diabetes mellitus','Natural disasters','Heat-related deaths']
        },
        rotated:true,
    }

});


};
