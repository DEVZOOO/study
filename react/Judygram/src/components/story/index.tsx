/**
 * updated stories
 */

import { NAV_MENU } from "@/const";

// css
import styles from "./Story.module.scss";

interface storyItem {
    user: string;
    img: string;
}

const Story = () => {

    const stories: storyItem[] = [
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
        <div className={styles.storyWrap}>
            <ul className={styles.storyList}>
                {
                stories.map( (v, i) => (
                    <li key={i}>
                        <img src={`/img/${v.img}`} className={styles.img} alt={v.user} title={v.user} />
                        <span>{v.user}</span>
                    </li>
                ))
                }
            </ul>
            
        </div>
    );
};

export default Story;
