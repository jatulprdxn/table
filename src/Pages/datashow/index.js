import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../../store/action';
import { flagUpdation } from '../../store/action';
import { updateUserDetail } from '../../store/action';
import { deletedUsers } from '../../store/action';
import SearchBox from '../../component/head'
import './style.scss';

function Tables(props) {
  useEffect(() => {
    props.fetchIntialData()  // intial fetch data from api 
  },[])  

function handleUpdate(e,index) {                 // make td of table editable on click
  const ind = props.users.map((eachItem,i) => {
    if(i === index) {
        if(!eachItem.isEditable) {
          eachItem.isEditable = true
        }
        else {
          eachItem.isEditable = false
        }
      return eachItem;
    } 
    else {
      return eachItem;
    }
  })
  props.updateFlag(ind);
}

function handleDelete(e,index) {                          // delete user from table 
  let filteredUsers = props.users.filter((item,i) => i !== index)
  props.deleteUsers(filteredUsers);
} 

function handleUpdatedValue(e,index) {                     //   update the detail of user on fly 
  const updatedUserDetail = props.users.map((user,i) => {
    if(i===index) {
      user[e.target.name] = e.target.value;
    }
    return user
  })
  props.updateDetail(updatedUserDetail);
}

function sorting(e,sortby) {      // sorting the based on id,name,email-id 
let temp = [];
let temp1= [];

if(sortby !== 'id') {
  props.users.forEach(item => temp.push(item[sortby]))
  temp.sort();
  temp.forEach(name => {
  props.users.forEach(item => {
    if(name===item[sortby]) {
      temp1.push(item);
    }
  })
}) 
}
else {
  console.log("else",sortby);
  console.log("else",props.users);
  temp1 =  props.users.sort((a,b) => {
    return a[sortby]-b[sortby];
  });
//   props.users.forEach(item => temp.push(item[sortby]))
//   temp.sort();
//   temp.forEach(name => {
//   props.users.forEach(item => {
//     if(name===item[sortby]) {
//       temp1.push(item);
//     }
//   })
// }) 
}
props.updateDetail(temp1);
}
  return (
    <div>
      <SearchBox/>
      <table id='users'>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <td></td>
          </tr>
        {
           props.text?(                   // responsible for when try search something in search box
            props.users.map((user,index) => {                                                            
              let ids = user.id.toString();
              if(ids.startsWith(props.text)||
              user.name.startsWith(props.text)||
              user.email.startsWith(props.text)) {
                return (
              <tr key={user.id}>
              <td>{user.id}</td>
              {
                user.isEditable===true?
                <td><input type="text" name="name" value={user.name} onChange={(e) => handleUpdatedValue(e,index)} /></td>:
                <td>{user.name}</td>
              }
              {
                user.isEditable===true?
                <td><input type="text" name="email" value={user.email} onChange={(e) => handleUpdatedValue(e,index)} /></td>:
                <td>{user.email}</td>
              }
              <td>
                <button onClick={(e) => handleUpdate(e,index)}>Update</button>
              </td>
              <td>
                <button onClick={(e) => handleDelete(e,index)}>Delete</button>
              </td>
                </tr>  )
            }
          })
           ):
          (
            props.users.map((user,index) => {           //intial display data when page load
            const { id, name, email,isEditable } = user;
            return (
            <tr key={id}>
            <td>{id}</td>
            {
              isEditable===true?
              <td><input type="text" name="name" value={name} onChange={(e) => handleUpdatedValue(e,index)} /></td>:
              <td>{name}</td>
            }
            {
              isEditable===true?
              <td><input type="text" name="email" value={email} onChange={(e) => handleUpdatedValue(e,index)} /></td>:
              <td>{email}</td>
            }
            <td>
              <button onClick={(e) => handleUpdate(e,index)}>Update</button>
            </td>
            <td>
              <button onClick={(e) => handleDelete(e,index)}>Delete</button>
            </td>
          </tr>
          )
        }))
       }
        </tbody>
      </table>
      <div>
        <button onClick={(e) => sorting(e,"id")}>SortById</button>
        <button onClick={(e) => sorting(e,"name")}>SortByName</button>
        <button onClick={(e) => sorting(e,"email")}>SortByEmail</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users:state.users,
    text:state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIntialData: () => dispatch(fetchData()),
    updateFlag:(ind) => dispatch(flagUpdation(ind)),
    updateDetail :(userdetail) => dispatch(updateUserDetail(userdetail)),
    deleteUsers :(deleteuser) => dispatch(deletedUsers(deleteuser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tables);
