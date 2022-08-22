/**
 * Profile Block in Account
 */

import styles from "./Account.module.scss";

const Profile = () => {
    return (<>
        {/* profile */}
        <div>
            <ul className={styles.infoWrap}>
                <li>
                    {/* photo */}
                    <img src="/img/user.png" />
                </li>
                <li>
                    {/* post */}
                    <strong>100000000</strong>
                    <span>게시물</span>
                </li>
                <li>
                    {/* follower */}
                    <strong>100</strong>
                    <span>팔로워</span>
                </li>
                <li>
                    {/* following */}
                    <strong>31</strong>
                    <span>팔로잉</span>
                </li>
            </ul>
        </div>
        
        name
        desc
        url
        edit profile
    </>);
};

export default Profile;