import { connect } from "react-redux";
import Artists from "../routes/Artists";
function joinArtistPages(pages) {
  return [].concat(...pages.map(page => page.items));
}

const mapStateToProps = state => ({
  artists: joinArtistPages(state.artists),
});

const mapDispatchToProps = dispatch => ({
  // toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artists);
