~ I was having some trouble and felt I just needed to move on to try and finish the rest of the class ~



**PageTurnerBookApp**

Lesson 7 Hands-On 5 points

#Directions

Now that you have learned about Ionic, it is now time to try working with it yourself. Please zip your project directory and upload when you are finished. This Hands-On will be graded, so be sure you complete all requirements.

In this hands-on exercise, you will build a page-turner book app that can be used to display a novel, or a sequence of children's stories, or a comic strip collection, or any book with a simple chapter structure. Follow the directions below and if you have any questions reach out to your instructor/mentor.

1. Build an Apache Cordova app using Ionic that implements a page-turner book app that can be used to display a sequence of content pages in a book. Each content page contains an optional chapter title text, followed with a combination of text and image content, as well as a content page number that starts at 1. Each content page should also provide navigation to the next and previous content pages in the book.

2. The first page to be displayed is the book cover page, and the second page is the TOC page (table of contents). After that there is an arbitrary sequence of content pages that may or may not contain a chapter title text. The TOC page should provide navigation links to each of the content pages that contain a chapter title text, using links that display the chapter title text of those content pages.

3. The initial screen displayed when you start the app for the first time will be the cover page, which contains the book title text and optionally any additional content, such as an image. Tapping on the cover page should navigate to the TOC page. From there you can either navigate to the next content page in the normal way, or you can navigate to a particular content page by tapping on the chapter title text listed in the table of contents.

4. In this assignment, you do not have to implement any data persistence. That means that when you start the app again in the future, it does not have to remember what page you were last on. It is OK to always just go back to the cover page every time. Storing and retrieving the last known current page as a book mark would be a nice feature to include, but would add too much development time to this project. However, if you do find that you have time to add that feature, feel free to try it out!

5. Of course, you can use google search and stackoverflow.com, as well as the many available tutorials and videos on the web. You can also use any GitHub repos that you can find that might help you develop your own solution. If you find a GitHub example that is very close to these requirements, do try to customize in some interesting ways, because you will want a distinctive code example on your own GitHub account to show potential employers what you can do. However, you are permitted to copy and use any public domain code in your solution that you find in any resources that you may find helpful.

6. Provide the link to your project solution on GitHub to your instructor for verification.

The following might help to understand the structure of the book content:

Cover page:

- Book title text
- Optionally any additional cover page information, such as an image.
- Next page navigation to the TOC page

TOC page (table of contents):

- Direct navigation links to each of the content pages that contain chapter title text
- Next page navigation to the first content page
- Previous page navigation to the cover page

Content page:

- Optional chapter title text (only for the first page in a chapter)
- Text and image content
- Content page number
- Direct navigation link to the TOC page
- Next page navigation to the next content page, if there is one
- Previous page navigation to the previous page, if there is one

The first content page in the book should have chapter title text. All subsequent content pages may or may not have chapter title text.

Don't worry or spend too much time on creating the text and images of the actual content pages. It is most important that you get the page navigation working properly. Just create a enough content pages to show that your navigation logic is working properly.

Note that it is important that you do not infringe on copyright when you implement your text and image content. To avoid copyright infringement, either create your own unique content from scratch, or to save time, you could use auto-generated place holder text and images using the links shown below. After you get that working, and if you have enough time, you can put some interesting content page text and images, such as your own children's story or comic strip. The following links provide placeholder text and image resources that you can use.

Placeholder text

Placeholder images