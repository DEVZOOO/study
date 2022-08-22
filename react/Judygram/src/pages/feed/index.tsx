/**
 * Home(Feed)
 */
import { wrapper } from "@/reducers";
import { setNavMenu } from "@/reducers/store/nav";
import { NAV_MENU } from '@/const';
 
import Story from "@/components/story";

// css
import styles from "./Feed.module.scss";

const Feed = () => {
    const stories = [
        {
            user : "Judy",
            img : "test_icon.png",
        },
        {
            user : "test_user",
            img : "coin.png",
        },
    ];

    return (
        <Story list={stories} />
    );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
    // console.log('ctx', ctx);

    store.dispatch(setNavMenu(NAV_MENU.FEED));
    return {
        props : {
            // resolvedUrl : ctx.resolvedUrl,
        }
    };
});


export default Feed;