//import logo from './logo.svg';

const styles= {
  backgroundColor: `#e6f2ff`,
  border:  `#4d004d 3px solid`,
  padding:10,
  para:{
    backgroundColor: `#ffffff`
  }
};

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
];


function News({ id, title, intro}) {
  return(
    <div style={styles}>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p style={styles.para}>{intro.slice(0,25)+`...`}</p>
    </div>
  );
}

function BlogTile({ id, title, intro }) {
   return(
        posts.map(( elem, index ) => (
        <News key={`news-${index}`} id={elem.id} title={elem.title} intro={elem.intro} />
    )));};

function App() {
  return (
    <div>
        <BlogTile />
    </div>
  );
}

export default App;