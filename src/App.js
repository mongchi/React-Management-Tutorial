import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '950122',
    'gender': '남자',
    'job': '디자이너'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '삐뽀',
    'birthday': '900808',
    'gender': '여자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '땡땡',
    'birthday': '880304',
    'gender': '여자',
    'job': '의사'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
    </div>
  );
}

export default App;
