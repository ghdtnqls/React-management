import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생',
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍수빈',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생',
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍나래',
  'birthday' : '961222',
  'gender' : '여자',
  'job' : '회사원',
},
]




class App extends Component {
  render() {
    return (
      <React.Fragment>
      {
        customers.map(c => {
          return (
            <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job} />
          )
        })
      }
      </React.Fragment>

    )
  }
    
  
}

export default App;
