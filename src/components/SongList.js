import React, {Component} from 'react'; //Use curly braces for named export (not default)
import {connect} from 'react-redux'

class SongList extends Component {
   render() {
       // this.props === {songs: state.songs}
       console.log("2")
       console.log(this.props);
       console.log(this.state);
       return <div>SongList</div>;
   }
};

const mapStateToProps = (state) => {
   console.log("1")
    console.log(state);
   return {songs: state.songs};
}

export default connect(mapStateToProps)(SongList);
