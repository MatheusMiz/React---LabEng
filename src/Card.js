import React from 'react';
import Avatar from './Avatar';

function Card({children}){
  return(
    <div className='card'>
      {children}
    </div>
  );
}

export default function Profile(){
  return(
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          ImageID: 'YfeOqp2'
        }}
      />
    </Card>
  );
}