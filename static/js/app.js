
url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

d3.json("samples.json").then(function(data) {
        // Handle the loaded JSON data here
        console.log(data);
        // Perform data visualization or any other operations
        data.forEach(function(d, i) {
                console.log(`Element ${i}: ${d}`);
              });

    }).catch(function(error) {
        // Handle errors if any
        console.error("Error loading JSON data: ", error);
    });
     
    
// Sample JSON string
//var jsonString = '';

// Parse the JSON string into a JavaScript object
//var jsonArray = JSON.parse(jsonString);

// Loop through the JSON array
//jsonArray.forEach(function(item) {
    // Loop through each object in the JSON array
    //for (var key in item) {
        //if (item.hasOwnProperty(key)) {
            // Access the inner array by its key
            //var innerArray = item[key];
            // Loop through the inner array
            //innerArray.forEach(function(element) {
                //console.log(element);
           // });
        //}
   // }
//});

var array = data.samples;
for (var i = 0; i < array.length; i++) {
        
        //if
        //(otu_id = data.samples[0].filter(function(item) {
                //return item.otu_ids < top10}));
        
        //else {
        //otu_labels  = data.samples[0].filter()
               // return item.otu_labels < top10};
        
        //else {
        //sample_values = data.samples[0].filter()
                //return item.sample_values < top10};

        //console.log(filteredData);

        let otu_id = data.samples[0].otu_ids;
        console.log(otu_id)

        let otu_labels = data.samples[0].otu_labels;
        console.log(otu_labels)

        let sample_values = data.samples[0].sample_values;
        console.log(sample_values) 

        var top10 = jsonData.slice(0, 10);

        // Log the top 10 results
        console.log(top10);


        // Assign `x` and `y` values for the Plotly trace object
        let trace1 = {
                type: 'bar',
                x:(data => samples.otu_id),
                y: (data => samples.sample_values),
                orientation: 'h'
              };

        let data = [trace1]

        let layout = {
                title: title
              };
              
        Plotly.newPlot("bar", data, layout);

        console.log(bar);

        //Bubble chart      
        var trace2 = {
                x: [otu_ids],
                y: [sample_values],
                text:['<br>[otu_ids]'],
                mode: 'markers',
                marker: {
                color: [otu_ids]['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
                opacity: [1, 0.8, 0.6, 0.4],
                size: [sample_values],
                }
        };
        
        var info = [trace2];
        
        var look = {
                title: 'OTU ID',
                showlegend: true,
                height: 600,
                width: 600
        };
        
        Plotly.newPlot('bubble', info, look);

        console.log(bubble);

// Sample metadata JSON object
var metadata = data.metadata[0]
    
    // Loop through the object and display key-value pairs
    for (var key in metadata) {
        if (metadata.hasOwnProperty(key)) {
            console.log(key + ": " + metadata[key]);
        }
    }
}
