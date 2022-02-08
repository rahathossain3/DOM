console.log('i am from summary js file');

const blogs = document.getElementsByTagName('p');
//consol.log(blogs);
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';

}
const harun = document.getElementById('special-blog');
// harum.innerText = 'New harun';

harun.innerHTML = `
<h4> spachile inner html </h4>
<div>
    <ul>
    <li> hi </li>
    <li> ok </li>
    </ul>
</div>

`


const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//creat element
const friend = document.createElement('li');                //creat element
friend.innerText = 'Friend-11';                            // add text
friends.appendChild(friend);                            // appendChile