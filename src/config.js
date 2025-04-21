import Exam8 from './component/Exam8/Exam';

import Exam9 from './component/Exam9/Exam9';
import E9_1 from './component/Exam9/Pages/Login';
import E9_2 from './component/Exam9/Pages/Home';
import E9_3 from './component/Exam9/Pages/BookGallery';
import E9_4 from './component/Exam9/Pages/Detail';


import Exam10 from './component/Exam10/Exam';
const routes =[
    {
        id:1,
        name:'React exam 8',
        path: '/exam8',
        component: Exam8
    },{
        id:2,
        name:'React exam 9',
        path: '/exam9',
        component: Exam9,
        chilldren:[
            {id:2001,name:'Login',path:'/exam9/login',component:E9_1},
            {id:2002,name:'Home',path:'/exam9/home',component:E9_2},
            {id:2003,name:'Book Gallery',path:'/exam9/book-gallery',component:E9_3},
            {id:2004,name:'Detail',path:'/exam9/book/:id',component:E9_4}
        ]
    },{
        id:3,
        name:'React exam 10',
        path: '/exam10',
        component: Exam10
    }
];

export default routes;