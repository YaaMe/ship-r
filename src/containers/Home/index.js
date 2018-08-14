import React from 'react';
import { connect } from 'react-redux';
import markdown from 'marked';
import { getActivity } from 'actions/home';

const mapStateToProps = ({ home }) => ({ home });
const mapDispatchToProps = dispatch => ({
  getActivity: () => dispatch(getActivity())
});

class Home extends React.Component {
  componentDidMount() {
    this.props.getActivity();
  }
  render() {
    const { activity = '# loading...' } = this.props.home;
    return (
        <div dangerouslySetInnerHTML={{__html: markdown.parse(activity)}}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
