import { db } from './firebase';
import Member from '../entities/Member';

export const createUser = (id, name) =>
  db.ref('users/'+id).set({
    name,
  });

export const getUserInfo = id =>
    db.ref('users/'+id).once('value', snapshot =>
    snapshot.val());

export const createProject = project =>
  db.ref('projects/').push(project);

export const joinProject = (projectId, userId, userName) =>
  db.ref('projects/'+projectId+'/memberList/').once('value', snapshot => {
    var members= snapshot.val();
    members.push(new Member(userId, userName));
    db.ref('projects/'+projectId).update({ memberList: members });
  });

export const getProjectName = idProject =>
    db.ref('projects/'+ idProject).once('value', snapshot =>
    snapshot.val());

export const projectsReference = db.ref('projects/');

export const createTask = (task, projectId) =>
  db.ref('projects/'+projectId+'/tasks/').push(task);

export const checkTask = (taskId, projectId) =>
  db.ref('projects/'+projectId+'/tasks/'+taskId).update({ completed: true });

export const uncheckTask = (taskId, projectId) =>
  db.ref('projects/'+projectId+'/tasks/'+taskId).update({ completed: false });

export const removeTask = (taskId, projectId) =>
  db.ref('projects/'+projectId+'/tasks/'+taskId).remove();

export const tasksReference = (projectId) =>
  db.ref('projects/'+projectId+'/tasks/');
