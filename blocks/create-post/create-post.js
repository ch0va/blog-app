const btnPublic = document.querySelector(`.create-post__btn-pub`);

const line = document.querySelector(`.line__posts`);

let posts = [];

btnPublic.addEventListener(`click`, function () {
  if (isInputNotEmpty(inputHeader) && isInputNotEmpty(inputText)) {
    const post = getPost();
    addPost(post);
    publishPosts();
    cleanFields();
  }
});

function getPost() {
  const header = inputHeader.value;
  const text = inputText.value;
  const dataAndTime = getDate();
  return {
    header: header,
    text: text,
    dataAndTime: dataAndTime,
  };
}

function isInputNotEmpty(input) {
  if (input.value.trim() !== "") {
    return input.value;
  } else {
    input.classList.add(`input-text__field_incorrect`);
  }
}

function addPost(postObject) {
  posts.unshift(postObject);
}

function getPosts() {
  return posts;
}

function publishPosts() {
  const posts = getPosts();
  let postsHTML = ``;

  posts.forEach((post) => {
    postsHTML += ` <li class="post" id="post_${posts.indexOf(post)}">
    <h3 class="header-lvl-3 post__header">${post.header}</h3>
    <p class="post__text">${post.text}</p>
    <div class="post__footer">
      <p class="post__data-and-time">${post.dataAndTime}</p>
    </div>
    </li>`;
  });
  line.innerHTML = postsHTML;
}

function cleanFields() {
  inputHeader.value = ``;
  inputText.value = ``;
  inputTextCounter.innerHTML = null;
  inputHeaderCounter.innerHTML = null;
}
