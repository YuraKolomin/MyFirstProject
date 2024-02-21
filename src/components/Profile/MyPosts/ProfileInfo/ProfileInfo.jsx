import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return <div>

        <div>
            <img className={s.backgroundImage} src={props.mainBackground} alt='' />
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>;
}

export default ProfileInfo;