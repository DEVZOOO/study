/**
 * updated stories
 */

import { NAV_MENU } from "@/const";
import StoryItem from "./StoryItem";

// css
import styles from "./Story.module.scss";

interface storyItem {
    user: string;
    img: string;
}

const Story = ({
    list = [],
}) => {

    return (
        <div className={styles.storyWrap}>
            <ul className={styles.storyList}>
                {
                list.map( (v, i) => (
                    <li key={i}>
                        {/* <img src={`/img/${v.img}`} className={styles.img} alt={v.user} title={v.user} />
                        <span>{v.user}</span> */}
                        <StoryItem item={v} />
                    </li>
                ))
                }
            </ul>
            
        </div>
    );
};

export default Story;
