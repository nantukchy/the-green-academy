import React, { useEffect, useState } from 'react';
import Use from '../user/Use';

const Users = () => {
    const [user, setUser] = useState([]);
    const newStyle = {
        color: 'lightGreen',
        display: 'grid',
        gridTemplateColumns:'repeat(3, 1fr)' 
        
    }
    useEffect(() => {
        fetch('./fakeData/info.json')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    return (
        <>
            <h1 className="text-success">Our Courses</h1>
        <h5>The course aims to develop a solid understanding of the principles and procedures underlying the design and development of garden areas. The subject is relevant to both public and private landscaping and equally of value in developing home gardens or public parks. Though consideration is given to both design and construction, the emphasis throughout the course is landscape design itself.</h5>
        <div style={newStyle}>
            {
                user.map(user => <Use
                    key={user.id}
                    user={user}
                ></Use>)
            }
            </div>
            </>
    );
};

export default Users;