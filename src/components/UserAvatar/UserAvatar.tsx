import React from 'react';
import Avatar from '@mui/material/Avatar';

export interface AvatarProps {
    avatar: string
}

const UserAvatar = function ({ avatar }: AvatarProps) {
    return (
        <div>
            <Avatar src={avatar} sx={{ width: '12vw', height: '12vw' }}/>
        </div>
    );
};

export default UserAvatar;
