import React from 'react';
import ReactTooltip from "react-tooltip";
import defaultAvatar from '../../../assets/icons/photo-cover.svg';

const User = ({user}) => (
    <div className="user">
        <img
            className="user__photo"
            src={user.photo || defaultAvatar}
            alt={user.name}
            onError={e => {
                e.target.src = defaultAvatar;
            }}
        />
        <div className="user-info-wrapper">
            <h3 className="user__name h2">{user.name}</h3>
            <p className="user__position">{user.position}</p>
            <p className="user__email" data-tip={user.email}>{user.email}</p>
            <ReactTooltip border={false} place={'bottom'} className={'user__tooltip'}/>
            <p className="user__phone">{
                user.phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}
            </p>
        </div>
    </div>

);

export default User;
