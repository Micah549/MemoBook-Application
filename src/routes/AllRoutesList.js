import Home from "../pages/Home";
import Memo from '../pages/Memo';
import Games from '../pages/Games';

export const AllRoutesList =[
    {name: "Home", path:"/Home", comp:<Home/>   },
    {name:"Memo", path:"/Memo" ,comp:<Memo/>},
    {name:"Games", path:"/Games", comp:<Games/>}
]