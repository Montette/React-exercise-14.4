


var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: 'img/harry.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'img/lion.jpg'
    },
    {
        id: 3,
        title: 'Ojciec Chrzestny',
        desc: 'Film o rodzinie mafijnej',
        src: 'img/dad.jpg'
    },
    {
        id: 4,
        title: 'Lot nad kukułczym gniazdem',
        desc: 'Film o pacjencie szpitala psychiatrycznego',
        src: 'img/cuckoo.jpg'
    },
    {
        id: 5,
        title: 'Milczenie Owiec',
        desc: 'Film o seryjnym mordercy',
        src: 'img/silence.jpg'
        
    }
    
];


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});
var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});
var MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired  
    
  },
  render: function () {
    return (
      React.createElement('figure',{},
      React.createElement('img', {
        src: this.props.poster,
        alt: this.props.title
      })
    )
      
    )
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      React.createElement('li', {
          id: this.props.movie.id
        },
        React.createElement(MovieTitle, {
          title: this.props.movie.title
        }),
        React.createElement(MovieDesc, {
          desc: this.props.movie.desc
        }),
        React.createElement(MoviePoster, {
          poster: this.props.movie.src,
          title: this.props.movie.title,
        })
      )
    )
  },
});

var MoviesList = React.createClass({
  render: function () {
    return (React.createElement('ul', {}, moviesElements))
  }
});

var moviesElements = movies.map(function (movie) {
  return React.createElement(Movie, {
    key: movie.id,
    movie: movie
  })
})



var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {})
  );
ReactDOM.render(element, document.getElementById('app'))