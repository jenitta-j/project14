function addPost() {
  const postInput = document.getElementById("postInput");
  const timeline = document.getElementById("timeline");

  if (postInput.value.trim() === "") {
    alert("Please write something before posting.");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";
  post.textContent = postInput.value;

  // Add to top
  timeline.insertBefore(post, timeline.firstChild);

  postInput.value = ""; // Clear input
}
