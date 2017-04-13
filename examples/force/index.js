var drawCircles = function (domSelector) {

  var colors = {
    anger: '#a2524f',
    fear: '759274',
    joy: '#c58a5c',
    sadness: '#3a647e'
  };

  var movies = [
    {
      anger: 0.15,
      fear: 0.18,
      joy: 0.23,
      sadness: 0.29,
      name: 'roman holiday'
    },
    {
      anger: 0.11,
      fear: 0.04,
      joy: 0.43,
      sadness: 0.17,
      name: 'breakfast at tiffanies'
    }
  ];

  var drawMovie = function(movie, size) {
    size = size || 200;
    var keys = ['anger','fear','joy','sadness']

    var values = keys.map(function(key) {
      var val = movie[key];
      var r   = val * 100;
      return {
        label: key,
        value: val,
        r: r,
        color: colors[key]
      };
    });

    var container = d3.select(domSelector)
      .append('div')
      .attr('class','movieContainer');
    var title = container
      .append('div')
      .attr('class','title')
      .text(movie.name)

    var svg = container
      .append('svg')
      .attr('width', size)
      .attr('height', size)

    d3.packSiblings(values);

    var circle = svg.selectAll('circle')
      .data(values)
      .enter()
      .append('circle')
      .attr('r', function (d) { return d.r })
      .attr('cx', function (d) { return d.x + size/2; })
      .attr('cy', function (d) { return d.y + size/2; })
      .attr('fill', function (d) { return d.color; });


  };
  for(var i = 0; i < movies.length; i++) {
    drawMovie(movies[i]);
  }
};