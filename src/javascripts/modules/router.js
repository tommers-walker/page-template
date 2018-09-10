import page from 'page';
import $ from 'jquery';
const contentful = require('contentful');

window.$ = $;

page.base('/')

page('*', function(context){
  if (context.path != '/') {
    console.log(context)
  }
});

page();

const client = contentful.createClient({
  space: 'ce18t4hpaqjt',
  accessToken: '14fed53c6b6c0119ee5f57b6a25e9be73ab269f3ca4f63f08cfe674085bb0aad'
})

client.getEntries({
  content_type: '5KMiN6YPvi42icqAUQMCQe',
  'fields.title': 'Likes'
})
.then(function(entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function(entry) {
    console.log(entry)
  })
})

const links = document.querySelectorAll('.js-link');

const handleRoute = function(path) {
  console.log(path)
}

const router = {
  init() {
    // for (let i = 0; i < links.length; i++) {
    //   links[i].addEventListener('click', function(e) {
    //     // e.preventDefault();
    //     // let href = e.target.getAttribute('href');
    //     // handleRoute(href)
    //   });
    // }


  }
}

export { router }
