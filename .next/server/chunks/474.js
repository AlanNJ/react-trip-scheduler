"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 5099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ys": () => (/* binding */ LOGIN_USER),
/* harmony export */   "iW": () => (/* binding */ INITIAL_DATA),
/* harmony export */   "Wb": () => (/* binding */ LOGOUT_USER),
/* harmony export */   "QE": () => (/* binding */ SET_USER)
/* harmony export */ });
const LOGIN_USER = "LOGIN_USER";
const INITIAL_DATA = "INITIAL_DATA";
const LOGOUT_USER = "LOGOUT_USER";
const SET_USER = "SET_USER";


/***/ }),

/***/ 3474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pH": () => (/* binding */ loginUser),
/* harmony export */   "gc": () => (/* binding */ getInitial),
/* harmony export */   "ni": () => (/* binding */ logOut)
/* harmony export */ });
/* unused harmony exports getInitialData, logoutUser */
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5099);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);



const getInitialData = (data)=>{
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_2__/* .INITIAL_DATA */ .iW,
        payload: data
    };
};
const setUser = (data)=>{
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_2__/* .SET_USER */ .QE,
        payload: data
    };
};
const logoutUser = ()=>{
    return {
        type: _action_types__WEBPACK_IMPORTED_MODULE_2__/* .LOGOUT_USER */ .Wb,
        payload: null
    };
};
const loginUser = (data)=>{
    return (dispatch)=>{
        axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:3000/Users").then((res)=>{
            res.data.forEach((element)=>{
                if (data.email === element.email && data.password === element.password) {
                    console.log(element);
                    dispatch(setUser(element));
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("login successful");
                    window.localStorage.setItem("User", JSON.stringify(element));
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("no users found");
                }
            });
        });
    };
};
const getInitial = ()=>{
    return (dispatch)=>{
        //console.log("hello");
        //window.localStorage.getItem("login");
        const data = window.localStorage.getItem("User");
        //console.log(JSON.parse(data));
        dispatch(getInitialData(JSON.parse(data)));
    };
};
const logOut = ()=>{
    console.log("hh");
    return (dispatch)=>{
        dispatch(logoutUser());
    };
};


/***/ })

};
;