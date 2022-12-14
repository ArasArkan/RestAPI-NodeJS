import {dbRef,database} from '../dataAccess/firebaseConfig.js';
import { ref, set, push, child, remove, get, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import { getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';

export const createUser =  async function(req,res){
    const {password, username} = req.body;
    const data = {
        "password":password,
        "username":username
    }

    const userId = push(ref(database, "Users"));
    set(userId, data);
    res.send("A user added");
}

export const deleteUser = function(req,res){
    remove(ref(database, `Users/${req.params.id}`));
    res.send("A user deleted");
}

export const getUserById = function(req,res){
    get(child(dbRef, `Users/${req.params.id}`)).then(snapshot => {
       res.json(snapshot.val());
    })
}

export const getLoginDatas = async function(req,res){
    
}

export const getAllUsers = async function(req,res){
    get(child(dbRef, "Users/")).then(snapshot => {
        res.send(snapshot.val());
      });
}

