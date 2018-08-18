import React from 'react';
import { db } from '../../firebase';
import App from '../App';
import Loader from '../Loader';
import LogOutButton from '../../auth/LogoutButton';
import withAuthorization from '../../auth/withAuthorization';
import MyProjectsList from './MyProjects';
import MemberProjectsList from './MemberProjects';
import PublicProjectsList from './PublicProjects';
import '../../css/Home.css';

class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      myProjects: [],
      joinedProjects: [],
      publicProjects: []
    }
  }

  componentDidMount() {
    db.projectsReference.on('value', snapshot => {
      var myProjectsData = [];
      var joinedProjectsData = [];
      var publicProjectsData = [];
      snapshot.forEach(value => {
        var project=value.val();
        project['key'] = value.key;
        if(project.creatorId===this.props.authUserId){
          myProjectsData.push(project);
        }
        else if(project.memberList.filter(member => (member.id === this.props.authUserId)).length>0){
          joinedProjectsData.push(project);
        }
        else if(project.privacity==='public'){
          publicProjectsData.push(project);
        }

      });

      this.setState({
        myProjects: myProjectsData,
        joinedProjects: joinedProjectsData,
        publicProjects: publicProjectsData,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    db.projectsReference.off();
  }

  render () {
    return (
      this.state.loading ? <Loader/>
      :
      <App>
        <main className="Personal-projects">
          <MyProjectsList authUserId={this.props.authUserId} authUserName={this.props.authUserName} projects={this.state.myProjects}/>
          <MemberProjectsList authUserId={this.props.authUserId} projects={this.state.joinedProjects}/>
        </main>
        <aside>
          <PublicProjectsList authUserId={this.props.authUserId} authUserName={this.props.authUserName} projects={this.state.publicProjects}/>
        </aside>
        <footer>
          <LogOutButton/>
        </footer>
      </App>
    );
  }

}

const authCondition = (authUser) => authUser;

export default withAuthorization(authCondition)(Home);
