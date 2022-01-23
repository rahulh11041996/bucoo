export const DEFAULT_BOOKDATA_STATE = [
    {
        bookId: 'red_white002',
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
]

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
    image: 'https://images-na.ssl-images-amazon.com/images/I/71skR7IaVEL.jpg',
    authorName: '',
    country: '',
    aboutAuthor: '',
    authorImage: 'https://images.gr-assets.com/authors/1608160367p5/17949486.jpg'
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
    WHY: "Why BuCoo ?"
}

export const ICONS = {
    BOOK_ICON: "fas fa-book-alt",
    STAR: "fa-star",
    THUMBS_UP: "fa-thumbs-up",
    SHIELD_CHECK: "fa-shield-check",
    TRUCK: "fa-truck"
}