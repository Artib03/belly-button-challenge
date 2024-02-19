
url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

d3.json(url).then(diversitydata =>  processdata(diversitydata));

function processdata(mydata){

        console.log(mydata);
        
for (let i = 0; i < mydata.length; i++) {
        row = mydata[i]}

        otu_id = mydata.samples[0].otu_ids;
        console.log(otu_id)

        otu_labels = mydata.samples[0].otu_labels;
        console.log(otu_labels)

        sample_values = mydata.samples[0].sample_values;
        console.log(sample_values) 

        // // Assign `x` and `y` values for the Plotly trace object
        let trace1 = {
                type: 'bar',
                x: mydata.sample_values,
                y: mydata.otu_id,
                orientation: 'h'
              };

        let data = [trace1]
              
        Plotly.newPlot("plot", data);
              }


        //var trace2 = {
               // x: [1, 2, 3, 4],
                //y: [10, 11, 12, 13],
                //mode: 'markers',
                //marker: {
                //color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
                //opacity: [1, 0.8, 0.6, 0.4],
                //size: [40, 60, 80, 100]
                //}
        //};
        
        //var data = [trace1];
        
       // var layout = {
               // title: 'Marker Size and Color',
                //showlegend: true,
               // height: 600,
               // width: 600
        //};
        
        //Plotly.newPlot('myDiv', data, layout);
      