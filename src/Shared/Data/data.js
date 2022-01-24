export const DEFAULT_BOOKDATA_STATE = []

export const DEFAULT_SNACKBAR_STATE = {
    isShow: false,
    snackbarContent: '',
    bookName: ''
}

export const UPDATED_BOOK_SNACKBAR_MESSAGE = 'details is updated sucessfully';


export const DEFAULT_ADD_BOOK_ERROR_STATE = {
    bookName: '',
    description: '',
    pages: '',
    language: '',
    weight: '',
    publisher: '',
    price: '',
    image: '',
    authorName: '',
    country: '',
    aboutAuthor: '',
    authorImage: ''
}

export const DEFAULT_ADD_BOOK_FORM_STATE = {
    bookName: '',
    description: '',
    pages: '',
    language: '',
    weight: '',
    publisher: '',
    price: '',
    image: '',
    authorName: '',
    country: '',
    aboutAuthor: '',
    authorImage: ''
}


export const DICTIONARY = {
    ADD_NEW_BOOK_MODAL_HEADER: "New Book Added",
    VIEW_ADDED_BOOK: "View Added Book",
    UPDATE_RECORD: 'Update Record',
    ADD_NEW_BOOK_TITLE: 'Add To Book List',
    EDIT_BOOK_TITLE : 'Edit Book Details',
    ADD_BOOK_TITLE: 'Add New Book',
    CANCEL: 'Cancel',
    VIEW_DETAILS: 'View Details',
    FORM : {
        BOOK_NAME: "Book Name", 
        PRICE: "Price",
        AUTHOR_NAME: "Author Name",
        DESCRIPTION: "Description",
        ABOUT_AUTHOR: "About Author",
        AUTHOR_IMAGE: "Author Image Url",
        NATIONALITY: "Author Nationality",
        LANGUAGE: "Language",
        PAGES: "Pages",
        WEIGHT: "Book Weight",
        PUBLISHER: "Publisher",
        BOOK_IMAGE: "Book Image Url"
    },
    DELETE_BOOK_BUTTON: "Delete Book",
    HOME: "Home",
    VIEW_BOOKS: "View Books",
    ADD_BOOK: "Add Book",
    TITLE: "BuCoo",
    BACK_TO_SCHOOL: "BACK TO SCHOOL",
    OFFER: "Special 50% Off",
    COMMUNITY: "for our student community",
    LOREM: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos impedit nam ut ipsa accusamus placeat illum iusto molestias tenetur officia, nesciunt voluptates consequuntur perferendis facere rem! Nam sit obcaecati doloremque?",
    GET_DEALS: "Get The Deal",
    QUICK_DELIVERY: "Quick Delivery",
    SECURE_PAYMENT: "Secure Payment",
    BEST_QUALITY: "Best Quality",
    RETURN: "Return Guarantee",
    WHY: "Why BuCoo ?",
    SUCCESSFULLY_ADDED: "New book is successfully added to the book list. You can view the added book by clicking",
    BUTTON: "button",
    DELETE_CONFRIMATION: "Are you sure want to delete",
    DELETE_CONFRIMATION_SECOND: "? You can't undo this action",
    AUTHOR: "Author",
    WEIGHT: "Weight",
    PUBLISHER: "Publisher",
    LANGUAGE: "Language",
    NO_OF_PAGES: "No Of Pages",
    DETAILS: "Details",
    BUY_NOW: "Buy Now",
    NO_BOOK_DETAILS: "OOPS! Nothing to show here. Select a book to view book details",
    BOOK_DETAILS: "Book Details",
    NO_BOOK_IN_SHELF: "OOPS!!! No books found in self. Add new books by clicking",
    YES_DELETE: 'Yes, Delete',
    SEARCH: 'Search Books',
    NO_SEARCH_RESULT: "No Search Result Found"
}

export const ICONS = {
    BOOK_ICON: "fas fa-book-alt",
    STAR: "fa-star",
    THUMBS_UP: "fa-thumbs-up",
    SHIELD_CHECK: "fa-shield-check",
    TRUCK: "fa-truck",
    SAD: "fas fa-sad-tear",
    EDIT: "fas fa-edit",
    TRASH: "fas fa-trash-alt",
    PLUS: 'fas fa-plus',
    TIMES: 'far fa-times',
    TIMES_BOLD: 'fas fa-times',
    SEARCH: 'fas fa-search'
}


export const ACTIONS = {
    CREATE_NEW_BOOK : "createBook",
    EDIT_BOOK : "editBook",
    DELETE_BOOK: "deleteBook"
}


export const BASE64 = 'data:image/png;base64,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';


export const PREFILL_FORM_DATA = {
    "harry" : {
        bookName: 'Harry Potter and the Philosopher\'s Stone',
        description: "Harry Potter's life is miserable.His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard.A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry. After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid.But even within the Wizarding community, he is special.He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry. Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands.But doing so will bring him into contact with forces more terrifying than he ever could have imagined. Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high- stakes adventures to come",
        pages: '309',
        language: 'English',
        weight: '300 g',
        publisher: 'Scholastic Inc',
        price: '1500',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg',
        authorName: 'J.K. Rowling',
        country: 'London, England',
        aboutAuthor: 'Anticipating that the target audience of young boys might not want to read a book written by a woman.',
        authorImage: 'https://images.gr-assets.com/authors/1596216614p5/1077326.jpg'
    },
    "lord" : {
        bookName: 'The Lord of the Rings',
        description: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy- first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle- earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.",
        pages: '1216',
        language: 'English',
        weight: '500 g',
        publisher: 'Houghton Mifflin Harcourt',
        price: '2500',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41uHU3QnKAL._SX331_BO1,204,203,200_.jpg',
        authorName: 'J.R.R. Tolkien',
        country: 'South Africa',
        aboutAuthor: 'John Ronald Reuel Tolkien, CBE was an English writer, poet, WWI veteran, philologist, and university professor',
        authorImage: 'https://images.gr-assets.com/authors/1622832627p5/656983.jpg'
    },
    "red" : {
        bookName: 'Red, White & Royal Blue',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic',
        pages: '432',
        language: 'English',
        weight: '12.8 ounces',
        publisher: 'Griffin, 2019',
        price: '300',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71skR7IaVEL.jpg',
        authorName: 'Casey McQuiston',
        country: 'New York',
        aboutAuthor: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        authorImage: 'https://images.gr-assets.com/authors/1608160367p5/17949486.jpg'
    }
}