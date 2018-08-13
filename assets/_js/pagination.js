const Pagination = {
  postsContainer: document.querySelector('.archive'),
  paginationContainer: document.querySelector('.archive-pagination'),
  postsList: null,
  totalNumPosts: 0,
  numberOfPages: 0,
  currentPage: 1,
  numberPerPage: 4,
  getPosts() {
    const posts = this.postsContainer.querySelectorAll('.post-list')
    console.log(posts)
    this.postsList = Array.from(posts)
    this.totalNumPosts = this.postsList.length
    this.numberOfPages = this.totalNumPosts / this.numberPerPage
  },
  getNumberOfPages() {
    return Math.ceil(this.events.length / this.numberPerPage)
  },
  nextPage() {
    this.currentPage += 1
    this.loadList()
  },
  previousPage() {
    this.currentPage -= 1
    this.loadList()
  },
  firstPage() {
    this.currentPage = 1
    this.loadList()
  },
  lastPage() {
    this.currentPage = this.numberOfPages
    this.loadList()
  },
  loadList() {
    // var begin = ((this.currentPage - 1) * this.numberPerPage);
    // var end = begin + numberPerPage;
    // for (i = 0; i < pageList.length; i++) {
    //   pageList[i].classList.add("not-visible"); // make the old list invisible
    // }
    // pageList = events.slice(begin, end);
    // drawList();
    // check();
  },
  drawList() {
    // for (i = 0; i < pageList.length; i++) {
    //   pageList[i].classList.remove("not-visible");
    // }
  },
  check() {
    // document.getElementById("next").disabled = this.currentPage == numberOfPages ? true : false;
    // document.getElementById("previous").disabled = this.currentPage == 1 ? true : false;
    // document.getElementById("first").disabled = this.currentPage == 1 ? true : false;
    // document.getElementById("last").disabled = this.currentPage == numberOfPages ? true : false;
  },
  paginationBtns() {
    console.log('test')
  }
}

function archivePagination() {
  Pagination.getPosts()
  Pagination.paginationContainer.innerHTML = Pagination.totalNumPosts
}

export default archivePagination