/**
 * Index
 */


import wrapper from "@/reducers/store";

import Layout from "@/components/layout";
import { getData } from "@/pages/api/hello";

export const Main = ({index}) => {
    // fetch("/api/hello")
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((json) => {
    //         setTitle(json.title);
    //     });

    return (<>
        <h2>Main</h2>
    </>);
}

export default Main;

// export async function getStaticProps() {
//     const result = getData();
//     return {
//         props : {
//             index : result,
//         }
//     }
// }
