export const environment = {
  production: false,
  userApiUrl: "http://localhost:8092/users",
  registerURL: "register",
  userLoginUrl: "login",
  sellerLoginUrl: "seller-login",
  sellerRegister: "seller-register",
  activateUser: "activ",
  addAddress: "address/add",

  bookApiUrl: "http://localhost:8091/books",
  getBooksList: "getAllBooks",
  getSellerBookList: "sellerBooks",
  addbook: "add",
  deleteBook: "delete",
  addBookImage: "upload",

  cartApiUrl: "http://localhost:8091/orders",
  addToBag: "make-order",
  addToCartWithUser: "make-user-order",
  cartList: "cart-list",
  userCartList: "user-cart-list",
  deleteOrder: "remove-order",
  updateQuantity: "update-quantity",
  confirmOrder: "confirm-order",
};
