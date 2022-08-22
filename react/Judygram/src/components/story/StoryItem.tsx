/**
 * story item
 */
import styles from "./Story.module.scss";

interface IStoryItem {
    user: string;
    img: string;
}

const StoryItem = (props) => {
    const item: IStoryItem = props.item;

    return (<>
        <img src={`/img/${item.img}`} className={styles.img} alt={item.user} title={item.user} />
        <span>{item.user}</span>
    </>);
};

export default StoryItem;
