(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./actions/action-types.js
var action_types = __webpack_require__(5099);
;// CONCATENATED MODULE: ./reducers/userReducer.js

const initialState = {
    user: null,
    login: false
};
const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case action_types/* SET_USER */.QE:
            return {
                ...state,
                user: action.payload,
                login: true
            };
        case action_types/* LOGIN_USER */.Ys:
            return {
                ...state,
                user: action.payload,
                login: true
            };
        case action_types/* INITIAL_DATA */.iW:
            return {
                ...state,
                user: action.payload,
                login: true
            };
        case action_types/* LOGOUT_USER */.Wb:
            return {
                ...state,
                user: action.payload,
                login: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const userReducer = (loginReducer);

;// CONCATENATED MODULE: ./reducers/rootReducer.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    allUsers: userReducer
});
/* harmony default export */ const reducers_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./store/index.js




const composedEnhancer = (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
const store = (0,external_redux_namespaceObject.createStore)(reducers_rootReducer, composedEnhancer);
/* harmony default export */ const store_0 = (store);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__(3474);
;// CONCATENATED MODULE: ./components/SideNav.js


const SideNav = ()=>{
    const openNav = ()=>{
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };
    const closeNav = ()=>{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    };
    return(/*#__PURE__*/ _jsxs("div", {
        className: "sidenav-container",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                id: "mySidenav",
                class: "sidenav",
                children: [
                    /*#__PURE__*/ _jsx("a", {
                        href: "javascript:void(0)",
                        class: "closebtn",
                        onclick: closeNav,
                        children: "\xd7"
                    }),
                    /*#__PURE__*/ _jsx("a", {
                        href: "#",
                        children: "About"
                    }),
                    /*#__PURE__*/ _jsx("a", {
                        href: "#",
                        children: "Services"
                    }),
                    /*#__PURE__*/ _jsx("a", {
                        href: "#",
                        children: "Clients"
                    }),
                    /*#__PURE__*/ _jsx("a", {
                        href: "#",
                        children: "Contact"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                id: "main",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        children: "Sidenav Push Example"
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: "Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened."
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "span-tag",
                        onclick: openNav,
                        children: "☰ open"
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Nav.js









const Nav = (props)=>{
    (0,external_react_.useEffect)(()=>{
        props.getData();
    }, [
        props.user.user && props.user.user.id
    ]);
    const logoutUser = (e)=>{
        console.log("hhhh");
        props.logout();
        window.localStorage.removeItem("User");
    };
    const router = (0,router_.useRouter)();
    if (props.user && props.user.user && props.user.user.id) {
        const id = props.user.user.id;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "nav-container",
            children: props.user.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "menu-icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdTrain, {
                                    })
                                }),
                                "Home"
                            ]
                        })
                    }),
                    id && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: {
                            pathname: "/dashboard",
                            query: {
                                id
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                props.user.user.name,
                                " Dashboard"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            onClick: logoutUser,
                            children: "Logout"
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/register",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Register"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Login"
                        })
                    })
                ]
            })
        })
    }));
};
const mapStateToProps = (state)=>{
    return {
        user: state.allUsers
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        logout: ()=>{
            dispatch((0,actions/* logOut */.ni)());
        },
        getData: (data)=>{
            dispatch((0,actions/* getInitial */.gc)());
        }
    };
};
/* harmony default export */ const components_Nav = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(Nav));

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
;// CONCATENATED MODULE: ./pages/_app.js








function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
            store: store_0,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {
                    className: "navv"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                    position: "top-center",
                    autoClose: 1500
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,474], () => (__webpack_exec__(2528)));
module.exports = __webpack_exports__;

})();