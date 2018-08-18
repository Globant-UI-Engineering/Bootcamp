import Member from './Member.js';

class Project {
  constructor(name, privacity, description, estimatedTime, userID, userName) {
      this.name=name;
      this.privacity=privacity;
      this.description=description;
      this.estimatedTime=estimatedTime;
      this.creatorId=userID;
      this.creatorName=userName;
      this.memberList=[new Member(userID, userName)];
  }
}

export default Project;
